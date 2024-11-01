import { User } from './user';

export type Invoice = {
  _id: string;
  user: User;
  flagged: boolean;
  number: string;
  amount: number;
  currency: string;
  description?: string;
  created_at: string;
  due_date: string;
  status: string;
  type: string;
  [key: string | number]: unknown;
};
