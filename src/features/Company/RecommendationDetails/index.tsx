import {View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import CompanyNavigation from 'components/CompanyNavigation';
import Screen from 'components/Screen';
import RecommendationDetailsComponent from 'components/RecommendationDetailsComponent';
import useRecommendationDetails from './hooks';

const RecommendationDetails = () => {
  const {dumpDetails, dumpText, isBuyPrice, isTargetPrice, isStopLoss} =
    useRecommendationDetails();
  return (
    <Screen backgroundColor="white" barStyle="dark-content">
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={styles.recommendationDetailsContainer}>
          <CompanyNavigation
            navigationValue={['company_overview.recommendations']}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <RecommendationDetailsComponent
              companyInfo={dumpDetails}
              companyDescription={dumpText}
              buyPrice={isBuyPrice}
              targetPrice={isTargetPrice}
              stopLoss={isStopLoss}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default RecommendationDetails;
