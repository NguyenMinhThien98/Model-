import {View} from 'react-native';
import React from 'react';
import ProgressList from 'components/ProgressList';
import useCompanyHealth from './hooks';

const Health = () => {
  const {fakeDataListProgress} = useCompanyHealth();
  return (
    <View>
      <ProgressList data={fakeDataListProgress} />
    </View>
  );
};

export default Health;
