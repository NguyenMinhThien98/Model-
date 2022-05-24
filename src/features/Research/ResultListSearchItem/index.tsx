import {View, Text, TouchableOpacity, Image, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {Colors} from 'assets/colors';
import {ItemResultSearch} from '../../../models/ItemResultSearch';
// import {ItemSearchInterface} from 'models/ItemSearch';

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
      <Text style={[{color: color}]}> {`${sign}${children}%`} </Text>
      <Image style={{}} source={icon} />
    </View>
  );
};

interface SuggestSearchItemProps {
  item: ItemResultSearch;
  index: number;
  containerStyle?: ViewStyle;
}

const ResultSearchItem = ({item}: SuggestSearchItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.leftIconView}>
        <Image style={styles.picture} source={{uri: item?.logo_url}} />
      </TouchableOpacity>
      <View style={styles.descriptionView}>
        <View style={styles.lineTopView}>
          <View style={styles.stockNameView}>
            <Text style={styles.stockNameTxt}>{item?.asx_code}</Text>
          </View>
          <View style={styles.alignBottomView}>
            <View style={styles.numberView}>
              <PercentText>{FAKE_DATA.percentGrowth}</PercentText>
              <Text style={styles.priceTxt}>{`$${FAKE_DATA.price}`}</Text>
            </View>
            <View style={styles.rightIconView}>
              <Image source={Images.chevron_right} />
            </View>
          </View>
        </View>
        <Text style={styles.companyName}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultSearchItem;
