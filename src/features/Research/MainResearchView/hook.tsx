import {useCallback, useState} from 'react';
import {ItemResultSearch} from '../../../models/ItemResultSearch';

export const _mockupData: Array<ItemResultSearch> = [
  {
    asx_code: 'WAA',
    created_at: '2022-03-04T07:43:17.000Z',
    exchange: '',
    id: 2017,
    industryLogoUrl:
      'https://assets.weforum.org/article/image/large_KwvRfX8RsCkrYqNz9j_1K3taMNrvyIZbHJ1YSqPmHzc.jpg',
    industry_id: 18,
    list_date: '2008-01-11',
    logo_url:
      'https://yt3.ggpht.com/ytc/AKedOLSsB17h2rgaGg-NgBMqVviNFpTAZZ5mojMlrRJi=s176-c-k-c0x00ffffff-no-rj',
    market_cap: '',
    name: 'WAM ACTIVE LIMITED',
    updated_at: '2022-03-04T07:43:17.000Z',
  },
  {
    asx_code: 'ASX:APT',
    created_at: '2022-03-04T07:43:17.000Z',
    exchange: '',
    id: 2017,
    industryLogoUrl:
      'https://assets.weforum.org/article/image/large_KwvRfX8RsCkrYqNz9j_1K3taMNrvyIZbHJ1YSqPmHzc.jpg',
    industry_id: 18,
    list_date: '2008-01-11',
    logo_url:
      'https://yt3.ggpht.com/ytc/AKedOLSsB17h2rgaGg-NgBMqVviNFpTAZZ5mojMlrRJi=s176-c-k-c0x00ffffff-no-rj',
    market_cap: '',
    name: 'WAM ACTIVE LIMITED',
    updated_at: '2022-03-04T07:43:17.000Z',
  },
  {
    asx_code: 'ASX: WBC',
    created_at: '2022-03-04T07:43:17.000Z',
    exchange: '',
    id: 2017,
    industryLogoUrl:
      'https://assets.weforum.org/article/image/large_KwvRfX8RsCkrYqNz9j_1K3taMNrvyIZbHJ1YSqPmHzc.jpg',
    industry_id: 18,
    list_date: '2008-01-11',
    logo_url:
      'https://yt3.ggpht.com/ytc/AKedOLSsB17h2rgaGg-NgBMqVviNFpTAZZ5mojMlrRJi=s176-c-k-c0x00ffffff-no-rj',
    market_cap: '',
    name: 'WAM ACTIVE LIMITED',
    updated_at: '2022-03-04T07:43:17.000Z',
  },
  {
    asx_code: 'TLS',
    created_at: '2022-03-04T07:43:17.000Z',
    exchange: '',
    id: 2017,
    industryLogoUrl:
      'https://assets.weforum.org/article/image/large_KwvRfX8RsCkrYqNz9j_1K3taMNrvyIZbHJ1YSqPmHzc.jpg',
    industry_id: 18,
    list_date: '2008-01-11',
    logo_url:
      'https://yt3.ggpht.com/ytc/AKedOLSsB17h2rgaGg-NgBMqVviNFpTAZZ5mojMlrRJi=s176-c-k-c0x00ffffff-no-rj',
    market_cap: '',
    name: 'WAM ACTIVE LIMITED',
    updated_at: '2022-03-04T07:43:17.000Z',
  },
];

const _mockupDataSelectors = [
  'Consumer Staples',
  'Information Technology',
  'Real Estate',
  'Consumer Discretionary',
  'Communication Services',
  'Utilities',
  'Energy',
  'Materials',
  'Industrials',
  'Financials',
  'Financials',
];

const useMainSearchFacade = () => {
  const [recommendations, setRecommendations] = useState(_mockupData);
  const [topMovers, setTopMovers] = useState(_mockupData);
  const [sectors, setSectors] = useState(_mockupDataSelectors);

  const onSetRecommendations = useCallback(data => {
    setRecommendations(data);
  }, []);

  const onSetTopMovers = useCallback(data => {
    setTopMovers(data);
  }, []);

  const onSetSectors = useCallback(data => {
    setSectors(data);
  }, []);

  return {
    recommendations,
    topMovers,
    sectors,
  };
};

export default useMainSearchFacade;
