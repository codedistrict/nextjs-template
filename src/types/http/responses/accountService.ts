// import { BusinessItem, Folder } from "@/components/MyNetwork/types";
import { User } from '@/types/models';

export type ContactRequest = {
  isRequestConfirmed: string;
};

export type RequestsResponse = {
  count: number;
  limit: number;
  offset: number;
  list: (User & ContactRequest)[];
};

export type GroupResponse = [];

export type ContactResponse = {
  count: number;
  offset: number;
  limit: number;
  list: any;
};
