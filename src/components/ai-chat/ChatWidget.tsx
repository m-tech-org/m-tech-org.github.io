import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { MessageCircle, Send, X, Maximize2, Minimize2 } from 'lucide-react';
import { sendChatMessage, type ChatMessage } from '../../services/aiChat.ts';
import { aiChatConfig, isAiChatConfigured } from '../../config/aiChat.ts';
import styles from './chat-widget.module.css';

const STORAGE_KEY_MESSAGES = 'mtech-ai-chat-messages';
const STORAGE_KEY_POSITION = 'mtech-ai-chat-position';
const STORAGE_KEY_GREETED_AT = 'mtech-ai-chat-greeted-at';
const BUBBLE_SIZE = 60;
const VIEWPORT_MARGIN = 16;
const DRAG_THRESHOLD = 6;
const PANEL_WIDTH = 360;
const PANEL_HEIGHT = 480;
const PANEL_GAP = 12;
const GREETING_WIDTH = 220;
const GREETING_GAP = 12;

interface Position {
  x: number;
  y: number;
}

function loadMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MESSAGES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function loadPosition(): Position | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_POSITION);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clampPosition(pos: Position): Position {
  const maxX = window.innerWidth - BUBBLE_SIZE - VIEWPORT_MARGIN;
  const maxY = window.innerHeight - BUBBLE_SIZE - VIEWPORT_MARGIN;
  return {
    x: Math.min(Math.max(pos.x, VIEWPORT_MARGIN), Math.max(maxX, VIEWPORT_MARGIN)),
    y: Math.min(Math.max(pos.y, VIEWPORT_MARGIN), Math.max(maxY, VIEWPORT_MARGIN)),
  };
}

function defaultPosition(): Position {
  return clampPosition({
    x: window.innerWidth - BUBBLE_SIZE - 24,
    y: (window.innerHeight - BUBBLE_SIZE) / 2,
  });
}

function computePanelStyle(bubble: Position): CSSProperties {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.min(PANEL_WIDTH, vw - VIEWPORT_MARGIN * 2);
  const height = Math.min(PANEL_HEIGHT, vh - VIEWPORT_MARGIN * 2);

  const spaceAbove = bubble.y;
  const spaceBelow = vh - (bubble.y + BUBBLE_SIZE);
  const top =
    spaceAbove >= height + PANEL_GAP || spaceAbove > spaceBelow
      ? Math.max(VIEWPORT_MARGIN, bubble.y - height - PANEL_GAP)
      : Math.min(vh - height - VIEWPORT_MARGIN, bubble.y + BUBBLE_SIZE + PANEL_GAP);

  let left = bubble.x + BUBBLE_SIZE - width;
  left = Math.min(left, vw - width - VIEWPORT_MARGIN);
  left = Math.max(left, VIEWPORT_MARGIN);

  return { top, left, width, height };
}

function computeExpandedPanelStyle(): CSSProperties {
  return {
    top: VIEWPORT_MARGIN,
    left: VIEWPORT_MARGIN,
    width: window.innerWidth - VIEWPORT_MARGIN * 2,
    height: window.innerHeight - VIEWPORT_MARGIN * 2,
  };
}

function computeGreetingStyle(bubble: Position): CSSProperties {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.min(GREETING_WIDTH, vw - VIEWPORT_MARGIN * 2 - BUBBLE_SIZE - GREETING_GAP);

  let left = bubble.x - width - GREETING_GAP;
  if (left < VIEWPORT_MARGIN) {
    left = bubble.x + BUBBLE_SIZE + GREETING_GAP;
  }
  left = Math.min(Math.max(left, VIEWPORT_MARGIN), vw - width - VIEWPORT_MARGIN);

  const top = Math.min(Math.max(bubble.y - 4, VIEWPORT_MARGIN), vh - VIEWPORT_MARGIN - 56);

  return { top, left, width };
}

export function ChatWidget() {
  const configured = isAiChatConfigured();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>(() => loadPosition() ? clampPosition(loadPosition()!) : defaultPosition());
  const [showGreeting, setShowGreeting] = useState(false);

  const dragState = useRef<{ startX: number; startY: number; origX: number; origY: number; moved: boolean } | null>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_POSITION, JSON.stringify(position));
  }, [position]);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setIsExpanded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setPosition((pos) => clampPosition(pos));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!configured || messages.length > 0) return;
    let lastShownAt = 0;
    try {
      lastShownAt = Number(localStorage.getItem(STORAGE_KEY_GREETED_AT)) || 0;
    } catch {
      return;
    }
    // Cooldown, not a one-time flag: reappears once greetingCooldownMs has
    // elapsed since it last showed, as long as no conversation has started.
    if (lastShownAt && Date.now() - lastShownAt < aiChatConfig.greetingCooldownMs) return;

    const timer = setTimeout(() => {
      setShowGreeting(true);
      try {
        localStorage.setItem(STORAGE_KEY_GREETED_AT, String(Date.now()));
      } catch {
        // ignore — worst case the cooldown doesn't persist across reloads
      }
    }, aiChatConfig.greetingDelayMs);
    return () => clearTimeout(timer);
    // Runs once on mount, checking the initial `messages`/`configured` snapshot only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismissGreeting = useCallback(() => {
    setShowGreeting(false);
  }, []);

  const handlePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      dragState.current = { startX: e.clientX, startY: e.clientY, origX: position.x, origY: position.y, moved: false };
      bubbleRef.current?.setPointerCapture(e.pointerId);
    },
    [position]
  );

  const handlePointerMove = useCallback((e: ReactPointerEvent<HTMLButtonElement>) => {
    const state = dragState.current;
    if (!state) return;
    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      state.moved = true;
    }
    if (state.moved) {
      setPosition(clampPosition({ x: state.origX + dx, y: state.origY + dy }));
    }
  }, []);

  const handlePointerUp = useCallback((e: ReactPointerEvent<HTMLButtonElement>) => {
    const state = dragState.current;
    bubbleRef.current?.releasePointerCapture(e.pointerId);
    dragState.current = null;
    if (state && !state.moved) {
      setIsOpen((open) => !open);
      dismissGreeting();
    }
  }, [dismissGreeting]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading || !configured) return;
    setInput('');
    setError(null);
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setIsLoading(true);
    try {
      const reply = await sendChatMessage(nextMessages);
      setMessages((curr) => [...curr, { role: 'assistant', content: reply }]);
    } catch {
      setError("Something went wrong reaching the assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, configured]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((expanded) => !expanded);
  }, []);

  const bubbleStyle: CSSProperties = { left: position.x, top: position.y };
  const panelStyle: CSSProperties = isOpen
    ? isExpanded
      ? computeExpandedPanelStyle()
      : computePanelStyle(position)
    : {};
  const bubbleHidden = isOpen && isExpanded;

  return (
    <>
      {!bubbleHidden && (
        <button
          ref={bubbleRef}
          type="button"
          className={styles.bubble}
          style={bubbleStyle}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      )}

      {showGreeting && !isOpen && (
        <div className={styles.greeting} style={computeGreetingStyle(position)} role="status">
          <button
            type="button"
            className={styles.greetingBody}
            onClick={() => {
              setIsOpen(true);
              dismissGreeting();
            }}
          >
            {aiChatConfig.greetingMessage}
          </button>
          <button type="button" className={styles.greetingClose} onClick={dismissGreeting} aria-label="Dismiss greeting">
            <X size={12} />
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className={isExpanded ? `${styles.panel} ${styles.panelExpanded}` : styles.panel}
          style={panelStyle}
          role="dialog"
          aria-label="M-Tech AI Assistant"
        >
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>M-Tech Assistant</span>
            <div className={styles.panelHeaderActions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={handleToggleExpand}
                aria-label={isExpanded ? 'Collapse chat' : 'Expand chat'}
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button type="button" className={styles.iconButton} onClick={() => setIsOpen(false)} aria-label="Close">
                <X size={16} />
              </button>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 && (
              <p className={styles.emptyState}>
                {configured
                  ? "Hi! Ask me anything about M-Tech's services, projects, or how to get in touch."
                  : "The AI assistant isn't configured yet. Check back soon, or reach us directly at mtechltd2021@gmail.com."}
              </p>
            )}
            {messages.map((message, index) => (
              <div key={index} className={message.role === 'user' ? styles.messageUser : styles.messageAssistant}>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className={styles.messageAssistant} aria-live="polite" aria-label="Assistant is thinking">
                <span className={styles.typingDots}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </span>
              </div>
            )}
            {error && <div className={styles.errorMessage}>{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputRow}>
            <textarea
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={configured ? 'Type a message…' : 'Assistant not configured yet'}
              disabled={!configured || isLoading}
              rows={1}
            />
            <button
              type="button"
              className={styles.sendButton}
              onClick={handleSend}
              disabled={!configured || isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
