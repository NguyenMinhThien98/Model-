import {View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import WatchlistSimulationCardItem from '../WatchlistSimulationCardItem';
import CreateSimulationItem from '../CreateSimulationItem';
import styles from './styles';
import useSimulationViewFacade from './hook';
const FAKE_DATA = ['simulation 1', 'simulation 2', 'simulation 3'];
const FAKE_DATA_SIMULATION = {
  name: 'Industrials',
  profit: 50,
  growth: 50,
  numberStocks: 3,
};
const SimulationsView = () => {
  const {pressSimulationCardHandle} = useSimulationViewFacade();
  const RenderItem = useCallback(
    ({item, index}) => {
      item = FAKE_DATA_SIMULATION;
      if (!index) {
        return <CreateSimulationItem containerStyle={styles.itemContainer} />;
      }
      return (
        <WatchlistSimulationCardItem
          onPressItem={pressSimulationCardHandle}
          containerStyle={styles.itemContainer}
          item={item}
        />
      );
    },
    [pressSimulationCardHandle],
  );
  return (
    <View style={styles.rootContainer}>
      <FlatList
        numColumns={2}
        data={[FAKE_DATA[0], ...FAKE_DATA]}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default SimulationsView;
