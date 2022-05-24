import {Image, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {Colors} from 'assets/colors';

export enum ProgressType {
  HIGH = 'HIGH',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export type ProgressItem = {
  title: string;
  value: string;
  type: ProgressType;
  percent: number;
};

interface ProgressListProps {
  data: ProgressItem[];
}
const ProgressList = ({data}: ProgressListProps) => {
  const getBackgroundHeader = useCallback((item: ProgressItem): string => {
    switch (item.type) {
      case ProgressType.LOW:
        return Colors.errorLight;
      case ProgressType.MEDIUM:
        return Colors.warning100;
      case ProgressType.HIGH:
        return Colors.success100;
    }
  }, []);

  const getColorItem = useCallback((item: ProgressItem): string => {
    switch (item.type) {
      case ProgressType.LOW:
        return Colors.error;
      case ProgressType.MEDIUM:
        return Colors.orange;
      case ProgressType.HIGH:
        return Colors.success;
    }
  }, []);

  const renderItem = useCallback(
    (item: ProgressItem) => {
      const headerBackground = getBackgroundHeader(item);
      const colorItem = getColorItem(item);
      const sourceImage =
        item.type === ProgressType.LOW
          ? Images.ic_error_outline
          : Images.ic_check_circle_outline;
      const activeBarStyle = {
        width: `${item.percent}%`,
        backgroundColor: colorItem,
      };
      return (
        <View key={item.title + item.value}>
          <View style={styles.headerItem}>
            <Text style={styles.textHeader}>{item.title}</Text>
            <View
              style={[
                styles.containerHeaderRight,
                {backgroundColor: headerBackground},
              ]}>
              <Text style={[styles.value, {color: colorItem}]}>
                {item.value}
              </Text>
              <Image
                source={sourceImage}
                style={[styles.image, {tintColor: colorItem}]}
              />
            </View>
          </View>
          <View style={styles.progressItem}>
            <View style={[styles.activeProgress, activeBarStyle]} />
          </View>
        </View>
      );
    },
    [getBackgroundHeader, getColorItem],
  );

  return (
    <View style={styles.container}>{data.map(item => renderItem(item))}</View>
  );
};

export default ProgressList;
