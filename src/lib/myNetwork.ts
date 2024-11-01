// import { BusinessItem } from "@/components/MyNetwork/types";
import { DEFAULT_PRIVACY_SETTING, MY_NETWORK_MENUS, PER_PAGE } from '@/constants';
import { BUSINESS_CARD_REQUEST_URI, CONTACTS_REQUEST_URI, SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { fetcher, query } from '@/lib/https';
import { APIResponse, RequestsResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';
import { PrivacySetting, User } from '@/types/models';

export const setMenusWithBadges = (setMenus: Function, badge: string, selectedMenu: number) => {
  // Set the menus without waiting for the badge value
  MY_NETWORK_MENUS.forEach((menu, index) => (menu.selected = index == selectedMenu));
  setMenus(MY_NETWORK_MENUS);

  // Set the badge value
  // MY_NETWORK_MENUS[0].badge = badge; // TODO: need to define MY_NETWORK_MENUS type
  setMenus([...MY_NETWORK_MENUS]);
  // Remove the menus from the header on dismount
  return () => setMenus([]);
};

export const useBCardRequestCount = (): string => {
  const { data } = useFetch<RequestsResponse>(SERVICES.ACCOUNT, 'api/v1/contact/request', {
    body: { direction: 'in' },
  });
  return data?.count?.toString() ?? '';
};

type Item = User; //| BusinessItem;

export const handleItemSelection = (item: Item, setSelected: Function) => {
  setSelected((selectedItems: Item[]) => {
    if (selectedItems.findByID(item.id)) return selectedItems.filter((e: Item) => e.id !== item.id);
    else return [...selectedItems, item];
  });
};

export const removeItem = (index: number, setItems: Function) => {
  setItems((items: Item[]) => {
    const _items = [...items];
    _items.splice(index, 1);
    return _items;
  });
};

export const requestBCard = async (userId: string, data: object): Promise<object> => {
  const params = {
    receiver: userId,
  };

  return await fetcher(
    SERVICES.ACCOUNT,
    MethodTypes.POST,
    BUSINESS_CARD_REQUEST_URI + query(params),
    data
  );
};

/**
 * Get Account Invitations (b-cards)
 * @param status Invitation state
 * @param limit Amount of records per request
 * @param page Page number of data
 */
export const useBCards = (
  status: 'in' | 'out',
  page: number = 0,
  limit: number = PER_PAGE
): APIResponse<RequestsResponse> => {
  const params = { direction: status, limit, offset: page * limit };

  return useFetch<RequestsResponse>(
    SERVICES.ACCOUNT,
    CONTACTS_REQUEST_URI + query(params),
    undefined,
    { revalidateOnFocus: false }
  );
};

/**
 * Hook to get an Account Request Data (b-card)
 * @param userId User Id of a contact
 */
export const useBCardInfo = (userId: string = ''): APIResponse<User> => {
  const uri = CONTACTS_REQUEST_URI + (userId ? query({ userId }) : '');

  return useFetch(SERVICES.ACCOUNT, uri, undefined, {
    revalidateOnFocus: false,
  });
};

/**
 * Make Multiple Accounts Invitations (b-cards)
 * @param userIds Array of user ids of the receivers
 * @param message Message for the receivers
 * @param requesting Privacy Settings asked to the receivers
 * @param providing Privacy Settings to share with the receivers
 */
export const sendBCardRequests = (
  userIds: string[] = [],
  message: string = '',
  providing: PrivacySetting = {}
) => {
  const params = { direction: 'out' };

  const payload = {
    providing: { ...DEFAULT_PRIVACY_SETTING, ...providing },
    receivers: userIds,
    requestMessage: message,
  };

  return fetcher(SERVICES.ACCOUNT, MethodTypes.POST, CONTACTS_REQUEST_URI + query(params), payload);
};

/**
 * Accept Multiple Accounts Invitations (b-cards)
 * @param userIds Array of user ids of the senders
 * @param accepted Privacy Settings accepted
 * @param message Message for the senders
 */
export const acceptBCardRequests = (
  userIds: string[] = [],
  accepted: PrivacySetting = {},
  message: string = ''
) => {
  const params = { direction: 'in' };

  const payload = {
    accepted: { ...DEFAULT_PRIVACY_SETTING, ...accepted },
    requestMessage: message,
    senders: userIds,
  };

  return fetcher(SERVICES.ACCOUNT, MethodTypes.POST, CONTACTS_REQUEST_URI + query(params), payload);
};

/**
 * Refuse Multiple Accounts Invitations (b-cards)
 * @param userIds Array of user ids of the senders
 * @param message Message for the senders
 */
export const refuseBCardRequests = (userIds: string[] = [], message: string = '') => {
  const params = { direction: 'in' };

  const payload = {
    requestMessage: message,
    senders: userIds,
  };

  return fetcher(SERVICES.ACCOUNT, MethodTypes.POST, CONTACTS_REQUEST_URI + query(params), payload);
};

/**
 * Revoke Multiple Accounts Invitations (b-cards) made by the user
 * @param userIds Array of user ids of the senders
 * @param message Message for the senders
 */
export const revokeBCardRequests = (userIds: string[] = [], message: string = '') => {
  const params = { direction: 'out' };

  const payload = {
    receivers: userIds,
    requestMessage: message,
  };

  return fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, CONTACTS_REQUEST_URI + query(params), payload);
};

/**
 * Update the information to share with the user's Contact
 * @param userId Contact UserId
 * @param settings New Privacy Settings
 */
export const updateContactPrivacySetting = (
  userId: string,
  settings: PrivacySetting = {}
): Promise<RequestsResponse> => {
  return fetcher(
    SERVICES.ACCOUNT,
    MethodTypes.PUT,
    CONTACTS_REQUEST_URI + query({ userId }),
    settings
  );
};
