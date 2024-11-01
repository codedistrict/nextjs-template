export const PORTFOLIO_MENUS = [
  { href: '/portfolio', selected: true, title: 'menus.products' },
  { href: '/portfolio/services', selected: false, title: 'menus.services' },
  { href: '/portfolio/boards', selected: false, title: 'menus.boards' },
  {
    href: '/portfolio/media-library',
    selected: false,
    title: 'menus.media_library',
  },
];

export const PORTFOLIO_FILTERS: any = {
  product: {
    sorts: ['name', 'date', 'rating', 'price_htl', 'price_lth'],
    views: ['view_all', 'selected', 'active', 'inactive'],
  },
};

export const SELLER_TYPES = {
  DISTRIBUTOR: 'Distributor',
  MANUFACTURER: 'Manufacturer',
  RETAILER: 'Retailer',
  WHOLESALER: 'Wholesaler',
};
