import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from 'assets/images';
import i18n from 'utils/LocalizedStrings';
import {Colors} from 'assets/colors';
interface CompanyNewsItem {
  news: Array<CompanyNewsItem>;
}

import {TAG_TYPE} from 'config/constants';

const CompanyNewsItem = props => {
  const news = props.news;
  return (
    <View style={styles.newsListContainer}>
      {news.map((item, index) => (
        <LinearGradient
          angle={304.39}
          colors={[Colors.gradientGrey]}
          key={index.toString()}
          style={styles.gradientContainer}>
          <View style={styles.newsListWrapper}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <View style={styles.newsPublished}>
              <Text style={styles.newsPublishedTitle}>
                {i18n.t('company_overview.news.published')}{' '}
                {item.published_date}
              </Text>
              <View style={styles.newsTagGroup}>
                <View
                  style={[
                    item.tagType === TAG_TYPE.ANNOUNCEMENT &&
                      styles.newsTagAnnouncement,
                    item.tagType === TAG_TYPE.RECOMMENDATIONS &&
                      styles.newsTagRecommendations,
                    item.tagType === TAG_TYPE.BROKERNOTES &&
                      styles.newsTagBrokerNotes,
                    item.tagType === TAG_TYPE.RESOURCES &&
                      styles.newsTagResouces,
                    item.tagType === TAG_TYPE.MARKETNEWS &&
                      styles.newsTagMarketNews,
                  ]}>
                  <Text
                    style={[
                      item.tagType === TAG_TYPE.ANNOUNCEMENT &&
                        styles.newsTagAnnouncementText,
                      item.tagType === TAG_TYPE.RECOMMENDATIONS &&
                        styles.newsTagRecommendationsText,
                      item.tagType === TAG_TYPE.BROKERNOTES &&
                        styles.newsTagBrokerNotesText,
                      item.tagType === TAG_TYPE.RESOURCES &&
                        styles.newsTagResoucesText,
                      item.tagType === TAG_TYPE.MARKETNEWS &&
                        styles.newsTagMarketNewsText,
                    ]}>
                    {i18n.t(item.tag)}
                  </Text>
                </View>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity onPress={props.goNewsDetails}>
                    <View style={styles.chevronPrimaryRight}>
                      <Image source={Images.chevron_right} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      ))}
    </View>
  );
};

export default CompanyNewsItem;
