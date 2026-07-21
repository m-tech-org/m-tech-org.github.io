export const aiChatConfig = {
  workerUrl: import.meta.env.VITE_AI_WORKER_URL || '',

  // First-load greeting popup (see ChatWidget.tsx). Reappears after
  // greetingCooldownMs has elapsed since it last showed, as long as the
  // visitor hasn't started a conversation in the meantime.
  greetingMessage: "Hello! How can I help you today?",
  greetingDelayMs: 1200,
  greetingCooldownMs: 30 * 60 * 1000, // 30 minutes
};

export function isAiChatConfigured(): boolean {
  return !!aiChatConfig.workerUrl;
}
