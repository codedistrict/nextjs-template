import { Picture } from '../common/picture';

export type Business = {
  businessId: string;
  businessPicture?: string;
  businessCarouselPictures?: string; // string it should be carouselPicture[], but the backend is not prepared for this
  businessPresentationOption?: PresentationOption;
  businessVideo?: string;
  businessTagLine?: string;
  company: string;
  unit: string;
  employees?: number;
  revenue?: number;
  since?: number;
  businessEntityType?: string;
  parentCompany?: string;
  parentCountry?: string;
  industries?: Industry[];
  businessOwnershipType?: string;
  headquarters?: string;
  businessCertifications?: string;
  description?: string;
  businessBrands?: string;
  userId?: string;
  contacts?: BusinessAdmin[];
  addresses?: BusinessAddress[];
  address: BusinessAddress; //For now supporting single address. so to avoid type script errors
  badges?: string[];
  picture?: string;
  ref?: string;
  roles?: {
    [key: string | number]: 'USER' | 'ADMIN';
  };
  [key: string]: any;
};
export type Industry = {
  industryId: string;
  primary?: string;
  isNew?: boolean;
};
export type BusinessAddress = {
  country?: string;
  city?: string;
  company?: string;
  addressZip?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  addressType?: string;
  phone?: string;
  email?: string;
  fax?: string;
  url?: string;
  province?: string;
  region?: string;
  subRegion?: string;
};
export type BusinessUser = {
  businessId: string;
  userId: string;
  role: string;
  industryId?: string;
};
export type BizProfile = {
  businessId?: string;
  businessViewDetail?: number;
  businessProducts?: number;
  businessServices?: number;
  businessContent?: number;
  businessTrade?: number;
  businessEvents?: number;
  businessActivity?: number;
};

export type BusinessSocialMediaLinks = {
  businessLinkedIn?: string;
  businessFacebook?: string;
  businessTwitter?: string;
  businessInstagram?: string;
  businessSnapchat?: string;
};

export enum BusinessAddressType {
  REG = 'REG',
  OFFICE = 'OFFICE',
}
export type BusinessAdmin = {
  id?: string;
  userId?: string;
  contactName: string;
  contactFirstName: string;
  contactLastName: string;
  contactIsBusinessContact: boolean;
  contactEmail: string;
};

export type UpdateBusinessPayload = {
  business: Business;
  deletedIndustries: string[];
  address: BusinessAddress;
};

export type carouselPicture = {
  picture: Picture;
  position: number;
};

export type PresentationOption = 'none' | 'carousel' | 'video';
