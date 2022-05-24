import {View, SafeAreaView} from 'react-native';
import React, {FC, useCallback} from 'react';
import Screen from 'components/Screen';
import styles from './styles';
import useCompanyFacade from './hooks';
import CompanyOverview from './Overview';
import TabBarHeader from 'components/TabBarHeader';
import CompanyNavigation from 'components/CompanyNavigation';
import CompanyTitle from 'components/CompanyTitle';
import CompanyNews from './News';
import CompanyAbout from './About';
import CompanyFinancials from './Financials';
import i18n from 'utils/LocalizedStrings';

const TAB_VIEW = {
  OVERVIEW: 'Overview',
  ABOUT: 'About',
  NEWS: 'News',
  FINANCIALS: 'Financials',
};

const listTabName = [
  {key: TAB_VIEW.OVERVIEW, title: i18n.t('company_overview.overview.overview')},
  {key: TAB_VIEW.ABOUT, title: i18n.t('company_overview.overview.about')},
  {key: TAB_VIEW.NEWS, title: i18n.t('company_overview.overview.news')},
  {
    key: TAB_VIEW.FINANCIALS,
    title: i18n.t('company_overview.overview.financials'),
  },
];

const Company: FC = () => {
  const {selectedTab, changedTabHandle} = useCompanyFacade();

  const renderSelectedView = useCallback(() => {
    switch (selectedTab?.key) {
      case TAB_VIEW.OVERVIEW:
        return <CompanyOverview />;
      case TAB_VIEW.ABOUT:
        return <CompanyAbout />;
      case TAB_VIEW.NEWS:
        return <CompanyNews />;
      case TAB_VIEW.FINANCIALS:
        return <CompanyFinancials />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <Screen backgroundColor="white" barStyle="dark-content">
      <>
        <SafeAreaView />
        <View style={styles.rootContainer}>
          <CompanyNavigation navigationValue={['company_overview.cba']} />
          <TabBarHeader
            selectedTabValue={listTabName[0]}
            onChangedTab={changedTabHandle}
            listItem={listTabName}
          />
          <CompanyTitle />
          {renderSelectedView()}
        </View>
      </>
    </Screen>
  );
};

export default Company;
