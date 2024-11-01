import { User } from '@/types/models/user';

export type PortfolioBoard = {
  _id: string;
  title: string;
  picture: string;
  user: User;
};

export type PortfolioBoardProduct = {
  _id: string;
  title: string;
  picture: string;
  company?: string;
  color?: string;
};
