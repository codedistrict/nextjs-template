import { SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { fetcher } from '@/lib/https';
import { APIResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';
import { PrivacySettings, User } from '@/types/models';

const ACCOUNT_URI = 'api/v1/account';

const LIMIT = 60;

type UserListResponse = {
  list: User[];
  count: number;
};

/**
 * Read account of given user
 * @param email. Email of user
 */
export function useAccount<User>(email?: string): APIResponse<User> {
  let uri = '';

  if (email) {
    uri = `${ACCOUNT_URI}?username=${email}`;
  }

  return useFetch<User>(SERVICES.ACCOUNT, uri);
}

/**
 * Read account of actual user
 */
export function useUserAccount(): APIResponse<User> {
  return useFetch<User>(SERVICES.ACCOUNT, ACCOUNT_URI);
}

/**
 * Read privacy settings of given user
 * @param userId. GUID
 */

export function usePrivacySettings(userId: string): APIResponse<PrivacySettings> {
  let uri = '';
  if (userId) {
    uri = `${ACCOUNT_URI}/privacy?userId=${userId}`;
  }
  return useFetch<PrivacySettings>(SERVICES.ACCOUNT, uri, undefined, {
    revalidateOnFocus: false,
  });
}

/**
 * Update user account
 * @param email. Email of user */

export async function updateAccountData(email: string | undefined, payload: Partial<User>) {
  const data = { ...payload, username: email };
  return fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, ACCOUNT_URI, data);
}

export async function updatePrivacyData(userId: string, payload: Partial<User>) {
  let uri = '';
  if (userId) {
    uri = `${ACCOUNT_URI}/privacy`;
  }
  const data = { ...payload, userId };
  return fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, uri, data);
}

/**
 * Read account of given user
 * @param email. Email of user
 */

export function useAccountById(userId: string): APIResponse<User> {
  let uri = '';
  if (userId) {
    uri = `${ACCOUNT_URI}?userId=${userId}`;
  }
  return useFetch<User>(SERVICES.ACCOUNT, uri, undefined, {
    revalidateOnFocus: false,
  });
}
/**
 * Search user by attribute
 * @param key. Attribute
 * @param value. keyword
 * @param limit
 * @param offset
 */
export function useSearchUser(
  key: string,
  value: string,
  limit = LIMIT,
  offset = 0
): APIResponse<UserListResponse> {
  let uri = '';
  if (key && value) {
    uri = `${ACCOUNT_URI}?${key}=${value}&limit=${limit}&offset=${offset}`;
  }
  return useFetch<UserListResponse>(SERVICES.ACCOUNT, uri);
}

export async function checkEmailExists(email: string): Promise<any> {
  let uri = '';
  if (email) {
    uri = `${ACCOUNT_URI}/check?email=${email}`;
  }
  return fetcher(SERVICES.ACCOUNT, MethodTypes.GET, uri);
}

export const getAccountCacheKey = (email: string) => {
  return `${ACCOUNT_URI}?username=${email}`;
};

export const getAccountPrivacyCacheKey = (userId: string) => {
  return `${ACCOUNT_URI}/privacy?userId=${userId}`;
};

/**
 * Create user account
 * @param email. Email of user */

export async function createAccount(payload: Partial<User>) {
  return fetcher(SERVICES.ACCOUNT, MethodTypes.POST, ACCOUNT_URI, payload);
}

/**
 * Delete user account
 * @param username. Username of user */
export async function closeUserAccount(username: string) {
  return fetcher(SERVICES.ACCOUNT, MethodTypes.DELETE, `${ACCOUNT_URI}?username=${username}`);
}

/**
 * Get account by email
 * @param username. Username/Email of user
 */
export async function getAccountByUsername(username: string) {
  return fetcher(SERVICES.ACCOUNT, MethodTypes.GET, `${ACCOUNT_URI}/?username=${username}`);
}

export async function getPrivacySettings(userId: string) {
  return fetcher(SERVICES.ACCOUNT, MethodTypes.GET, `${ACCOUNT_URI}/privacy?userId=${userId}`);
}
