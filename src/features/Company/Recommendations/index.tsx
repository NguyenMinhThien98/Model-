import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useCallback} from 'react';
import CompanyNavigation from 'components/CompanyNavigation';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';
import {Images} from 'assets/images';
import Screen from 'components/Screen';
import useCompanyRecommendations from './hooks';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';

const Recommendations = () => {
  const {header, recommendationsList} = useCompanyRecommendations();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goRecommendationDetails = useCallback(
    data => {
      navigation.navigate(SCREENS.RECOMMENDATIONDETAILS, {data});
    },
    [navigation],
  );

  return (
    <Screen backgroundColor="white" barStyle="dark-content">
      <SafeAreaView>
        <View style={styles.recommendationsContainer}>
          <CompanyNavigation
            navigationValue={[
              'company_overview.cba',
              'company_overview.recommendations',
            ]}
          />
          <View>
            <View style={styles.tableHeader}>
              {header.map((item, index) => (
                <View key={index.toString()}>
                  <Text style={styles.tableHeaderText}>
                    {i18n.t(item.text)}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.divider} />
            {recommendationsList.map((item, index) => (
              <View key={index.toString()} style={styles.recommedationsList}>
                <Text style={styles.pubDate}>{item.code_date}</Text>
                <View style={styles.buttonWrapper}>
                  <View>
                    <View
                      style={
                        item.buyStatus ? styles.buyButton : styles.sellButton
                      }>
                      <Text
                        style={
                          item.buyStatus
                            ? styles.buyButtonText
                            : styles.sellButtonText
                        }>
                        {i18n.t(`${`company_overview.${item.tagType}`}`)}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonWrapper}>
                  <View>
                    <View
                      style={
                        item.openStatus ? styles.openButton : styles.closeButton
                      }>
                      <Text
                        style={
                          item.openStatus
                            ? styles.openButtonText
                            : styles.closeButtonText
                        }>
                        {i18n.t(`${`company_overview.${item.tagStatus}`}`)}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    onPress={() => goRecommendationDetails(item)}>
                    <View style={styles.chevronPrimaryRight}>
                      <Image source={Images.chevron_primary_right} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default Recommendations;
