import { CustomError } from '@/types/http/error';

export type APIResponse<T> = {
  error: CustomError;
  data?: T;
  isLoading: boolean;
  isValidating: boolean;
  mutate?: Function;
};

export type APIResponseInfinite<T> = {
  error: CustomError;
  data?: T[];
  isLoading: boolean;
  isRefreshing: boolean;
  isValidating: boolean;
  mutate?: Function;
  size: number;
  setSize: Function;
};

export type APIBulkResponse = {
  success: string[];
  failed: string[];
};

export type FileSignedUpResponse = {
  fields: {
    acl: string;
    bucket: string;
    Key: string;
    Policy: string;
    success_action_status: string;
    'X-Amz-Algorithm': string;
    'X-Amz-Credential': string;
    'X-Amz-Date': string;
    'X-Amz-Security-Token': string;
    'X-Amz-Signature': string;
  };
  url: string;
};
