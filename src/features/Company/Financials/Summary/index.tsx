import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import useCompanySummary from './hooks';
import i18n from 'utils/LocalizedStrings';

const Summary = () => {
  const {isAverageVol, isMarketCap, dumpText} = useCompanySummary();

  return (
    <View style={styles.summaryContainer}>
      <View style={styles.statsWrapper}>
        <View style={styles.stats}>
          <Text style={styles.statsTitle}>{isAverageVol}</Text>
          <Text style={styles.statsDescription}>
            {i18n.t('company_overview.financials.10_day_average_vol')}
          </Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsTitle}>${isMarketCap}</Text>
          <Text style={styles.statsDescription}>
            {i18n.t('company_overview.financials.market_cap')}
          </Text>
        </View>
      </View>
      <View style={styles.statsInfoWrapper}>
        <Text>{dumpText}</Text>
      </View>
    </View>
  );
};

export default Summary;
