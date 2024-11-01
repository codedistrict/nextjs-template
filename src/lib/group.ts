/* eslint-disable react-hooks/rules-of-hooks */
// import { Folder } from "@/components/MyNetwork/types"; // TODO: Define types
import { BUSINESS_STATUS } from '@/constants';
import {
  ACCOUNTS_URI,
  BUSINESS_LEADS_URI,
  BUSINESSES_URI,
  CONTACTS_URI,
  SERVICES,
} from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { fetcher, query } from '@/lib/https';
// import { t } from "@/pages/_app"; // TODO: Need to integrate next-translation
import { APIBulkResponse, APIResponse, ContactResponse, GroupResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';
// import { User } from '@/types/models';

export const PER_PAGE = 10;

export type addToGroupType = {
  refs?: string[];
  ref?: string;
  groupId?: string;
};

export type payloadBusinessDataType = {
  description?: string;
  status?: string;
  notes?: {
    [key: string]: string;
  };
};

export type businessGroupFiltersType = {
  sort?: string;
  view?: string;
  search?: string;
};

export type businessGroupParamsType = {
  filters?: businessGroupFiltersType;
  limit?: number;
  page?: number;
};

export type moveGroupParamsType = {
  ref?: string;
  sourceGroupId: string;
  targetGroupId?: string;
};

// ------- GROUPS -------

const getGroups = (uri: string): APIResponse<[]> => {
  const { data, error, isLoading, isValidating, mutate } = useFetch<GroupResponse>(
    SERVICES.ACCOUNT,
    uri,
    undefined,
    {
      revalidateOnFocus: false,
    }
  );
  // TODO: Needs to define `Folder` interface and translation to run below code
  /* let folders: Folder[] = [
    { description: "", groupId: "", groupName: t ? t("loading") : "loading" },
  ]; */
  let folders: any = [{ description: '', groupId: '', groupName: 'loading' }];

  if (data) folders = data;

  return { data: folders, error, isLoading, isValidating, mutate };
};

export const getAccountGroups = () => getGroups(ACCOUNTS_URI);

export const getBusinessGroups = () => getGroups(BUSINESSES_URI);

export const getBusinessLeadsGroups = () => getGroups(BUSINESS_LEADS_URI);

export const getContactGroups = () => getGroups(CONTACTS_URI);

export const createGroup = async (
  uri: string,
  groupName: string,
  groupDescription: string = ''
): Promise<object> => {
  return await fetcher(SERVICES.ACCOUNT, MethodTypes.POST, uri + query({ groupName }), {
    description: groupDescription,
  });
};

export const createAccountGroup = (groupName: string, groupDescription: string) =>
  createGroup(ACCOUNTS_URI, groupName, groupDescription);

export const createBusinessGroup = (groupName: string, groupDescription: string) =>
  createGroup(BUSINESSES_URI, groupName, groupDescription);

export const createLeadGroup = (groupName: string, groupDescription: string) =>
  createGroup(BUSINESS_LEADS_URI, groupName, groupDescription);

export const createContactGroup = (groupName: string, groupDescription: string) =>
  createGroup(CONTACTS_URI, groupName, groupDescription);

export const renameGroup = async (
  uri: string,
  groupId: string,
  groupName: string
): Promise<object> => {
  return await fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, uri + query({ groupId, groupName }));
};

export const updateGroup = async (
  uri: string,
  groupId: string,
  groupDescription: string = '',
  groupName: string = ''
): Promise<object> => {
  const queryData: any = { groupId };

  if (groupName) {
    queryData.groupName = groupName;
  }

  return await fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, uri + query(queryData), groupDescription);
};

export const deleteGroup = async (uri: string, groupId: string): Promise<object> => {
  return await fetcher(SERVICES.ACCOUNT, MethodTypes.DELETE, uri + query({ groupId }));
};

export const deleteAccountGroup = (groupId: string): Promise<object> =>
  deleteGroup(ACCOUNTS_URI, groupId);

export const deleteBusinessGroup = (groupId: string): Promise<object> =>
  deleteGroup(BUSINESSES_URI, groupId);

// ------- GROUP CONTENT -------

const getGroupContent = (uri: string, groupId: string, page: number, limit = PER_PAGE) => {
  const url = `${uri}/entry`;

  return useFetch<ContactResponse>(
    groupId ?? SERVICES.ACCOUNT,
    groupId && url,
    {
      body: { groupId, limit, offset: (page - 1) * limit },
    },
    { revalidateOnFocus: false }
  );
};

export const getAccounts = (groupId: string, page: number, limit = PER_PAGE) => {
  return getGroupContent(ACCOUNTS_URI, groupId, page, limit);
};

export const getBusinessesInGroup = (
  groupId: string,
  { limit = PER_PAGE, page = 0, filters = {} }: businessGroupParamsType
) => {
  const url = `${BUSINESSES_URI}/entry`;

  const body = { groupId, limit, offset: page * limit, ...filters };

  return useFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    groupId && url,
    {
      body,
    },
    { revalidateOnFocus: false }
  );
};

export const getBusinessLeadsInGroup = (
  groupId: string,
  { limit = PER_PAGE, page = 0, filters = {} }: businessGroupParamsType
): APIResponse<ContactResponse> => {
  const url = `${BUSINESS_LEADS_URI}/entry`;

  const body = { groupId, limit, offset: page * limit, ...filters };

  return useFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    groupId && url,
    {
      body,
    },
    { revalidateOnFocus: false }
  );
};

export const getContactsInGroup = (
  groupId: string,
  { limit = PER_PAGE, page = 0, filters = {} }: businessGroupParamsType
): APIResponse<ContactResponse> => {
  const url = `${CONTACTS_URI}/entry`;

  const body = { groupId, limit, offset: page * limit, ...filters };

  return useFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    groupId && url,
    {
      body,
    },
    { revalidateOnFocus: false }
  );
};

export const getPeopleInGroup = (
  groupId: string,
  { limit = PER_PAGE, page = 0, filters = {} }: businessGroupParamsType
): APIResponse<ContactResponse> => {
  const url = `${ACCOUNTS_URI}/entry`;

  const body = { groupId, limit, offset: page * limit, ...filters };

  return useFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    groupId && url,
    {
      body,
    },
    { revalidateOnFocus: false }
  );
};

export const addItemsToGroup = async (
  itemsIds: string[] = [],
  uri: string,
  groupId?: string
): Promise<APIBulkResponse> => {
  let params: Partial<addToGroupType> = { groupId };

  const route = uri + '/entry' + (groupId ? query(params) : '');

  return await fetcher(SERVICES.ACCOUNT, MethodTypes.POST, route, itemsIds);
};

export const addAccountToGroups = (ids: string[], folderId: string) =>
  addItemsToGroup(ids, ACCOUNTS_URI, folderId);

export const addBusinessToGroups = (ids: string[], folderId: string) =>
  addItemsToGroup(ids, BUSINESSES_URI, folderId);

export const addItemToGroups = async (uri: string, itemId: string) => {
  const route = uri + '/entry' + query({ ref: itemId });

  return await fetcher(SERVICES.ACCOUNT, MethodTypes.POST, route);
};

export const addBusinessLead = async (businessId: string, status: string) => {
  const route = BUSINESS_LEADS_URI + '/entry' + query({ ref: businessId, status });

  return await fetcher(SERVICES.ACCOUNT, MethodTypes.POST, route);
};

export const moveBetweenGroups = async (
  uri: string,
  sourceGroupId: string,
  targetGroupId?: string,
  refs?: string[]
): Promise<APIBulkResponse> => {
  const params: moveGroupParamsType = { sourceGroupId };

  if (targetGroupId) params.targetGroupId = targetGroupId;

  return await fetcher(SERVICES.ACCOUNT, MethodTypes.PUT, uri + '/entry' + query(params), refs);
};

export const removeFromGroup = async (
  uri: string,
  userRefs: string[],
  groupId: string
): Promise<APIBulkResponse> => {
  return await fetcher(
    SERVICES.ACCOUNT,
    MethodTypes.PUT,
    uri + '/entry' + query({ groupId }),
    userRefs
  );
};

export const updateBusinessData = async (
  uri: string,
  businessRef: string,
  groupId: string,
  payload: payloadBusinessDataType
): Promise<APIBulkResponse> => {
  return await fetcher(
    SERVICES.ACCOUNT,
    MethodTypes.PUT,
    uri + '/entry' + query({ groupId, ref: businessRef }),
    payload
  );
};

export const updateLeadStatus = async (
  businessRef: string,
  groupId: string,
  status: BUSINESS_STATUS
): Promise<APIBulkResponse> => {
  return await fetcher(
    SERVICES.ACCOUNT,
    MethodTypes.PUT,
    BUSINESS_LEADS_URI + '/entry' + query({ groupId, ref: businessRef, status })
  );
};
