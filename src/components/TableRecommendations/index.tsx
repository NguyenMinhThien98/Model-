import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';
import useTableRecommendations from './hooks';
import {TAG_TYPE} from 'config/constants';
import {Images} from 'assets/images';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RecommendData} from 'models/Recommendation';

const TableRecommendations = ({dataInfo}) => {
  const {tableHeader} = useTableRecommendations();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goRecommendationDetails = useCallback(
    data => {
      navigation.navigate(SCREENS.RECOMMENDATIONDETAILS, {data});
    },
    [navigation],
  );

  return (
    <View style={styles.tableContainer}>
      <View style={[styles.tableHeader, styles.flexRow]}>
        {tableHeader.map((item, index) => (
          <View key={index.toString()}>
            <Text style={styles.table_text}>{item.table_title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View>
        {dataInfo.map((item: RecommendData, index) => (
          <View key={index.toString() + item.id}>
            <View style={[styles.tableDataWrapper, styles.flexRow]}>
              <Text style={[styles.tableDataText, styles.code_date_text]}>
                {item.code_date}
              </Text>
              <Text style={[styles.tableDataText, styles.code_text]}>
                {item.code}
              </Text>
              <View style={styles.typeTagGroup}>
                <View
                  style={[
                    item.tagType === TAG_TYPE.OPEN && styles.openTag,
                    styles.tagCover,
                    item.tagType === TAG_TYPE.SELL && styles.sellTag,
                    styles.tagCover,
                    item.tagType === TAG_TYPE.CLOSED && styles.closedTag,
                    styles.tagCover,
                    item.tagType === TAG_TYPE.BUY && styles.buyTag,
                    styles.tagCover,
                  ]}>
                  <Text
                    style={[
                      item.tagType === TAG_TYPE.OPEN && styles.openTagText,
                      styles.tagTextStyle,
                      item.tagType === TAG_TYPE.SELL && styles.sellTagText,
                      styles.tagTextStyle,
                      item.tagType === TAG_TYPE.CLOSED && styles.closedTagText,
                      styles.tagTextStyle,
                      item.tagType === TAG_TYPE.BUY && styles.buyTagText,
                      styles.tagTextStyle,
                    ]}>
                    {i18n.t(item.tagType)}
                  </Text>
                </View>
              </View>
              <Text>{item.return}</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => goRecommendationDetails(item)}>
                  <View style={styles.chevronPrimaryRight}>
                    <Image source={Images.chevron_primary_right} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TableRecommendations;
