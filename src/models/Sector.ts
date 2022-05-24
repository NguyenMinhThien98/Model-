import {Stock} from './Stock';

export interface Sector {
  id: number;
  logo?: string;
  name: string;
  companies: Array<Stock>;
}
