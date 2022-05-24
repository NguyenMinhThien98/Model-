import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import TradingHeader from '../Components/TradingHeader';
import styles from '../styles';
import Screen from 'components/Screen';
import i18n from 'utils/LocalizedStrings';
import Button from 'components/Button';
import useReviewDetailFacade, {BlockItem} from './hooks';
import {Colors} from 'assets/colors';
import AppModal from 'components/Modal';
import {Images} from 'assets/images';
import useConstants from 'utils/constantsHooks';

const InfoGroup = ({dataInfo, indexOrder}) => {
  return (
    <View>
      <View style={[styles.row, styles.infoNameContainer, styles.spaceTop]}>
        <Text style={styles.titleSmall}>{dataInfo.infoName}</Text>
        <TouchableOpacity onPress={dataInfo?.onPressEdit}>
          <Text style={styles.editText}>{i18n.t('review.edit')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dataInfoContainer}>
        {dataInfo.data.map((item, index) =>
          item ? (
            <View
              key={`cell${item.label}`}
              style={[
                styles.row,
                {
                  backgroundColor:
                    index % 2 === 0 ? Colors.darkMode5 : Colors.darkMode10,
                },
              ]}>
              <View style={[styles.leftCell, indexOrder !== 0 && styles.body]}>
                <Text style={styles.leftTable}>{item.label}</Text>
              </View>
              <View style={[styles.rightCell, indexOrder !== 0 && styles.body]}>
                <Text style={styles.rightTable}>{item.value}</Text>
              </View>
            </View>
          ) : null,
        )}
      </View>
    </View>
  );
};

const TradingAccountCreated = ({isVisible, goToDashboard}) => {
  return (
    <AppModal
      modalVisible={isVisible}
      containerStyle={styles.successModal}
      modalStyle={styles.whiteBg}
      backdropStyle={styles.overlaySuccess}>
      <>
        <Image source={Images.ic_success} style={styles.successIcon} />
        <Text style={styles.successTitle}>
          {i18n.t('review.account_created')}
        </Text>
        <Text style={styles.successContent}>
          {i18n.t('review.approve_account_noti')}
        </Text>
        <Button
          title={i18n.t('review.go_dashboard')}
          containerStyle={styles.nextButton}
          onPress={goToDashboard}
        />
      </>
    </AppModal>
  );
};

const ReviewDetails = () => {
  const {
    onPressComplete,
    finalDetails,
    showSuccessModal,
    goToDashboard,
    loading,
    accountType,
  } = useReviewDetailFacade();

  const {getTitleAccount} = useConstants();
  return (
    <Screen loading={loading} loadingColor={Colors.white}>
      <>
        <TradingHeader />
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrolView}>
            <Text style={styles.accountType}>
              {getTitleAccount(accountType)}
            </Text>
            <Text style={styles.title}>{i18n.t('review.review_details')}</Text>
            {finalDetails &&
              finalDetails?.map?.((infoGroup: BlockItem, index: number) =>
                infoGroup ? (
                  <InfoGroup
                    key={`group${infoGroup?.infoName}`}
                    dataInfo={infoGroup}
                    indexOrder={index}
                  />
                ) : null,
              )}
          </ScrollView>
          <Button
            title={i18n.t('review.complete')}
            containerStyle={styles.nextButton}
            onPress={onPressComplete}
          />
        </View>
        <TradingAccountCreated
          isVisible={showSuccessModal}
          goToDashboard={goToDashboard}
        />
      </>
    </Screen>
  );
};

export default ReviewDetails;
