import { SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { APIResponse } from '@/types/http';

export type Province = {
  code: string;
  name: string;
};

export type Provinces = {
  [key: string]: Province[];
};

export function useProvinces(language: string = 'en'): APIResponse<Provinces> {
  return useFetch(
    SERVICES.AREAS,
    `provinces/provinces.${language}.json`,
    undefined,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
    false
  );
}
