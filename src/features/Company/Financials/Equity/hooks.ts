import {ProgressItem, ProgressType} from 'components/ProgressList';

const useCompanyEquity = () => {
  const fakeDataListProgress: ProgressItem[] = [
    {
      title: 'Return of Equity',
      value: '0.68%',
      type: ProgressType.HIGH,
      percent: 68,
    },
    {
      title: 'Revenue Growth (3Y)',
      value: ' 0.6',
      type: ProgressType.MEDIUM,
      percent: 50,
    },
    {
      title: 'EBIT Growth (3Y)',
      value: ' 2.0',
      type: ProgressType.HIGH,
      percent: 80,
    },
  ];

  return {
    fakeDataListProgress,
  };
};

export default useCompanyEquity;
