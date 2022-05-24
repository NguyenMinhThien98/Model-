import LineChart from 'components/LineChart';
import React from 'react';
import useStocksFacade from './hooks';
import {ScrollView} from 'react-native';
import CurrentRecommendationBtn from 'components/CurrentRecommendation';
import DockedButton from 'components/DockedButton';

const CompanyOverview = () => {
  const {fakeData} = useStocksFacade();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LineChart data={fakeData} />
      <CurrentRecommendationBtn />
      <DockedButton />
    </ScrollView>
  );
};

export default CompanyOverview;
