// SERVICE NAME: SERVICE KEY (in SD json file)
export const SERVICES = {
  ACCOUNT: '/api/account-service-url',
  AREAS: 'areas',
  BUSINESS: '/api/business-service-url',
  CHAT: '/api/chat-service-url',
  FILES: '/api/files',
  NOTIFICATION: '/api/notification-service-url/manually-deployed',
  SOCKET: 'socket',
};

export const SERVICES_FALLBACK: { [key: string]: string } = {
  '/api/account-service-url': 'https://lv86m63el7.execute-api.us-west-2.amazonaws.com/Prod/',
  '/api/business-service-url': 'https://lv86m63el7.execute-api.us-west-2.amazonaws.com/Prod/',
  '/api/chat-service-url': 'https://lv86m63el7.execute-api.us-west-2.amazonaws.com/Prod/',
  '/api/files': 'https://x5w7ssyu5l.execute-api.us-west-2.amazonaws.com/Stage/',
  '/api/notification-service-url/manually-deployed':
    'wss://exccym1176.execute-api.us-west-2.amazonaws.com/dev',
  areas: 'https://2global-development-areas.s3.us-west-2.amazonaws.com/',
  socket: 'wss://exccym1176.execute-api.us-west-2.amazonaws.com/dev',
};

export const ACCOUNTS_URI = 'api/v1/group/accounts';
export const BUSINESS_LEADS_URI = 'api/v1/group/lead';
export const BUSINESSES_URI = 'api/v1/group/businesses';
export const CONTACTS_REQUEST_URI = 'api/v1/contact/request';
export const CONTACTS_URI = 'api/v1/group/contacts';
export const BUSINESS_CARD_REQUEST_URI = 'api/v1/contact';
