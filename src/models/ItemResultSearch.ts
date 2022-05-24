export interface ItemSearchInterface {
  name: string;
  description: string;
  isReturn: boolean;
  isBuy: boolean;
  value: number;
}

export interface ItemResultSearch {
  asx_code: string;
  created_at: string;
  id: number;
  industryLogoUrl: string;
  industry_id: number;
  list_date: string;
  logo_url: string;
  market_cap: string;
  name: string;
  updated_at: string;
  exchange: string;
}

export interface ItemRecent {
  count: number;
  created_at: string;
  id: number;
  key_search: string;
  updated_at: string;
  user_id: number;
}
