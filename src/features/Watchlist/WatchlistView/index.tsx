import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {Images} from 'assets/images';
import styles from './styles';
import WatchListsItem from '../WatchlistItem';
import globalStyles from 'assets/globalStyles';
import {t} from 'i18next';
const FAKE_DATA = ['simulation 1', 'simulation 1', 'simulation 1'];
const WatchlistView = () => {
  return (
    <View style={globalStyles.rootMargin}>
      <View style={styles.navContainer}>
        <Text style={styles.navTitle}>{t('watchlist.myWatchlist')}</Text>
        <TouchableOpacity style={styles.sortBtnContainer}>
          <Text style={styles.sortTxt}>{t('watchlist.sort')}</Text>
          <Image source={Images.keyboard_arrow_down} />
        </TouchableOpacity>
      </View>
      <FlatList data={FAKE_DATA} renderItem={WatchListsItem} />
      <View />
    </View>
  );
};

export default WatchlistView;
