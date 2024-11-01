import { SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { APIResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';

import { fetcher } from './https';

export type notificationApiType = {
  content: string;
  id: string;
  read: false;
  senderId: string;
  senderName: string;
  subject: string;
  timestamp: number | string;
};

export type notificationApiResponse = {
  notifications: notificationApiType[];
  unreadCount: number;
};

/**
 * Read User's notifications
 */
export function useNotifications(): APIResponse<notificationApiResponse> {
  return useFetch<any>(SERVICES.NOTIFICATION, '/api/v1/user-notification', undefined, {
    revalidateOnFocus: false,
  });
}

/**
 * Mark notification as read
 */
export function readNotification(notificationId: string) {
  return fetcher(
    SERVICES.NOTIFICATION,
    MethodTypes.PUT,
    '/api/v1/user-notification/read/' + notificationId
  );
}
