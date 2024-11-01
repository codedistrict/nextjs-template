import { User } from '@/types/models';

export * from './myAccount.type';

// @TODO this will be removed

export type UserGetterSetter = {
  user: User | undefined;
  setUser: Function;
};
export type GetterSetter<T> = {
  data?: T | undefined;
  updateData?: Function;
};

export type CompleteGetterSetter<T> = {
  data: T | undefined;
  updateData: Function;
};
