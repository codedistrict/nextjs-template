import { User } from '@/types/models/user';

export type Channel = {
  _id: string;
  title: string;
  description: string;
  author: User;
  created_at: string;
  access: string;
  post: string;
};
