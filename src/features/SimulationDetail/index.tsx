import React, {FC} from 'react';
import Screen from 'components/Screen';
import styles from './styles';
import {t} from 'i18next';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import useSimulationDetailFacade from './hook';
import DashBoardHeader from 'components/DashboardHeader';
import DescriptionView from './DescriptionView';
import {Images} from 'assets/images';

const FAKE_DATA = {
  nameSimulation: 'Industrials Simulation',
};

const Watchlist: FC = () => {
  const {goBackHandle} = useSimulationDetailFacade();
  return (
    <Screen>
      <>
        <DashBoardHeader title={t('watchlist.watchlist')} />
        <View style={styles.rootContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerLeftGroup}>
              <TouchableOpacity onPress={goBackHandle}>
                <Image
                  style={styles.goBackIcon}
                  source={Images.ic_arrow_back}
                />
              </TouchableOpacity>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitleTxt}>
                  {FAKE_DATA.nameSimulation}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image source={Images.more_vert} />
            </TouchableOpacity>
          </View>
          <DescriptionView />
        </View>
      </>
    </Screen>
  );
};

export default Watchlist;
