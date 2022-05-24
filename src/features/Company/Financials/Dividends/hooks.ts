import {ItemBarChart, ItemBarChartType} from 'components/BarChart';

const useCompanyValuation = () => {
  const data2018: ItemBarChart[] = [
    {
      title: 'Aug 21 2018',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2018',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2018',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2018',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const data2019: ItemBarChart[] = [
    {
      title: 'Aug 21 2019',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2019',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2019',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2019',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const data2020: ItemBarChart[] = [
    {
      title: 'Aug 21 2020',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2018',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2018',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2018',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const data2021: ItemBarChart[] = [
    {
      title: 'Aug 21 2021',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2019',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2019',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2019',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const data2022: ItemBarChart[] = [
    {
      title: 'Aug 21 2022',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2019',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2019',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2019',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const data5y: ItemBarChart[] = [
    {
      title: 'Aug 21 2019 5Y',
      value: '$113,45.00',
      type: ItemBarChartType.PAST,
      percent: 70,
    },
    {
      title: 'May 21 2019',
      value: '$123,45.00',
      type: ItemBarChartType.PAST,
      percent: 80,
    },
    {
      title: 'Oct 21 2019',
      value: '$133,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 90,
    },
    {
      title: 'Nov 21 2019',
      value: '$113,45.00',
      type: ItemBarChartType.FUTURE,
      percent: 70,
    },
  ];

  const yearList = [
    {year: '2018', data: data2018},
    {year: '2019', data: data2019},
    {year: '2020', data: data2020},
    {year: '2021', data: data2021},
    {year: '2022', data: data2022},
    {year: '5Y', data: data5y},
  ];

  return {
    data2018,
    data2019,
    data2020,
    data2021,
    data2022,
    data5y,
    yearList,
  };
};

export default useCompanyValuation;
