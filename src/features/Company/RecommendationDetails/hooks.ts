import {useState} from 'react';
import {Images} from 'assets/images';

const useRecommendationDetails = () => {
  const [isBuyPrice, setBuyPrice] = useState('100.00');
  const [isTargetPrice, setTargetPrice] = useState('130.00');
  const [isStopLoss, setStopLoss] = useState('120.00');

  const dumpDetails = [
    {
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
      tagType: 'buy',
      tagStatus: 'open',
      openStatus: true,
      published_date: '01 Jan 2021',
      closed_date: '07 Jan 2021',
    },
  ];

  const dumpText = [
    {
      title: 'company_overview.catalyst',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed.',
    },
  ];

  return {
    isBuyPrice,
    isTargetPrice,
    isStopLoss,
    dumpDetails,
    dumpText,
  };
};

export default useRecommendationDetails;
