import { Channel } from '@/types/models/channel';
import { User } from '@/types/models/user';

export type Post = {
  _id: string;
  title: string;
  description?: string;
  user: User;
  channel?: Channel | null;
  created_at: string;
  picture?: string;
  meta: {
    likes: number;
    shares: number;
    comments: number;
  };
};
