import React, {useCallback, useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import EmailForgotPassword from './Components/EmailForgotPassword';
import useForgotPasswordFacade from './hook';
import {Images} from 'assets/images';
import styles from './styles';
import Button from 'components/Button';
import i18n from 'utils/LocalizedStrings';
import OtpComponent from 'components/OtpComponent';
import ResetPassword from './Components/ResetPassword';
import Screen from 'components/Screen';

const ForgotPassword = ({navigation}) => {
  const {
    email,
    setEmail,
    stepNumber,
    onPressBack,
    code,
    setCode,
    onPressNext,
    newPassword,
    setNewPassword,
    rePassword,
    setRePassword,
    passwordRef,
    rePasswordRef,
    onResendOtp,
    loading,
    updateStep,
  } = useForgotPasswordFacade();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      updateStep();
    });

    return unsubscribe;
  }, [navigation, updateStep]);

  const renderBody = useCallback(() => {
    switch (stepNumber) {
      case 1:
        return <EmailForgotPassword email={email} onChangeEmail={setEmail} />;
      case 2:
        return (
          <OtpComponent
            value={code}
            onChangeText={setCode}
            title={i18n.t('login.enter_code')}
            subTitle={i18n.t('login.enter_code_note')}
            buttonTitle={i18n.t('login.next')}
            containerStyle={styles.otpStyle}
            onPressButton={onPressNext}
            onResend={onResendOtp}
          />
        );
      case 3:
        return (
          <ResetPassword
            newPassword={newPassword}
            rePassword={rePassword}
            onChangeNewPassword={setNewPassword}
            onChangeRePassword={setRePassword}
            passwordRef={passwordRef}
            rePasswordRef={rePasswordRef}
          />
        );
      case 4:
        return (
          <View>
            <Image source={Images.ic_success} style={styles.successIcon} />
            <Text style={styles.title}>
              {i18n.t('login.update_password_success')}
            </Text>
          </View>
        );
    }
  }, [
    stepNumber,
    email,
    setEmail,
    setCode,
    code,
    onPressNext,
    newPassword,
    rePassword,
    setNewPassword,
    setRePassword,
    passwordRef,
    rePasswordRef,
    onResendOtp,
  ]);

  return (
    <Screen backgroundColor="rgba(0, 17, 51, 0.7)" loading={loading}>
      <ScrollView contentContainerStyle={styles.contentScroll}>
        <View style={styles.container}>
          {stepNumber !== 4 && (
            <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
              <Image
                source={
                  stepNumber === 1 ? Images.ic_close : Images.ic_arrow_back
                }
                style={[styles.icon, stepNumber === 1 && styles.closeIcon]}
              />
            </TouchableOpacity>
          )}

          {renderBody()}
          {stepNumber !== 2 && (
            <Button
              title={i18n.t(
                stepNumber === 4 ? 'login.back_login' : 'login.next',
              )}
              onPress={onPressNext}
            />
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ForgotPassword;
