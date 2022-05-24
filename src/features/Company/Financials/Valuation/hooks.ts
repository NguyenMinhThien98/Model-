import {ProgressItem, ProgressType} from 'components/ProgressList';

const useCompanyValuation = () => {
  const fakeDataListProgress: ProgressItem[] = [
    {
      title: 'Enterprise Value / Sales',
      value: '0.68%',
      type: ProgressType.HIGH,
      percent: 68,
    },
    {
      title: 'Price to Earnings Ratio',
      value: ' 0.6',
      type: ProgressType.MEDIUM,
      percent: 50,
    },
    {
      title: 'Price to Book Ratio',
      value: ' 2.0',
      type: ProgressType.LOW,
      percent: 10,
    },
  ];

  return {
    fakeDataListProgress,
  };
};

export default useCompanyValuation;
