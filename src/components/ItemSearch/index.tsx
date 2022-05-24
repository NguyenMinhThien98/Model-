import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import CircularProgressGradient from 'components/CircularProgressGradient';
import React from 'react';
import {ItemResultSearch} from '../../models/ItemResultSearch';
import globalStyles from '../../assets/globalStyles';
import styles from 'components/ItemSearch/styles';
import {t} from 'i18next';

type Props = {
  item: ItemResultSearch;
  containerStyle?: ViewStyle;
};

const value = 69;

const ItemSearch = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.container, props.containerStyle]}>
      <View style={[globalStyles.fdr, globalStyles.aic]}>
        <Image style={styles.picture} source={{uri: props.item?.logo_url}} />
        <Text style={styles.txtCode}>{props.item.asx_code}</Text>
      </View>
      <Text style={styles.txtDesc} numberOfLines={1}>
        {props.item.name}
      </Text>
      <Text style={styles.txtReturn}>+34.56% Return</Text>
      <View style={styles.rowBuy}>
        {props.item.id ? (
          <View style={styles.viewBuy}>
            <Text style={styles.txtBuy}>{t('search.buy')}</Text>
          </View>
        ) : (
          <View style={styles.viewSell}>
            <Text style={styles.txtSell}>{t('search.sell')}</Text>
          </View>
        )}
      </View>
      <View style={styles.viewCircularProgress}>
        <CircularProgressGradient value={value} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemSearch;
