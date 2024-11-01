import { MethodTypes } from './methodTypes';

export type QueryBody = {
  method?: MethodTypes;
  body?: Record<string, string | number>;
};
