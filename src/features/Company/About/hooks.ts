import {Images} from 'assets/images';
import {useState} from 'react';

const useAboutCompany = () => {
  const [isNoShareHolders, setNoShareHolders] = useState('3000');
  const [isOutStandingShares, seOutStandingShares] = useState('1.71 B');
  const [isWebsiteLink, setWebsitelink] = useState(
    'https://www.nineentertainmentco.com.au/',
  );

  const dumpGeneral = [
    {
      title: 'company_overview.general.founded',
      description: '1981',
    },
    {
      title: 'company_overview.general.ticker_code',
      description: 'NEC',
    },
    {
      title: 'company_overview.general.headquaters',
      description:
        'Nine Entertainment Holding 1 Denison Street North Sydney,New South Wales, Australia',
    },
  ];

  const dumpAboutCompany = [
    {
      about:
        'Sunlands Technology Group, formerly Sunlands Online Education Group, is a China-based company that providing online education services. Through its subsidiary, Beijing Sunlands Online Education.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue condimentum mauris, aliquam dolor eget dui pharetra, urna, proin. Risus viverra at tristique sit.',
      image: Images.about_company,
    },
  ];

  const dumpCategory = [
    {
      title: 'company_overview.category.sector',
      description: 'Communication Services',
    },
    {
      title: 'company_overview.category.industry',
      description: 'Media & Entertainment',
    },
    {
      title: 'company_overview.category.headquaters',
      description: 'Media',
    },
  ];

  return {
    isNoShareHolders,
    isOutStandingShares,
    isWebsiteLink,
    dumpGeneral,
    dumpAboutCompany,
    dumpCategory,
  };
};

export default useAboutCompany;
