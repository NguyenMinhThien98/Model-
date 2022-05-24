import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import SimpleHeader from 'components/SimpleHeader';
import i18n from 'utils/LocalizedStrings';
import {Images} from 'assets/images';
import globalStyles from 'assets/globalStyles';
import styles from './styles';
import useEditEmailOTPFacade from './hook';
import OtpInput from 'components/OtpInput';

type Props = {
  route?: any;
};

const EditEmailOTP = ({route}: Props) => {
  const {otp, email, setOtp} = useEditEmailOTPFacade(route);
  return (
    <View style={styles.main}>
      <SafeAreaView style={globalStyles.flexOne}>
        <SimpleHeader
          headerText={i18n.t('editEmail.header')}
          leftIcon={Images.ic_arrow_back_header}
        />
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            {`${i18n.t('editEmail.descriptionOtp')} ${email}`}
          </Text>
          <View style={styles.otpContainer}>
            <OtpInput
              onChangeText={setOtp}
              value={otp}
              customCellStyles={styles.otpCell}
              customFocusCellStyles={styles.focusCell}
              autoFocus
            />
          </View>
          <View style={styles.resendOtp}>
            <Text style={styles.didntReceiveTxt}>
              {i18n.t('editEmail.didntReceive')}
            </Text>
            <TouchableOpacity>
              <Text style={styles.resendTxt}>
                {i18n.t('editEmail.clickToResend')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomArea} />
    </View>
  );
};
export default EditEmailOTP;
