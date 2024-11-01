import { User } from '@/types/models/';

export type Region = {
  id: string;
  name: string;
  countries?: Country[];
  selectedCountry?: string;
};

export type Industry = {
  id: string;
  name: string;
};

export type Country = {
  id: string;
  name: string;
};

export type AddAdminProps = {
  data: Array<User>;
};
