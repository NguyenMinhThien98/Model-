import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';
import {RootRouteProps, SCREENS} from 'navigation/NavigationTypes';
import {useRoute} from '@react-navigation/native';

const RecommendationDetailsComponent = () => {
  const route = useRoute<RootRouteProps<SCREENS.RECOMMENDATIONDETAILS>>();
  const loadData = route.params;
  return (
    <View>
      {Object.values(loadData).map((item, index) => (
        <View key={index.toString() + item.id}>
          <View style={styles.recommendationCompanyContainer}>
            <View
              key={index.toString()}
              style={styles.recommendationDetailsWrapper}>
              <View style={styles.companyInfo}>
                <Image style={styles.companyImage} source={item.image} />
                <View>
                  <Text style={styles.companyShortName}>
                    {item.companyShortName}
                  </Text>
                  <Text style={styles.companyFullName}>
                    {item.companyFullName}
                  </Text>
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
            </View>
            <View style={styles.divider} />
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.dateStyle}>
                {i18n.t('company_overview.action')}
              </Text>
              <View
                style={item.buyStatus ? styles.buyButton : styles.sellButton}>
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
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.dateStyle}>
                {i18n.t('company_overview.published_date')}
              </Text>
              <Text style={styles.dateStyle}>{item.published_date}</Text>
            </View>
            <View style={styles.spaceBetweenRow}>
              <Text style={styles.dateStyle}>
                {i18n.t('company_overview.closed_date')}
              </Text>
              <Text style={styles.dateStyle}>{item.closed_date}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceContainer}>
              <View style={styles.priceContainer}>
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.buy_price')}
                  </Text>
                  <Text style={styles.priceValue}>${item.buyPrice}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.target_price')}
                  </Text>
                  <Text style={styles.priceValue}>${item.targetPrice}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.stop_loss')}
                  </Text>
                  <Text style={styles.priceValue}>${item.stopLoss}</Text>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
          <View style={styles.recommendationsBlocks}>
            <Text style={styles.blockTitle}>{i18n.t(item.catalyst.title)}</Text>
            <Text style={styles.dateStyle}>{item.catalyst.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RecommendationDetailsComponent;
