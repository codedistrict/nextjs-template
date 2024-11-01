import { User } from '@/types/models/user';

export type Chat = {
  _id: string;
  description?: string;
  users: User[];
};

export type Directory = {
  isSystemDirectory: boolean;
  name: string;
  parent: string;
  absolutePath: string;
};

export type Conversation = {
  lastRead: Date;
  id: string;
  ownerId: string;
  title: string;
  lastActive: Date;
  path: string;
  flagged: boolean;
  isNew: boolean;
  read: symbol;
  unreadMessagesCount: number;
  participants: User[];
  isDeleted: boolean;
  locked: boolean;
};

export type ChatMessage = {
  messageId: string;
  conversationId: string;
  senderId: string;
  timestamp: Date;
  body: string;
  attachments: Attachment[];
};

export type Attachment = {
  type: string;
  payload: {
    url: string;
  };
};
