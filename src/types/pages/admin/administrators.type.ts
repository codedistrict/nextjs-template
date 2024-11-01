import { Range } from 'react-date-range';

import { AdminActivity, Document, Invoice, Issue, User } from '@/types/models/';

export type AdministratorsProps = {
  data: User[];
};

export type Model = User | Invoice | Issue | Document | AdminActivity;

export type Scope = {
  data: Model[]; // raw data
  tableData: Model[]; // state
  setTableData: Function; // setter
};

export type Filters = {
  search?: string;
  limitedAdminsOnly?: boolean;
  flaggedOnly?: boolean;
  selectedOnly?: boolean;
  accountStatus?: string;
  supervisorsOnly?: boolean;
  accountType?: string;
  actionType?: string;
  invoiceType?: string;
  documentType?: string;
  issueStatus?: string;
  invoiceStatus?: string;
  selectedIndustries?: string[];
  selectedRegions?: string[];
  selectedDateRanges?: Range[];
};

export type ConfirmationAction = {
  index?: number;
  user: User | null;
  title: string;
  action?: string;
  promptText?: string;
};
