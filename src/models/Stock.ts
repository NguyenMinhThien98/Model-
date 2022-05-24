export interface Stock {
  id: number;
  logo_url: string;
  name?: string;
  industry_id: string;
  asx_code?: string;
  created_at?: Date;
  updated_at?: Date;
  list_date?: Date;
}
