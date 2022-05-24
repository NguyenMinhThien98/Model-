import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useMemo} from 'react';
import styles, {personStyles} from './styles';
import {Images} from 'assets/images';
import {t} from 'i18next';
import Button from 'components/Button';
import {Colors} from 'assets/colors';

interface itemSimulationsProps {
  name: string;
  profit: number;
  growth: number;
  numberStocks: number;
}

interface WatchlistSimulationItemProps {
  item: itemSimulationsProps;
  containerStyle: StyleProp<ViewStyle>;
  onPressItem?: (item: itemSimulationsProps) => void;
  onPressTopIcon?: (item: itemSimulationsProps) => void;
  onPressAddHolding?: (item: itemSimulationsProps) => void;
}

const WatchlistSimulationItem = ({
  item,
  containerStyle,
  onPressItem,
  onPressTopIcon,
  onPressAddHolding,
}: WatchlistSimulationItemProps) => {
  const dataHandle = useMemo(() => {
    let colorTxt: object;
    if (item.profit > 0 && item.growth > 0) {
      colorTxt = personStyles.colorGreenTxt;
    } else if (item.profit < 0 && item.growth < 0) {
      colorTxt = personStyles.colorRedTxt;
    } else {
      colorTxt = personStyles.colorGreyTxt;
    }
    const descriptionTxt = [
      `$${item.profit?.toFixed(2)}`,
      `${item.numberStocks.toFixed(2)}%`,
    ].join(' | ');
    const isGrowth = item.growth > 0;
    return {
      ...item,
      colorTxt,
      descriptionTxt,
      isGrowth,
    };
  }, [item]);
  return (
    <TouchableOpacity
      onPress={onPressItem?.bind(this, item)}
      style={[styles.rootContainer, containerStyle]}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt} numberOfLines={1}>
            {dataHandle.name}
          </Text>
          <TouchableOpacity onPress={onPressTopIcon?.bind(this, item)}>
            <Image source={Images.more_vert} />
          </TouchableOpacity>
        </View>
        <Text
          style={[styles.descriptionTxt, dataHandle.colorTxt]}
          numberOfLines={1}>
          {dataHandle.descriptionTxt}
        </Text>
      </View>
      <View style={styles.stockContainer}>
        <Text style={styles.stockCounter} numberOfLines={1}>
          {dataHandle.numberStocks} {t('watchlist.stocks')}
        </Text>
        {dataHandle.numberStocks ? (
          <View style={styles.graphContainer}>
            <Text numberOfLines={1}>GRAPH</Text>
          </View>
        ) : (
          <Button
            title={t('watchlist.addHoldingBtn')}
            onPress={onPressAddHolding?.bind(this, item)}
            containerStyle={styles.btnAddHoldingContainer}
            titleStyle={styles.btnAddHoldingTxt}
          />
        )}
      </View>
      <View
        style={[
          styles.upDownIcon,
          {
            backgroundColor: dataHandle.isGrowth
              ? Colors.success200
              : Colors.error200,
          },
        ]}>
        <Image
          source={
            dataHandle.isGrowth ? Images.arrow_upward : Images.arrow_downward
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default WatchlistSimulationItem;
