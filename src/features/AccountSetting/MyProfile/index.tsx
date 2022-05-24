import globalStyles from 'assets/globalStyles';
import {Images} from 'assets/images';
import SimpleHeader from 'components/SimpleHeader';
import {t} from 'i18next';
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import useMyProfileFacade from './hook';
import styles from './styles';
import moment from 'moment';
import Screen from 'components/Screen';

const MyProfile = () => {
  const {user, loading, onEditEmail, onEditPhone, onEditResidential} =
    useMyProfileFacade();
  return (
    <Screen loading={loading}>
      <View style={styles.main}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={globalStyles.flexOne}>
          <SimpleHeader
            headerText={t('myProfile.header')}
            leftIcon={Images.ic_arrow_back_header}
          />
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('myProfile.about')}</Text>
              <View style={[styles.fieldRow, styles.borderTop]}>
                <Text style={styles.fieldName}>{t('myProfile.firstName')}</Text>
                <Text style={styles.fieldValue}>{user?.name}</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>
                  {t('myProfile.middleName')}
                </Text>
                <Text style={styles.fieldValue}>{user?.name}</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>{t('myProfile.lastName')}</Text>
                <Text style={styles.fieldValue}>{user?.name}</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>
                  {t('myProfile.contactEmail')}
                </Text>
                <Text style={styles.fieldValue}>{user?.email}</Text>
                <TouchableOpacity onPress={onEditEmail}>
                  <Image source={Images.ic_edit} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>
                  {t('myProfile.mobileNumber')}
                </Text>
                <Text style={styles.fieldValue}>{user?.number_phone}</Text>
                <TouchableOpacity onPress={onEditPhone}>
                  <Image source={Images.ic_edit} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
            </View>
            {/* TODO: Replace hard code when API done */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('myProfile.account')}</Text>
              <View style={[styles.fieldRow, styles.borderTop]}>
                <Text style={styles.fieldName}>
                  {t('myProfile.accountType')}
                </Text>
                <Text style={styles.fieldValue}>Personal</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>
                  {t('myProfile.accountName')}
                </Text>
                <Text style={styles.fieldValue}>{user?.name}</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>
                  {t('myProfile.createdDate')}
                </Text>
                <Text style={styles.fieldValue}>
                  {moment(user?.created_at).format('MM/DD/YY')}
                </Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>{t('myProfile.accountNo')}</Text>
                <Text style={styles.fieldValue}>MRQ 123 456 789</Text>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>{t('myProfile.hin')}</Text>
                <Text style={styles.fieldValue}>123 456 789</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{t('myProfile.address')}</Text>
              <View style={[styles.fieldRow, styles.borderTop]}>
                <Text style={styles.fieldName}>
                  {t('myProfile.residential')}
                </Text>
                <View style={globalStyles.flexOne}>
                  <Text style={styles.residentialFieldValue}>
                    U 1234, 77 King Street, Sydney, NSW Australia 2000
                  </Text>
                </View>
                <TouchableOpacity onPress={onEditResidential}>
                  <Image source={Images.ic_edit} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.fieldRow}>
                <Text style={styles.fieldName}>{t('myProfile.postal')}</Text>
                <Text style={styles.fieldValue}>Same as residential</Text>
                <TouchableOpacity>
                  <Image source={Images.ic_edit} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </Screen>
  );
};
export default MyProfile;
