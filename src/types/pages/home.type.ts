import { SystemNotice, Task, User } from '@/types/models';

export type HomeProps = {
  boards: Board[];
  stats: Stats;
  notices: SystemNotice[];
  tasks: Task[];
  user: User;
};

export type Board = {
  id: string;
  image: string;
  link: string;
  title: string;
};

export type Stats = {
  contacts: string;
  followers: string;
  endorsements: string;

  messages: string;
  b_cards: string;
  posts: string;

  invites: string;
  proposals: string;
  replies: string;

  inquiries: string;
  special_offers: string;
  orders: string;
};
