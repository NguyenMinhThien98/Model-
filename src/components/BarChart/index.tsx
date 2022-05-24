import {Text, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Colors} from 'assets/colors';

export enum ItemBarChartType {
  PAST = 'Past',
  FUTURE = 'Future',
}

export type ItemBarChart = {
  title: string;
  value: string;
  type: ItemBarChartType;
  percent: number;
};

interface BarChartProps {
  data: ItemBarChart[];
}
const BarChart = ({data}: BarChartProps) => {
  const getColorItem = useCallback((item: ItemBarChart): string => {
    switch (item.type) {
      case ItemBarChartType.PAST:
        return Colors.success;
      case ItemBarChartType.FUTURE:
        return Colors.grey300;
    }
  }, []);

  const renderItem = useCallback(
    (item: ItemBarChart) => {
      const colorItem = getColorItem(item);
      const activeBarStyle = {
        width: `${item.percent}%`,
        backgroundColor: colorItem,
      };
      return (
        <View key={item.title + item.value}>
          <View style={styles.headerItem}>
            <Text style={styles.textHeader}>{item.title}</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.progressItem}>
              <View style={[styles.activeProgress, activeBarStyle]} />
            </View>
            <View style={styles.containerRight}>
              <Text>{item.value}</Text>
            </View>
          </View>
        </View>
      );
    },
    [getColorItem],
  );

  return (
    <View style={styles.container}>{data.map(item => renderItem(item))}</View>
  );
};

export default BarChart;
