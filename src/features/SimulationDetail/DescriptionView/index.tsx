import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {formatNumber} from 'utils/ number';
import {Colors} from 'assets/colors';
import {t} from 'i18next';
const FAKE_DATA = {
  currentValue: 15000,
  netEarning: 5000,
  growthToday: -12.45,
};
const DescriptionView = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topDescContainer}>
        <View style={styles.topDescItemContainer}>
          <Text style={styles.topDescItemTitle}>
            {' '}
            {t('simulationDetail.currentValue')}
          </Text>
          <Text style={styles.infoTxt}>
            ${formatNumber(FAKE_DATA.currentValue)}
          </Text>
        </View>
        <View style={styles.separateView} />
        <View style={styles.topDescItemContainer}>
          <Text style={styles.topDescItemTitle}>
            {t('simulationDetail.netEarning')}
          </Text>
          <Text style={styles.infoTxt}>
            ${formatNumber(FAKE_DATA.netEarning)}
          </Text>
        </View>
        <View style={styles.separateView} />
        <View style={styles.topDescItemContainer}>
          <Text style={styles.topDescItemTitle}>
            {t('simulationDetail.today')}
          </Text>
          <View style={styles.todayInfo}>
            <Text
              style={[
                styles.infoTxt,
                {
                  color:
                    FAKE_DATA.growthToday < 0
                      ? Colors.error600
                      : Colors.success700,
                },
              ]}>
              {formatNumber(FAKE_DATA.growthToday)}
            </Text>
            <Image
              style={styles.upDownImage}
              source={
                FAKE_DATA.growthToday < 0
                  ? Images.arrow_downward
                  : Images.arrow_upward
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DescriptionView;
