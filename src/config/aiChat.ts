export const aiChatConfig = {
  workerUrl: import.meta.env.VITE_AI_WORKER_URL || '',
  title: 'M-Tech Assistant',
  placeholder: 'Type a message…',
  unconfiguredMessage:
    "The AI assistant isn't configured yet. Check back soon, or reach us directly at mtechltd2021@gmail.com.",

  // First-load greeting popup. Reappears after greetingCooldownMs has elapsed
  // since it last showed, as long as the visitor hasn't started a conversation
  // in the meantime.
  greetingMessage: 'Hello! How can I help you today?',
  greetingDelayMs: 1200,
  greetingCooldownMs: 30 * 60 * 1000, // 30 minutes
};
