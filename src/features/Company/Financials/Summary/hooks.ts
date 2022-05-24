import {useState} from 'react';
import {Images} from 'assets/images';

const useCompanySummary = () => {
  const [isAverageVol, setAverageVol] = useState('3000');
  const [isMarketCap, setMarketCap] = useState('4.86B');

  const dumpDetails = [
    {
      companyShortName: 'CBA',
      companyFullName: 'Commonwealth Bank',
      image: Images.company,
    },
  ];

  const dumpText =
    'For the six months ended 31 December 2020, Nine Entertainment Co Holdings Ltd revenues decreased 2% to A$1.16B. Net income before extraordinary items increased 90% to A$172.7M. Revenues reflect Digital and Publishing segment decrease of 20% to A$263.4M, Domain Group segmentdecrease of 7% to A$136.9M. Net income reflects Salary and employee benefit expense decrease.... of less than 1% toA$341.8M (expense).';

  return {
    isAverageVol,
    isMarketCap,
    dumpDetails,
    dumpText,
  };
};

export default useCompanySummary;
