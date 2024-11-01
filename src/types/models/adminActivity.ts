import { User } from './user';

export type AdminActivity = {
  _id: string;
  user: User;
  flagged: boolean;
  action: string;
  created_at: string;
  [key: string | number]: unknown;
};
