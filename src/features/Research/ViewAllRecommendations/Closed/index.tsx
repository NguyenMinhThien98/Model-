import {ScrollView, View} from 'react-native';
import React from 'react';
import TableRecommendations from 'components/TableRecommendations';
import RecommendationSearchFilterGroup from 'components/RecommendationSearchFilterGroup';
import FilterGroupRecommendations from 'components/FilterGroupRecommendations';
import useOpenRecommendations from './hooks';

const Closed = props => {
  const {dumpDetails} = useOpenRecommendations();
  return (
    <View>
      <RecommendationSearchFilterGroup getCurrentTab={props.currentTab} />
      <FilterGroupRecommendations />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TableRecommendations dataInfo={dumpDetails} />
      </ScrollView>
    </View>
  );
};

export default Closed;
