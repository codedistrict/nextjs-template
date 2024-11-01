// import { Tabs } from "@/components/MyNetwork/BusinessSidebar/BusinessSidebar.type";
import {
  ACCOUNTS_URI,
  BUSINESS_LEADS_URI,
  BUSINESSES_URI,
  CONTACTS_URI,
} from '@/constants/services';
// import { Menu } from "@/store";

export const MY_NETWORK_MENUS = [
  { href: '/my-network', selected: false, title: 'menus.people' },
  { href: '/my-network/businesses', selected: true, title: 'menus.businesses' },
  { href: '/my-network/search', selected: false, title: 'menus.search' },
];

export const PER_PAGE: number = 10;

export type MyNetworkFiltersType = {
  [key: string]: {
    folderUri?: string;
    name: string;
    sorts?: string[];
    tab: 'people' | 'business' | 'search';
    views?: string[];
  };
};

export enum BUSINESS_STATUS {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  PROSPECT = 'prospect',
  COLD = 'cold',
}

export const getAllowedBusinessStatus = (tab: string) => {
  return {
    [BUSINESS_STATUS.ACTIVE]: [BUSINESS_STATUS.ACTIVE, BUSINESS_STATUS.PROSPECT],
    [BUSINESS_STATUS.COLD]: [
      BUSINESS_STATUS.ACTIVE,
      BUSINESS_STATUS.PROSPECT,
      BUSINESS_STATUS.COLD,
    ],
    [BUSINESS_STATUS.INACTIVE]: [
      BUSINESS_STATUS.ACTIVE,
      BUSINESS_STATUS.PROSPECT,
      BUSINESS_STATUS.INACTIVE,
    ],
    // [BUSINESS_STATUS.PROSPECT]:
    //   tab === Tabs.Accounts
    //     ? [BUSINESS_STATUS.ACTIVE, BUSINESS_STATUS.PROSPECT, BUSINESS_STATUS.COLD]
    //     : [BUSINESS_STATUS.ACTIVE, BUSINESS_STATUS.PROSPECT],
  };
};

export const MY_NETWORK_FILTERS: MyNetworkFiltersType = {
  accounts: {
    folderUri: BUSINESS_LEADS_URI,
    name: 'accounts',
    sorts: ['name', 'date', 'customer_rating', 'revenue', 'followers', 'endorsements'],
    tab: 'business',
    views: [
      'view_all',
      'accounts',
      'prospects',
      'cold_leads',
      'premium_users',
      'influencers',
      'big_earners',
    ],
  },
  bcards: {
    name: 'bcards',
    tab: 'people',
    views: ['received', 'sent'],
  },
  'business-lists': {
    folderUri: BUSINESSES_URI,
    name: 'business_list',
    sorts: ['name', 'date', 'followers', 'endorsements'],
    tab: 'business',
    views: [
      'view_all',
      'accounts',
      'prospects',
      'cold_leads',
      'premium_users',
      'influencers',
      'big_earners',
    ],
  },
  contacts: {
    folderUri: CONTACTS_URI,
    name: 'contacts',
    sorts: ['name', 'date', 'followers', 'endorsements'],
    tab: 'people',
    views: ['view_all', 'premium_users', 'influencers'],
  },
  peoplelists: {
    folderUri: ACCOUNTS_URI,
    name: 'people_lists',
    sorts: ['name', 'date', 'customer_rating', 'revenue', 'followers', 'endorsements'],
    tab: 'people',
    views: [
      'view_all',
      'accounts',
      'prospects',
      'cold_leads',
      'premium_users',
      'influencers',
      'big_earners',
    ],
  },
  view_business: {
    name: 'view_business',
    sorts: ['name', 'date', 'customer_rating', 'revenue', 'followers', 'endorsements'],
    tab: 'search',
    views: [
      'view_all',
      'accounts',
      'prospects',
      'cold_leads',
      'premium_users',
      'influencers',
      'big_earners',
    ],
  },
  'view-people': {
    name: 'view_people',
    sorts: ['name', 'date', 'followers', 'endorsements'],
    tab: 'search',
    views: [
      'view_all',
      'accounts',
      'prospects',
      'cold_leads',
      'premium_users',
      'influencers',
      'big_earners',
    ],
  },
};
