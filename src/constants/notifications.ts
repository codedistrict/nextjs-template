import { SETTINGS_ICON_URL } from '@/constants/paths';

export const NOTIFICATIONS_TYPES = {
  BUSINESS_CARD_ACCEPTED: 'BUSINESS_CARD_ACCEPTED',
  BUSINESS_CARD_REQUEST: 'BUSINESS_CARD_REQUEST',
  BUSINESS_INFO_REQUIRED: 'BUSINESS_INFO_REQUIRED',
};

export const NOTIFICATIONS = {
  BUSINESS_CARD_ACCEPTED: {
    link: '/my-network#contacts',
    subtitleKey: 'accepted_bcard_subtitle',
    titleKey: 'accepted_bcard_title',
  },
  BUSINESS_CARD_REQUEST: {
    link: '/my-network#bcards',
    subtitleKey: 'business_request_subtitle',
    titleKey: 'business_request_title',
  },
  BUSINESS_INFO_REQUIRED: {
    backgroundColor: 'red',
    link: '/my-account/business-profile#business',
    picture: SETTINGS_ICON_URL,
    read: false,
    subtitleKey: 'business_info_subtitle',
    titleKey: 'business_info_title',
  },
};
