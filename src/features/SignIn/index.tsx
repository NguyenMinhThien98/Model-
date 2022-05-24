import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Screen from 'components/Screen';
import {isIos, validEmail, validPassword} from 'utils/commonHelpers';
import Input from 'components/Input';
import PasswordInput from 'components/PasswordInput';
import i18n from 'utils/LocalizedStrings';
import Button from 'components/Button';
import useSignInFacade from './hooks';
import CheckBox from 'components/CheckBox';
import {Colors} from 'assets/colors';
import {Images} from 'assets/images';

export const SignIn = ({navigation}) => {
  const {
    onPressContinue,
    email,
    setEmail,
    password,
    setPassword,
    emailRef,
    passwordRef,
    isRemember,
    onCheckRemember,
    onPressForgotPassword,
    loading,
    goToRegister,
    onResetData,
  } = useSignInFacade();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      onResetData();
    });

    return unsubscribe;
  }, [navigation, onResetData]);

  return (
    <Screen loadingColor={Colors.white}>
      <>
        <View style={styles.topView}>
          <Image source={Images.app_logo} />
          <Text style={styles.largeText}>{i18n.t('splash.invest')}</Text>
        </View>
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
                <Text style={styles.titleText}>{i18n.t('login.login')}</Text>
                <TouchableOpacity onPress={goToRegister}>
                  <Text style={styles.noAccount}>
                    {i18n.t('login.no_account')}
                  </Text>
                </TouchableOpacity>
              </View>
              <Input
                placeholder={i18n.t('sign_up.email')}
                containerStyle={styles.inputStyle}
                value={email}
                onChangeText={setEmail}
                onValidate={validEmail}
                errorMessage={i18n.t('sign_up_validate.please_email')}
                ref={emailRef}
              />
              <PasswordInput
                ref={passwordRef}
                placeholder={i18n.t('sign_up.password')}
                containerStyle={styles.inputStyle}
                value={password}
                onChangeText={setPassword}
                onValidate={validPassword}
                errorMessage={i18n.t('sign_up_validate.please_password')}
              />
              <View style={styles.forgotContainer}>
                <CheckBox
                  title={i18n.t('login.remember_me')}
                  isChecked={isRemember}
                  onPress={onCheckRemember}
                />
                <TouchableOpacity onPress={onPressForgotPassword}>
                  <Text style={styles.noAccount}>
                    {i18n.t('login.forgot_password')}
                  </Text>
                </TouchableOpacity>
              </View>
              <Button
                title={i18n.t('sign_up.continue')}
                onPress={onPressContinue}
                loading={loading}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </>
    </Screen>
  );
};
