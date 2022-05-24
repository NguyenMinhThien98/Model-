import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyles from 'assets/globalStyles';
import {t} from 'i18next';
import useMainSearchFacade from './hook';
import Recommendation from 'features/Research/Recommendation';
import TopMover from 'features/Research/TopMover';

type Props = {
  onPressFilter: () => void;
  isShowClearSearchBtn: boolean;
};

const Research = (props: Props) => {
  const {recommendations, topMovers, sectors} = useMainSearchFacade();
  return (
    <View style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Recommendation data={recommendations} />

        <TopMover data={topMovers} />

        <View style={styles.titleView}>
          <Text style={globalStyles.title}>{t('search.sectors')}</Text>
        </View>
        <View style={styles.viewSelector}>
          {sectors.map((item: string, index: number) => (
            <TouchableOpacity
              style={styles.viewItemSelector}
              key={index.toString()}>
              <Text style={styles.txtItemSelector}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Research;
