import { SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { fetcher } from '@/lib/https';
import { APIResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';

import {
  ConversationResponse,
  CreateDirectoryPayload,
  DirectoryResponse,
  MessagesResponse,
  MoveDirectoryPayload,
  NewConversationPayload,
  NewMessagePayload,
  NewParticipantPayload,
} from './communication.type';
const CONV_URI = 'api/v1/chat/conversations';
const DIR_URI = 'api/v1/chat/directories';
const MSG_URI = 'api/v1/chat/messages';
const LIMIT = 10;
/**
 * Read Directories of chats
 */

export function useDirectories(): APIResponse<DirectoryResponse> {
  return useFetch<DirectoryResponse>(SERVICES.CHAT, DIR_URI);
}

/**
 * Get Filter conversations
 */

export function useFilter(filter: string | null): APIResponse<ConversationResponse> {
  let uri = '';
  if (filter) {
    uri = `${CONV_URI}/${filter}`;
  }
  return useFetch<ConversationResponse>(SERVICES.CHAT, uri);
}

/**
 * Get conversations of folder
 */

export function useConversations(folder: string | undefined): APIResponse<ConversationResponse> {
  let uri = '';
  if (folder) {
    uri = `${CONV_URI}?path=${folder}`;
  }
  return useFetch<ConversationResponse>(SERVICES.CHAT, uri);
}

/**
 * Get conversations of folder
 */

export function useConversationById(id: string): APIResponse<ConversationResponse> {
  let uri = '';
  if (id) {
    uri = `${CONV_URI}?id=${id}`;
  }
  return useFetch<ConversationResponse>(SERVICES.CHAT, uri);
}

/**
 * Search conversations in all folders
 */

export function useSearchConversations(term: string): APIResponse<ConversationResponse> {
  let uri = '';
  if (term) {
    uri = `${CONV_URI}?term=${term}`;
  }
  return useFetch<ConversationResponse>(SERVICES.CHAT, uri);
}

/**
 * Get conversation messages
 * @param conversationId
 */

export function useConversationMessages(
  conversationId: string,
  nextPageKey: string | undefined,
  limit = LIMIT
): APIResponse<MessagesResponse> {
  let uri = '';
  let pageKeyStr = '';
  if (nextPageKey) {
    pageKeyStr = `&pageKey=${nextPageKey}`;
  }
  if (conversationId) {
    uri = `${MSG_URI}?conversationId=${conversationId}&limit=${limit}${pageKeyStr}`;
  }
  return useFetch<MessagesResponse>(SERVICES.CHAT, uri);
}

/**
 * Get conversations by id
 */

export function useConversation(conversationId: string | null): APIResponse<ConversationResponse> {
  let uri = '';
  if (conversationId) {
    uri = `${CONV_URI}?id=${conversationId}`;
  }
  return useFetch<ConversationResponse>(SERVICES.CHAT, uri);
}

/**
 * Sends a new message
 * @param payload
 */
export function postMessage(payload: NewMessagePayload) {
  return fetcher(SERVICES.CHAT, MethodTypes.POST, MSG_URI, payload);
}

/**
 * Adds users into conversation
 * @param payload
 */
export function addParticipant(payload: NewParticipantPayload) {
  const uri = `${CONV_URI}/participants`;

  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Remove users into conversation
 * @param payload
 */
export function removeParticipant(payload: NewParticipantPayload) {
  const uri = `${CONV_URI}/participants`;

  return fetcher(SERVICES.CHAT, MethodTypes.DELETE, uri, payload);
}
/**
 * Deletes specified folder
 * @param folder. folder path
 */

export function deleteFolder(folder: string) {
  return fetcher(SERVICES.CHAT, MethodTypes.DELETE, DIR_URI, {
    absolutePath: folder,
  });
}

/**
 * Deletes specified conversation
 * @param conversationId
 */

export function deleteConversation(conversationId: string) {
  return fetcher(SERVICES.CHAT, MethodTypes.DELETE, CONV_URI, {
    conversationId,
  });
}

/**
 * Creates a new directory
 * @param payload
 */
export function createFolder(payload: CreateDirectoryPayload) {
  return fetcher(SERVICES.CHAT, MethodTypes.POST, DIR_URI, payload);
}

/**
 * Moves a conversation from one folder to another
 * @param payload
 */
export function moveConversation(payload: MoveDirectoryPayload) {
  const uri = CONV_URI + '/move';
  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Starts a new conversation
 * @param payload
 */
export function createConversation(payload: NewConversationPayload) {
  return fetcher(SERVICES.CHAT, MethodTypes.POST, CONV_URI, payload);
}

/**
 * Marks conversation flagged
 * @param payload
 */
export function markConversationFlagged(payload: { conversationId: string }) {
  const uri = CONV_URI + '/flag';

  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Marks conversation unflagged
 * @param payload
 */
export function markConversationUnFlagged(payload: { conversationId: string }) {
  const uri = CONV_URI + '/unflag';

  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Marks conversation as read
 * @param payload
 */
export function markConversationRead(payload: { conversationId: string; timestamp: Date }) {
  const uri = CONV_URI + '/read';

  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Rename conversation title
 * @param payload
 */
export function renameConversationTitle(payload: { conversationId: string; title: string }) {
  const uri = CONV_URI + '/rename';

  return fetcher(SERVICES.CHAT, MethodTypes.POST, uri, payload);
}

/**
 * Return SWR cache key after post request to invalidate the cache
 * @param businessId
 */
export const getDirectoryCacheKey = () => {
  return `${DIR_URI}`;
};

/**
 * Return SWR cache key after post request to invalidate the cache
 * @param businessId
 */
export const getMessagesCacheKey = (conversationId: string, nextPageKey: string, limit = LIMIT) => {
  let pageKeyStr = '';
  if (nextPageKey) {
    pageKeyStr = `&pageKey=${nextPageKey}`;
  }
  return `${MSG_URI}?conversationId=${conversationId}&limit=${limit}${pageKeyStr}`;
};

/**
 * Return SWR cache key after post request to invalidate the cache
 * @param businessId
 */
export const getConversationsCacheKey = (folder: string) => {
  return `${CONV_URI}?path=${folder}`;
};

export const getFilterCacheKey = (filter: string) => {
  return `${CONV_URI}/${filter}`;
};
