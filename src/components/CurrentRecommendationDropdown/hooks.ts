import {useState} from 'react';

const useCurrentRecommendationDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBuyPrice, setBuyPrice] = useState('100.00');
  const [isSellPrice, setSellPrice] = useState('130.00');
  const [isStopLoss, setStopLoss] = useState('120.00');

  const dummyData = [
    {
      title: 'Catalyst',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est vel dictum dui facilisis sed sed sit parturient. Mauris viverra sodales sociis justo, lacinia luctus donec sed. ',
      date: '04 Oct 2021',
    },
  ];

  return {
    isActive,
    isBuyPrice,
    isSellPrice,
    isStopLoss,
    setIsActive,
    setBuyPrice,
    setSellPrice,
    setStopLoss,
    dummyData,
  };
};

export default useCurrentRecommendationDropdown;
