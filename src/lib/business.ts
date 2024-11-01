// import { Company } from "@/components/Registration/YourBusiness/Common/Company.type";
import { SERVICES } from '@/constants/services';
import { useFetch } from '@/hooks/useFetch';
import { fetcher } from '@/lib/https';
import { APIResponse } from '@/types/http';
import { MethodTypes } from '@/types/http/methodTypes';
import { Business, BusinessAddress, BusinessAdmin } from '@/types/models';
const BUSINESS_URI = 'api/v1/business';

type BusinessResponse<T = Business> = {
  userId: string;
  page: {
    count: number;
    limit: number;
    list: T[];
  };
  superAdmin: boolean;
};
/**
 * Read business of given user
 * @param email. Email of user
 */

export function useBusinessByUser<T>(userId: string): APIResponse<BusinessResponse<T>> {
  let uri = '';
  if (userId) {
    uri = `${BUSINESS_URI}?userId=${userId}`;
  }
  return useFetch<BusinessResponse<T>>(SERVICES.BUSINESS, uri, undefined, {
    revalidateOnFocus: false,
  });
}
/**
 * Read business of given user
 * @param email. Email of user
 */

export function useBusinessById<T = Business>(businessId: string | undefined): APIResponse<T> {
  let uri = '';
  if (businessId) {
    uri = `${BUSINESS_URI}?businessId=${businessId}`;
  }
  return useFetch<T>(SERVICES.BUSINESS, uri, undefined, {
    revalidateOnFocus: false,
  });
}

export async function updateBusinessData(
  businessId: string | undefined,
  payload: Partial<Business | BusinessAddress>
) {
  const data = { ...payload, businessId: businessId };
  return fetcher(SERVICES.BUSINESS, MethodTypes.PUT, BUSINESS_URI, data);
}

/**
 * Deletes a industry of a business
 * @param businessId
 * @param industryId
 */
export async function deleteBusinessIndustry(businessId: string, industryId: string) {
  const uri = `${BUSINESS_URI}?businessId=${businessId}&industryId=${industryId}`;

  return fetcher(SERVICES.BUSINESS, MethodTypes.DELETE, uri);
}

/**
 * Return SWR cache key after post request to invalidate the cache
 * @param businessId
 */
export const getBusinessByIdCacheKey = (businessId: string) => {
  return `${BUSINESS_URI}?businessId=${businessId}`;
};

export async function createBusiness(payload: Partial<Business | BusinessAddress>) {
  return fetcher(SERVICES.BUSINESS, MethodTypes.POST, BUSINESS_URI, payload);
}

export async function searchBusiness(name: string, region: string) {
  let uri = '';
  if (name) {
    uri = `${BUSINESS_URI}?company=${name}&region=${region}`;
  }
  return fetcher(SERVICES.BUSINESS, MethodTypes.GET, uri);
}

export async function createBusinessContact(businessId: string, payload: BusinessAdmin[]) {
  return fetcher(SERVICES.BUSINESS, MethodTypes.PUT, BUSINESS_URI, {
    businessId,
    contacts: payload,
  });
}

export async function deleteBusinessContact(businessId: string, businessContact: string) {
  const uri = `${BUSINESS_URI}?businessId=${businessId}&contactName=${businessContact}`;

  return fetcher(SERVICES.BUSINESS, MethodTypes.DELETE, uri);
}
