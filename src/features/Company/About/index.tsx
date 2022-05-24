import {View, Text, Image, ScrollView, Linking} from 'react-native';
import React from 'react';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';
import useAboutCompany from './hooks';
import DockedButton from 'components/DockedButton';

const About = () => {
  const {
    isNoShareHolders,
    isOutStandingShares,
    isWebsiteLink,
    dumpGeneral,
    dumpAboutCompany,
    dumpCategory,
  } = useAboutCompany();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.sectionText}>
          {i18n.t('company_overview.general.general')}
        </Text>
        {dumpGeneral.map((item, index) => (
          <View key={index.toString()}>
            <View style={styles.generalInfo}>
              <Text style={styles.generalTitle}>{i18n.t(item.title)}</Text>
              <Text style={styles.generalDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
        {dumpAboutCompany.map((item, index) => (
          <View key={index.toString()} style={styles.aboutCompanyWrapper}>
            <Text style={styles.aboutCompanyText}>{item.about}</Text>
            <Image style={styles.aboutImage} source={item.image} />
          </View>
        ))}
        <View style={styles.divider} />
        <View>
          <Text style={styles.sectionText}>
            {i18n.t('company_overview.category.category')}
          </Text>
          {dumpCategory.map((item, index) => (
            <View key={index.toString()}>
              <View style={styles.generalInfo}>
                <Text style={styles.generalTitle}>{i18n.t(item.title)}</Text>
                <Text style={styles.generalDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.divider} />
        <View>
          <Text style={styles.sectionText}>
            {i18n.t('company_overview.shares.shares')}
          </Text>
          <View style={styles.sharesContainer}>
            <View style={styles.sharesWrapper}>
              <Text style={[styles.textCenter, styles.sharesTitle]}>
                {isNoShareHolders}
              </Text>
              <Text style={[styles.textCenter, styles.sharesDescription]}>
                {i18n.t('company_overview.shares.no_shareholders')}
              </Text>
            </View>
            <View style={styles.sharesWrapper}>
              <Text style={[styles.textCenter, styles.sharesTitle]}>
                {isOutStandingShares}
              </Text>
              <Text style={[styles.textCenter, styles.sharesDescription]}>
                {i18n.t('company_overview.shares.outstading_shares')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View>
          <Text style={styles.sectionText}>
            {i18n.t('company_overview.website')}
          </Text>
          <Text
            style={styles.websiteLink}
            onPress={() => Linking.openURL(isWebsiteLink)}>
            {isWebsiteLink}
          </Text>
        </View>
      </View>
      <DockedButton />
    </ScrollView>
  );
};

export default About;
