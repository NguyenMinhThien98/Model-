import {View} from 'react-native';
import React, {FC, useCallback} from 'react';
import Screen from 'components/Screen';
import styles from './styles';
import {t} from 'i18next';
import useWatchlistFacade from './hook';

import DashBoardHeader from 'components/DashboardHeader';
import TabBarHeader from 'components/TabBarHeader';
import SimulationsView from './SimulationsView';
import WatchlistView from './WatchlistView';

const TAB_VIEW = {
  WATCHLIST: 'Watchlist',
  SIMULATIONS: 'Simulations',
};

const listTabName = [
  {key: TAB_VIEW.WATCHLIST, title: 'Watchlist'},
  {key: TAB_VIEW.SIMULATIONS, title: 'Simulations'},
];

const Watchlist: FC = () => {
  const {selectedTab, changedTabHandle} = useWatchlistFacade();

  const renderSelectedView = useCallback(() => {
    switch (selectedTab?.key) {
      case TAB_VIEW.WATCHLIST:
        return <WatchlistView />;
      case TAB_VIEW.SIMULATIONS:
        return <SimulationsView />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <Screen>
      <>
        <DashBoardHeader title={t('watchlist.watchlist')} />
        <View style={styles.rootContainer}>
          <TabBarHeader
            selectedTabValue={listTabName[0]}
            onChangedTab={changedTabHandle}
            listItem={listTabName}
            styleContainer={styles.rootTab}
          />
          {renderSelectedView()}
        </View>
      </>
    </Screen>
  );
};

export default Watchlist;
