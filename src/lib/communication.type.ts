import { ChatMessage, Conversation, Directory } from '@/types/models';

export type DirectoryResponse = {
  items: Directory[];
  count: number;
};

export type CreateDirectoryPayload = {
  name: string;
  parent: string;
};

export type MoveDirectoryPayload = {
  conversationIds: string[];
  fromPath?: string;
  toPath: string;
};

export type ConversationResponse = {
  items: Conversation[];
  count: number;
};
export type MessagesResponse = {
  items: ChatMessage[];
  count: number;
  nextPageKey?: string;
};

export type NewMessagePayload = {
  conversationId: string;
  body: string;
};
export type NewParticipantPayload = {
  conversationId: string;
  participants: string[];
};
export type NewConversationPayload = {
  participants: string[];
  path?: string;
  title: string;
};
