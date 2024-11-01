import useSWR, { SWRConfiguration } from 'swr';
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite';

import { PER_PAGE } from '@/constants';
import { fetcher } from '@/lib/https';
import { APIResponse, APIResponseInfinite, QueryBody } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';

export const useFetch = <T>(
  service: string,
  url: string,
  payload?: QueryBody,
  options?: SWRConfiguration,
  useToken: boolean = true
): APIResponse<T> => {
  const { data, error, isValidating, mutate } = useSWR<T>(
    url ?? null,
    () => fetcher(service, payload?.method ?? MethodTypes.GET, url, payload?.body, {}, useToken),
    options
  );
  return {
    data,
    error,
    isLoading: !error && !data && url !== '',
    isValidating,
    mutate,
  };
};

export const useInfiniteFetch = <T>(
  SERVICE: string,
  url: string,
  payload?: QueryBody,
  options?: SWRInfiniteConfiguration
): APIResponseInfinite<T> => {
  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite(
    page => urlFormatter(url, page, payload),
    url => fetcher(SERVICE, payload?.method ?? MethodTypes.GET, url),
    options
  );

  const isRefreshing: boolean = isValidating && !!data && data.length === size;

  return {
    data,
    error,
    isLoading: !error && !data && url !== '',
    isRefreshing,
    isValidating,
    mutate,
    setSize,
    size,
  };
};

const urlFormatter = (url: string, page: number, payload?: QueryBody) => {
  // build url for selected page
  const params = {
    limit: PER_PAGE.toString(),
    offset: (PER_PAGE * page).toString(),
    ...payload?.body,
  };
  return url + '?' + new URLSearchParams(params).toString();
};
