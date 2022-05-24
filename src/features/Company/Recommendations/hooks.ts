import {Images} from 'assets/images';

const useCompanyRecommendations = () => {
  const header = [
    {text: 'company_overview.pub_date'},
    {text: 'company_overview.type'},
    {text: 'company_overview.status'},
  ];
  const recommendationsList = [
    {
      id: 1,
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
      tagType: 'buy',
      tagStatus: 'closed',
      openStatus: false,
      buyStatus: true,
      published_date: '01 Jan 2021',
      closed_date: '07 Jan 2021',
      code_date: '01/01/2021',
      code: 'cba',
      return: '99.99%',
      catalyst: {
        title: 'company_overview.catalyst',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed.',
      },
      buyPrice: '100.00',
      targetPrice: '130.00',
      stopLoss: '120.00',
    },
    {
      id: 2,
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
      tagType: 'sell',
      tagStatus: 'closed',
      openStatus: false,
      buyStatus: false,
      published_date: '01 Jan 2021',
      closed_date: '07 Jan 2021',
      code_date: '01/01/2021',
      code: 'cba',
      return: '99.99%',
      catalyst: {
        title: 'company_overview.catalyst',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed.',
      },
      buyPrice: '100.00',
      targetPrice: '130.00',
      stopLoss: '120.00',
    },
    {
      id: 3,
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
      tagType: 'buy',
      tagStatus: 'open',
      openStatus: true,
      buyStatus: true,
      published_date: '01 Jan 2021',
      closed_date: '07 Jan 2021',
      code_date: '01/01/2021',
      code: 'cba',
      return: '99.99%',
      catalyst: {
        title: 'company_overview.catalyst',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed.',
      },
      buyPrice: '100.00',
      targetPrice: '130.00',
      stopLoss: '120.00',
    },
    {
      id: 4,
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
      tagType: 'sell',
      tagStatus: 'open',
      openStatus: true,
      buyStatus: false,
      published_date: '01 Jan 2021',
      closed_date: '07 Jan 2021',
      code_date: '01/01/2021',
      code: 'cba',
      return: '99.99%',
      catalyst: {
        title: 'company_overview.catalyst',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed.',
      },
      buyPrice: '100.00',
      targetPrice: '130.00',
      stopLoss: '120.00',
    },
  ];

  return {
    header,
    recommendationsList,
  };
};

export default useCompanyRecommendations;
