import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {PasswordInputRef} from 'components/PasswordInput';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {validEmail, validPassword} from 'utils/commonHelpers';
import {resendOtp, signUpAction, verifyCodeAction} from './action';
import {ERROR_CODE, VERIFY_CODE_TYPE} from 'config/constants';
import {hideMessage, showMessage} from 'react-native-flash-message';
import i18n from 'utils/LocalizedStrings';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {requestVerifyCodeFailure, resetSignUpData} from './slice';
import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

const useSignUpFacade = () => {
  const [isShowOtp, setIsShowOtp] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const dispatch = useDispatch();
  const emailRef = useRef<InputRef>(null);
  const nameRef = useRef<InputRef>(null);
  const numberRef = useRef<InputRef>(null);
  const passwordRef = useRef<PasswordInputRef>(null);
  const rePasswordRef = useRef<PasswordInputRef>(null);
  const [isShowRequireRule, setIsShowRequireRule] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [showForgotModal, setShowForgotModal] = useState<boolean>(false);
  const userEmail = useRef<string>('');

  const userInfo = useGlobalState(state => state.app?.userInfo);
  const {isSignUpSuccess, loading, error} = useGlobalState(
    state => state.signUp,
  );

  const goToSignIn = useCallback(() => {
    hideMessage();
    navigation.navigate(SCREENS.LOGIN);
  }, [navigation]);

  const onPressForgotPassword = useCallback(() => {
    hideMessage();
    navigation.navigate(SCREENS.FORGOT_PASSWORD);
  }, [navigation]);

  useEffect(() => {
    if (error) {
      dispatch(requestVerifyCodeFailure(null));
      if (error?.errorCode === ERROR_CODE.ALREADY_EXIST) {
        const content = (
          <Text>
            {i18n.t('error_message.error_001')}
            <Text style={styles.highlightText} onPress={goToSignIn}>
              {i18n.t('login.login')}
            </Text>

            {i18n.t('error_message.or')}
            <Text style={styles.highlightText} onPress={onPressForgotPassword}>
              {i18n.t('error_message.recover_password')}
            </Text>
            {i18n.t('error_message.instead')}
          </Text>
        );
        showMessage({
          message: content,
          autoHide: false,
        });
      } else {
        showMessage({
          message: error?.message ?? i18n.t('app.default_message'),
        });
      }
    }
  }, [error, goToSignIn, onPressForgotPassword, dispatch]);

  useEffect(() => {
    if (isSignUpSuccess) {
      setIsShowOtp(true);
      setPassword('');
      setPasswordConfirm('');
    }
  }, [isSignUpSuccess]);

  const onBackdropPress = useCallback(() => {
    setCode('');
    setIsShowOtp(false);
  }, []);

  useEffect(() => {
    if (userInfo) {
      onBackdropPress();
      navigation.navigate(SCREENS.ONBOARDING);
    }
  }, [navigation, onBackdropPress, userInfo, dispatch]);

  const onResetData = useCallback(() => {
    dispatch(resetSignUpData());
  }, [dispatch]);

  const onChangeCode = useCallback((value: string) => {
    setCode(value);
  }, []);

  const onPressContinue = useCallback(() => {
    if (validEmail(email) && validPassword(password)) {
      userEmail.current = email;
      const params = {
        email,
        password: password,
        name,
        numberPhone: number,
      };
      dispatch(signUpAction(params));
    } else {
      emailRef.current?.onValidateValue(email);
      passwordRef.current?.onValidateValue(password);
      numberRef.current?.onValidateValue(number);
      nameRef.current?.onValidateValue(name);
      rePasswordRef.current?.onValidateValue(passwordConfirm);
    }
  }, [email, password, number, passwordConfirm, name, dispatch]);

  const onValidateConfirmPassword = useCallback(
    rePassword => {
      if (rePassword === password) {
        return true;
      } else {
        return false;
      }
    },
    [password],
  );

  const onValidateEmptyFeild = useCallback(value => {
    return !!value;
  }, []);

  const onValidatePassword = useCallback((value): boolean => {
    const isValid = validPassword(value);
    if (!isValid) {
      setIsShowRequireRule(true);
    }
    return isValid;
  }, []);

  const onPressOtpContinue = useCallback(() => {
    const params = {
      verifyCode: code,
      type: VERIFY_CODE_TYPE.SIGN_UP,
    };

    dispatch(verifyCodeAction(params));
  }, [dispatch, code]);

  const onResendOtp = useCallback(() => {
    dispatch(
      resendOtp({email: userEmail.current, type: VERIFY_CODE_TYPE.SIGN_UP}),
    );
    setCode('');
  }, [dispatch]);

  const hideForgotPasswordModal = useCallback(() => {
    setShowForgotModal(false);
  }, []);

  return {
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
    error,
    showForgotModal,
    onPressForgotPassword,
    hideForgotPasswordModal,
    onResetData,
  };
};

export default useSignUpFacade;
