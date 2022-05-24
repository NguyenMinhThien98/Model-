import {ImageSourcePropType} from 'react-native';

export interface RecommendData {
  buyPrice: string;
  stopLoss: string;
  targetPrice: string;
  id: number;
  companyShortName: string;
  companyFullName: string;
  image: ImageSourcePropType;
  tagType: string;
  tagStatus: string;
  openStatus: boolean;
  buyStatus: boolean;
  published_date: string;
  closed_date: string;
  code_date: string;
  code: string;
  return: string;
  catalyst: {
    title: string;
    description: string;
  };
}
