import { User } from './user';

export type Issue = {
  _id: string;
  user: User;
  flagged: boolean;
  reported_by: User;
  memo: string;
  created_at: string;
  status: string;
  [key: string | number]: unknown;
};
