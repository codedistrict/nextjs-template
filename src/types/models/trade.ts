export type Trade = {
  _id: string;
  label?: string;
  description?: string;
  status: string;
  picture: string;
  company?: string;
  tradeType: string;
  flagged?: boolean;
};
