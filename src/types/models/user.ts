// @TODO since BE API is flat key value pairs we cannot make nested objects.
// change it and take union of types incrementally page by page
// Update required keys page as go ahead page by page
import {
  BizProfile,
  Business,
  BusinessAddress,
  BusinessAdmin,
  BusinessSocialMediaLinks,
} from '@/types/models/business';

export type User = Contact &
  SocialMediaLinks &
  ProfilePreview &
  BusinessSocialMediaLinks &
  Subscription &
  Business &
  BusinessAddress &
  BuyerIntent &
  BizProfile;

export type Contact = {
  guid?: string;
  _id?: string;
  id?: string;
  contactId?: string;
  country?: string;
  province?: string;
  receiver?: string;
  is_admin?: boolean;
  is_super_admin?: boolean;
  is_supervisor?: boolean;
  created_at?: string;
  status?: string;
  flagged?: boolean;
  is_contact?: boolean;
  is_following?: boolean;
  followed?: boolean;
  is_endorsed?: boolean;
  contact?: RequestBCard;
  title: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  suffix?: string;
  email: string;
  phonenumber: string;
  fax?: string;
  picture?: string;
  backgroundImage?: string;
  noBackgroundImage?: boolean;

  business?: BusinessInfo;
  businesses?: BusinessInfo[];
  counters?: Counters;
  jobTitle?: string;
  requestMessage?: string;
  providing?: PrivacySetting;
  requesting?: PrivacySetting;
  customerId?: string;
  jobFunction?: string;
  about?: string;
  description?: string;
  business_social?: SocialMediaLinks;
  privacy_settings?: PrivacySettings;
  interests?: string; //Interest[];
  business_admin?: BusinessAdmin;
  isBusinessContact?: number;
  trade_info?: TradeInfo;
  opsNotificationConsent?: number;
  followers?: number;
  endorsements?: number;
  badges?: string[];
  website?: string;
  disk_usage?: string;
  subscription?: Subscription;
  paymentMethods?: PaymentMethod[];
  [key: string | number]: unknown;
};

export type Subscription = {
  membershipType: string;
  start_date?: string;
  end_date?: string;
  status?: string;
  auto_renew?: boolean;
  max_products?: number;
};

export type PaymentMethod = {
  _id: string;
  type: string;
  identifier: string;
  is_default: boolean;
};

export type DeliveryOption = {
  id?: string;
  max_units: string | number;
  min_units: string | number;
  carrier: string;
  service: string;
  inct: string;
  destination: Market | null;
  edt: string | number;
  estimate: string;
  selected?: boolean;
};

export type SocialMediaLinks = {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  snapchat?: string;
};

export type PrivacySetting = {
  address?: boolean;
  call?: boolean;
  chat?: boolean;
  email?: boolean;
  fax?: boolean;
  phone?: boolean;
  picture?: boolean;
};

export type PrivacySettings = {
  userId: string;
  incognito?: boolean;
  counters?: boolean;
  subscribe?: boolean;
  sharing: {
    public: PrivacySetting;
    business: PrivacySetting;
    contact: PrivacySetting;
  };
};

export type ProfilePreview = {
  viewContent?: number;
  viewDetail?: number;
  viewActivity?: number;
  viewChannel?: number;
};
export type Interest = {
  description: string;
  naics2022: string;
  globalid: string;
};

export type ServiceTypes = {
  description: string;
  naics2022: string;
  globalid: string;
};

export type ProductTypes = {
  description: string;
  naics2022: string;
  globalid: string;
};

export type Incoterm = {
  id: string;
  name: string;
  type: 'any' | 'waterway';
  title: string;
};

export type IdName = { id: string; name: string };
export type IdNameValue = { id: string; name: string; value: any };

export type ServiceType = IdName;
export type ProductCategory = IdName;
export type InterestLevel = IdName;
export type Market = IdNameValue;

export type ServiceInterest = {
  level: InterestLevel['id'];
  service: ServiceType['id'];
};
export type ProductInterest = {
  level: InterestLevel['id'];
  product: ProductCategory['id'];
};

export type BuyerIntent = {
  interestedInServices?: number;
  interestedInProducts?: number;
  serviceInterests?: string;
  productInterests?: string;
};

export type TradeInfo = {
  payment_terms: string;
  open_account: boolean;
  cash_in_advance: boolean;
  letters_of_credit: boolean;
  documentary_collection: boolean;
  consignment: boolean;
  accepted_currencies: string[];
  origin_addresses: string[];
  nearest_ports: string[];
  billing_addresses: string[];
  delivery_addresses: string[];
  incoterms: Incoterm[];
  delivery_options: DeliveryOption[];
  markets: Market[];
};

export type RequestBCard = {
  accepted: PrivacySetting;
  isContacted: boolean;
  providing: PrivacySetting;
  requestDirection: 'in' | 'out';
  requestMessage: string;
  requesting: PrivacySetting;
  sharing: PrivacySetting;
  requestStatus: 'CONFIRMED' | 'CREATED' | 'REVOKED';
};

export type BusinessInfo = {
  addresses?: BusinessAddress[];
  address1?: string;
  address2?: string;
  address3?: string;
  addressZip?: string;
  businessId?: string;
  city?: string;
  company?: string;
  country?: string;
  employees?: number;
  province?: string;
  region?: string;
  revenue?: number;
  since?: number;
  unit?: string;
};

export type Counters = {
  contacts: number;
  followers: number;
  endorsements: number;
};

export type LoginPayload = {
  username: string;
  password: string;
};
export type LoginResponse = {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
