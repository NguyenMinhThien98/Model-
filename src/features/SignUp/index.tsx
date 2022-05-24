import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Screen from 'components/Screen';
import {isIos, validEmail} from 'utils/commonHelpers';
import Input from 'components/Input';
import PasswordInput from 'components/PasswordInput';
import i18n from 'utils/LocalizedStrings';
import useSignUpFacade from './hooks';
import Button from 'components/Button';
import AppModal from 'components/Modal';
import OtpComponent from '../../components/OtpComponent';
import PasswordValidation from 'components/PasswordValidation';

export const SignUp = ({navigation}) => {
  const {
    onPressContinue,
    isShowOtp,
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    emailRef,
    passwordRef,
    isShowRequireRule,
    onValidatePassword,
    code,
    onChangeCode,
    onBackdropPress,
    onPressOtpContinue,
    onValidateConfirmPassword,
    onValidateEmptyFeild,
    nameRef,
    numberRef,
    rePasswordRef,
    loading,
    goToSignIn,
    onResendOtp,
    onResetData,
  } = useSignUpFacade();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      onResetData();
    });

    return unsubscribe;
  }, [navigation, onResetData]);

  return (
    <Screen loading={loading}>
      <>
        <KeyboardAvoidingView
          style={styles.body}
          behavior={isIos ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container} />

            <View style={styles.subContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                  {i18n.t('sign_up.sign_up')}
                </Text>
                <TouchableOpacity onPress={goToSignIn}>
                  <Text style={styles.haveAccount}>
                    {i18n.t('sign_up.have_account')}
                  </Text>
                </TouchableOpacity>
              </View>
              <Input
                placeholder={i18n.t('sign_up.name')}
                containerStyle={styles.inputStyle}
                value={name}
                onChangeText={setName}
                onValidate={onValidateEmptyFeild}
                errorMessage={i18n.t('sign_up_validate.please_name')}
                ref={nameRef}
              />
              <Input
                placeholder={i18n.t('sign_up.email')}
                containerStyle={styles.inputStyle}
                value={email}
                onChangeText={setEmail}
                onValidate={validEmail}
                errorMessage={i18n.t('sign_up_validate.please_email')}
                ref={emailRef}
              />
              <Input
                placeholder={i18n.t('sign_up.number')}
                containerStyle={styles.inputStyle}
                value={number}
                onChangeText={setNumber}
                keyboardType="number-pad"
                onValidate={onValidateEmptyFeild}
                errorMessage={i18n.t('sign_up_validate.please_number')}
                ref={numberRef}
              />
              <PasswordInput
                ref={passwordRef}
                placeholder={i18n.t('sign_up.password')}
                containerStyle={styles.inputStyle}
                value={password}
                onChangeText={setPassword}
                onValidate={onValidatePassword}
                errorMessage={i18n.t('sign_up_validate.please_password')}
              />
              <PasswordInput
                placeholder={i18n.t('sign_up.re_password')}
                containerStyle={styles.inputStyle}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                onValidate={onValidateConfirmPassword}
                errorMessage={i18n.t('sign_up_validate.password_not_match')}
                ref={rePasswordRef}
              />
              {isShowRequireRule && (
                <PasswordValidation
                  containerStyle={styles.validateContainer}
                  password={password}
                  passwordConfirm={passwordConfirm}
                />
              )}
              <Text style={styles.agreeTerm}>
                {`${i18n.t('sign_up.agree_term1')} `}
                <Text style={styles.primaryText}>
                  {i18n.t('sign_up.agree_term2')}
                </Text>
              </Text>
              <Button
                title={i18n.t('sign_up.continue')}
                onPress={onPressContinue}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <AppModal
          modalVisible={isShowOtp}
          onBackdropPress={onBackdropPress}
          loading={loading}>
          <>
            <OtpComponent
              value={code}
              onChangeText={onChangeCode}
              onPressButton={onPressOtpContinue}
              onResend={onResendOtp}
            />
          </>
        </AppModal>
      </>
    </Screen>
  );
};
