import {ProgressItem, ProgressType} from 'components/ProgressList';

const useCompanyHealth = () => {
  const fakeDataListProgress: ProgressItem[] = [
    {
      title: 'Cash / Total Debt',
      value: '0.6',
      type: ProgressType.MEDIUM,
      percent: 50,
    },
    {
      title: 'Current Liabilities / Total Debt',
      value: ' 2.0',
      type: ProgressType.HIGH,
      percent: 70,
    },
    {
      title: 'Total Equity / Total Assets',
      value: ' 0.6',
      type: ProgressType.MEDIUM,
      percent: 50,
    },
    {
      title: 'Net Debt  / Debt Equity',
      value: '0.6',
      type: ProgressType.MEDIUM,
      percent: 50,
    },
    {
      title: 'Intangible / Assets',
      value: '1.4',
      type: ProgressType.LOW,
      percent: 20,
    },
    {
      title: 'Return on Equity',
      value: '0.68%',
      type: ProgressType.HIGH,
      percent: 68,
    },
  ];

  return {
    fakeDataListProgress,
  };
};

export default useCompanyHealth;
