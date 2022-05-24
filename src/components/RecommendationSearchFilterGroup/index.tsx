import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Images} from 'assets/images';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';

const RecommendationSearchFilterGroup = props => {
  const [currentTabStatus, setcurrentTabStatus] = useState(props.getCurrentTab);

  return (
    <View style={styles.flexRow}>
      <View>
        <TextInput
          style={[
            styles.input,
            currentTabStatus === 'open' && styles.inputHalfWidth,
            currentTabStatus === 'closed' && styles.inputFullWidth,
          ]}
          placeholder="Search by code"
          keyboardType="numeric"
        />
      </View>
      <View
        style={[
          currentTabStatus === 'open' && styles.flexRow,
          currentTabStatus === 'closed' && styles.hideSortContainer,
        ]}>
        <TouchableOpacity style={styles.sortBtnContainer}>
          <Text style={styles.sortTxt}>{i18n.t('watchlist.sort')}</Text>
          <Image source={Images.keyboard_arrow_down} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortBtnView}>
          <Image style={styles.sortBtnImg} source={Images.filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecommendationSearchFilterGroup;
