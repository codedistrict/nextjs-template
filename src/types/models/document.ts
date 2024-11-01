import { User } from './user';

export type Document = {
  _id: string;
  user: User;
  flagged: boolean;
  type: string;
  created_at: string;
  [key: string | number]: unknown;
};
