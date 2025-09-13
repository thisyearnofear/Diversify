
// AI SDK Compatibility Layer
export { useChat, useCompletion } from 'ai/react';
export { streamText, generateText } from 'ai';
export type { Message, ChatRequest, ChatRequestOptions } from 'ai';

// Re-export everything from ai/react for compatibility
export * from 'ai/react';
