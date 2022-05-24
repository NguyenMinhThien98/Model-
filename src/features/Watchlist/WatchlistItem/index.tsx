import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {Colors} from 'assets/colors';
import {t} from 'i18next';

const FAKE_DATA = {
  imageUrl: 'https://picsum.photos/200',
  stockName: 'CBA',
  companyName: 'Commonwealth Bank ',
  percentGrowth: 50,
  price: 123.45,
};
interface PercentTextProps {
  children: number;
}

const PercentText = ({children}: PercentTextProps) => {
  const isPositive = children >= 0;
  const sign = isPositive ? '+' : '';
  const color = isPositive ? Colors.success700 : Colors.error700;
  const icon = isPositive ? Images.arrow_upward : Images.arrow_downward;
  return (
    <View style={styles.percentTextContainer}>
      <Text style={{color: color}}> {`${sign}${children}%`} </Text>
      <Image source={icon} />
    </View>
  );
};

interface SuggestSearchItemProps {
  //TODO: Update type of "item" later
  item: any;
  leftIcon?: ImageSourcePropType;
  onPressPicture?: () => void;
  rightIcon?: ImageSourcePropType;
  index: number;
  onPressRightIcon?: () => void;
  containerStyle?: ViewStyle;
  onPressItem?: () => any;
}

const WatchListsItem = ({
  item,
  onPressPicture,
  onPressRightIcon,
  onPressItem,
  containerStyle,
}: SuggestSearchItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPressItem?.bind(this, item)}
      style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.leftIconView}
        disabled={!onPressPicture}
        onPress={onPressPicture}>
        <Image style={styles.picture} source={{uri: FAKE_DATA.imageUrl}} />
      </TouchableOpacity>
      <View style={styles.descriptionView}>
        <View style={styles.stockNameView}>
          <Text style={styles.stockNameTxt}>{FAKE_DATA.stockName}</Text>
        </View>
        <View style={styles.graphView}>
          <Text>{t('watchlist.graph')}</Text>
        </View>
        <View style={styles.numberView}>
          <PercentText>{FAKE_DATA.percentGrowth}</PercentText>
          <Text style={styles.priceTxt}>{`$${FAKE_DATA.price}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.rightIconView}
          disabled={!onPressRightIcon}
          onPress={onPressRightIcon}>
          <Image source={Images.delete_outline} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default WatchListsItem;
