import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import Screen from 'components/Screen';
import CompanyNavigation from 'components/CompanyNavigation';
import TabBarHeader from 'components/TabBarHeader';
import useViewAllRecommendations from './hooks';
import i18n from 'utils/LocalizedStrings';
import Open from './Open';
import Closed from './Closed';

const TAB_VIEW = {
  OPEN: 'Open',
  CLOSED: 'Closed',
};

const listTabName = [
  {key: TAB_VIEW.OPEN, title: i18n.t('viewAllRecommendations.open')},
  {key: TAB_VIEW.CLOSED, title: i18n.t('viewAllRecommendations.closed')},
];

const ViewAllRecommendations = () => {
  const {selectedTab, changedTabHandle} = useViewAllRecommendations();

  const renderSelectedView = useCallback(() => {
    switch (selectedTab?.key) {
      case TAB_VIEW.OPEN:
        return <Open currentTab={'open'} />;
      case TAB_VIEW.CLOSED:
        return <Closed currentTab={'closed'} />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <Screen backgroundColor="white" barStyle="dark-content">
      <>
        <SafeAreaView style={[styles.backgroundWhite]}>
          <View
            style={[styles.recommendationContainer, styles.backgroundWhite]}>
            <CompanyNavigation
              navigationValue={['viewAllRecommendations.maqro_recommendations']}
            />
          </View>
          <View style={styles.tabHeaderContainer}>
            <TabBarHeader
              selectedTabValue={listTabName[0]}
              onChangedTab={changedTabHandle}
              listItem={listTabName}
            />
          </View>
          <View>{renderSelectedView()}</View>
        </SafeAreaView>
      </>
    </Screen>
  );
};

export default ViewAllRecommendations;
