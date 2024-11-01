export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const viewportSizes = {
  '2xl': 1536,
  '3xl': 1920,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
};

export type NavLink = {
  label: string;
  path: string;
  red?: boolean;
};

export const SITE_NAVIGATION_LINKS: NavLink[] = [
  { label: 'common:dashboard', path: '/dashboard' },
  { label: 'common:my_network', path: '/my-network' },
  { label: 'common:communication', path: '/communication' },
  { label: 'common:digital_shelf', path: '/digital-shelf' },
  { label: 'common:shared', path: '/shared' },
  { label: 'common:portfolio', path: '/portfolio' },
  { label: 'common:biz_opps', path: '/biz-opps' },
  { label: 'common:marketplace', path: '/marketplace' },
  { label: 'common:activities', path: '/activities' },
  { label: 'common:events', path: '/events' },
];

export const CURRENCIES = [
  { label: '£', value: 'GBP' },
  { label: '$', value: 'USD' },
];

export const SCREEN_ORIENTATION_TO_ANGLE: { [key: string]: number } = {
  '3': 180,
  '6': 90,
  '8': -90,
};
