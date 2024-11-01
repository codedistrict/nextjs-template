import React from 'react';

import { Invoice } from '@/types/models';

export type MyAccountProps = {
  invoices: Invoice[];
};

export type Page = {
  content: React.ReactNode;
  title: string;
  hash: string;
  buttonText: string;
};
