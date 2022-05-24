import {View} from 'react-native';
import React from 'react';
import ProgressList from 'components/ProgressList';
import useCompanyEquity from './hooks';

const Valuation = () => {
  const {fakeDataListProgress} = useCompanyEquity();
  return (
    <View>
      <ProgressList data={fakeDataListProgress} />
    </View>
  );
};

export default Valuation;
