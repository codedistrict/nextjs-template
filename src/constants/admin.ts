import { SubscriptionPlans } from './subscriptionPlans';

export const ACCOUNT_TYPES: string[] = SubscriptionPlans.map(plan => plan.type);
export const ACCOUNT_STATUSES: string[] = [
  'active',
  'suspended',
  'past_due',
  'under_review',
  'disputed',
];
export const INVOICE_STATUSES: string[] = [
  'draft',
  'sent',
  'paid',
  'overdue',
  'declined',
  'scheduled',
];
export const INVOICE_TYPES: string[] = [
  'data',
  'products',
  'subscription',
  'ads',
  'refund',
  'commission',
];
export const ISSUE_STATUSES: string[] = ['open', 'rejected', 'resolved'];
export const ADMIN_ACTIONS: string[] = [
  'Suspend Account',
  'Clear Account',
  'Reset Account',
  'Send Notice',
  'Cancel Account',
];
export const DOCUMENT_TYPES: string[] = [
  'Business Opportunity',
  'Business Proposal',
  'Invoice',
  'Order Confirmation',
  'Proposal Reply',
  'Purchase Order',
  'Quotation Request',
  'Quote',
  'Shipment Confirmation',
  'Special Offer',
];
