import {ScrollView, View} from 'react-native';
import React, {useCallback} from 'react';
import FinancialsNavigation from 'components/FinancialsNavigation';
import useCompanyFinancials from '../hooks';
import styles from './styles';
import Summary from './Summary';
import Health from './Health';
import DockedButton from 'components/DockedButton';
import Equity from './Equity';
import Valuation from './Valuation';
import Dividends from './Dividends';
import i18n from 'utils/LocalizedStrings';

const TAB_VIEW = {
  SUMMARY: 'Summary',
  HEALTH: 'Health',
  EQUITY: 'Equity',
  VALUATION: 'Valuation',
  DIVIDENDS: 'Dividends',
};

const listTabName = [
  {key: TAB_VIEW.SUMMARY, title: i18n.t('company_overview.financials.summary')},
  {key: TAB_VIEW.HEALTH, title: i18n.t('company_overview.financials.health')},
  {key: TAB_VIEW.EQUITY, title: i18n.t('company_overview.financials.equity')},
  {
    key: TAB_VIEW.VALUATION,
    title: i18n.t('company_overview.financials.valuation'),
  },
  {
    key: TAB_VIEW.DIVIDENDS,
    title: i18n.t('company_overview.financials.dividends'),
  },
];

const Financials = () => {
  const {selectedTab, changedTabHandle} = useCompanyFinancials();
  const renderSelectedView = useCallback(() => {
    switch (selectedTab?.key) {
      case TAB_VIEW.SUMMARY:
        return <Summary />;
      case TAB_VIEW.HEALTH:
        return <Health />;
      case TAB_VIEW.EQUITY:
        return <Equity />;
      case TAB_VIEW.VALUATION:
        return <Valuation />;
      case TAB_VIEW.DIVIDENDS:
        return <Dividends />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <View style={styles.financialsContainer}>
      <View style={styles.financialsNavigation}>
        <FinancialsNavigation
          selectedTabValue={listTabName[0]}
          onChangedTab={changedTabHandle}
          listItem={listTabName}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderSelectedView()}
        </ScrollView>
      </View>
      <DockedButton />
    </View>
  );
};

export default Financials;
