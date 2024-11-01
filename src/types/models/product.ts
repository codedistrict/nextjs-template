import { Business } from '@/types/models/business';

export type Product = {
  _id: string;
  id: string;
  picture: string;
  name: string;
  description: string;
  company: Partial<Business>;
  companyId: string;
  rating: number;
  total_rating: number;
  prices: {
    min: number;
    max: number;
  };
  variations?: Variation[];
  flagged?: boolean;
  featured?: boolean;
  isPrivate: boolean;
  gallery: string[];
  discounts?: Discount[];
  leadTime?: LeadTime[];
  nearestPort?: string;
  deliveryAddress?: string;
  originAddress?: string;
  deliveryOptions?: ProductDeliveryOption[];
  isOwner: boolean; // tempory for UI. will be removed with api integration
  productType: ProductType;
  specifications: string;
};

export type ProductDeliveryOption = {
  carrier: string;
  cost: number;
  deliveryLocation: string;
  edt: number;
  incoterms: string;
  maxOrder: number;
  minOrder: number;
  service: string;
};
export type Discount = {
  quantity: number;
  percentage: number;
};

export type Variation = {
  name?: string;
  unit: string;
  price: number | null;
  currency: string;
  sku: string;
  available: boolean;
  description: string;
};
export type LeadTime = {
  quantity: number;
  days: number;
};

export enum ProductType {
  SINGLE = 'Single',
  VARIATION = 'Variation',
}
