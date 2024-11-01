export type Admin = {
  _id: string;
  followers: number;
  industry: string;
  first_name: string;
  last_name: string;
  region: string;
  status: string;
  phone?: string;
  address?: string;
  badges?: string[];
  company?: string;
  email?: string;
  website?: string;
  picture?: string;
  prefix?: string;
  [key: string | number]: unknown;
};
