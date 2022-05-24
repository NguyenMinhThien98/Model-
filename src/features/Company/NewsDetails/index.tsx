import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Screen from 'components/Screen';
import styles from './styles';
import CompanyNavigation from 'components/CompanyNavigation';
import i18n from 'utils/LocalizedStrings';
import companyNewsItemStyles from 'components/CompanyNewsItem/styles';
import CompanyNewsItem from 'components/CompanyNewsItem';
import {TAG_TYPE} from 'config/constants';

const CompanyNewsDetails = props => {
  const getNewsInfo = props.route.params.dumpNews;
  const newsTitle = getNewsInfo[0];
  return (
    <Screen backgroundColor="white" barStyle="dark-content">
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={styles.newsContainer}>
          <CompanyNavigation
            navigationValue={[
              'company_overview.cba',
              'company_overview.news.news',
            ]}
          />
          <Text style={styles.newsTitle}>{newsTitle.title}</Text>
          <View style={styles.newsTagContainer}>
            <Text style={styles.newsPublishedDate}>
              {i18n.t('company_overview.news.published')}{' '}
              {newsTitle.published_date}
            </Text>
            <View
              style={[
                styles.defaultNewsTag,
                newsTitle.tagType === TAG_TYPE.ANNOUNCEMENT &&
                  companyNewsItemStyles.newsTagAnnouncement,
                newsTitle.tagType === TAG_TYPE.RECOMMENDATIONS &&
                  companyNewsItemStyles.newsTagRecommendations,
                newsTitle.tagType === TAG_TYPE.BROKERNOTES &&
                  companyNewsItemStyles.newsTagBrokerNotes,
                newsTitle.tagType === TAG_TYPE.RESOURCES &&
                  companyNewsItemStyles.newsTagResouces,
                newsTitle.tagType === TAG_TYPE.MARKETNEWS &&
                  companyNewsItemStyles.newsTagMarketNews,
              ]}>
              <Text
                style={[
                  newsTitle.tagType === TAG_TYPE.ANNOUNCEMENT &&
                    companyNewsItemStyles.newsTagAnnouncementText,
                  newsTitle.tagType === TAG_TYPE.RECOMMENDATIONS &&
                    companyNewsItemStyles.newsTagRecommendationsText,
                  newsTitle.tagType === TAG_TYPE.BROKERNOTES &&
                    companyNewsItemStyles.newsTagBrokerNotesText,
                  newsTitle.tagType === TAG_TYPE.RESOURCES &&
                    companyNewsItemStyles.newsTagResoucesText,
                  newsTitle.tagType === TAG_TYPE.MARKETNEWS &&
                    companyNewsItemStyles.newsTagMarketNewsText,
                ]}>
                {i18n.t(newsTitle.tag)}
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.newsDescription}>
                {newsTitle.description}
              </Text>
            </View>
            <View style={styles.divider} />
            <Text style={styles.otherNews}>
              {i18n.t('company_overview.news.other')}{' '}
              {i18n.t('company_overview.cba')}{' '}
              {i18n.t('company_overview.news.news')}
            </Text>
            <CompanyNewsItem news={getNewsInfo} />
            <View style={styles.bottomHeight} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Screen>
  );
};

export default CompanyNewsDetails;
