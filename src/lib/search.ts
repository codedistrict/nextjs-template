/* eslint-disable react-hooks/rules-of-hooks */
import { SERVICES } from '@/constants/services';
import { useInfiniteFetch } from '@/hooks/useFetch';
import { APIResponseInfinite, ContactResponse } from '@/types/http';
import { User } from '@/types/models';

export type searchParamsType = {
  limit?: number;
  searchTerms: string;
  page?: number;
  filters?: object;
};

export type searchResponseType = {
  offset: number;
  limit: number;
  list: User[];
  count: number;
};

export type searchFiltersParamsType = {
  view: string;
  sort: string;
};

const SEARCH_ACCOUNT_URI = 'api/v1/account';
const SEARCH_BUSINESS_URI = 'api/v1/business';

/**
 * Search for Users Accounts in the Website
 * @param params. Search parameters
 * @return Array of Accounts
 */
export function useSearchForAccounts({
  searchTerms = '',
  filters = {},
}: searchParamsType): APIResponseInfinite<ContactResponse> {
  const body = { lastName: searchTerms || ' ', ...filters };

  return useInfiniteFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    SEARCH_ACCOUNT_URI,
    { body },
    { revalidateOnFocus: false } // no fetch on focus
  );
}

/**
 * Search for Businesses
 * @param params. Search parameters
 * @return Array of Businesses
 */
export function useSearchForBusinesses({
  searchTerms = '',
  filters = {},
}: searchParamsType): APIResponseInfinite<ContactResponse> {
  const body = {
    company: searchTerms ?? ' ',
    country: 'United States',
    ...filters,
  };

  return useInfiniteFetch<ContactResponse>(
    SERVICES.ACCOUNT,
    SEARCH_BUSINESS_URI,
    { body },
    { revalidateOnFocus: false } // no fetch on focus
  );
}
