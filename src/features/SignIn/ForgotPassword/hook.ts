import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PasswordInputRef} from 'components/PasswordInput';
import {ERROR_CODE, VERIFY_CODE_TYPE} from 'config/constants';
import {RootStackParamList} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useRef, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {validPassword} from 'utils/commonHelpers';
import i18n from 'utils/LocalizedStrings';
import {
  forgotPasswordAction,
  resendOtpForgotAction,
  resetPasswordAction,
  verifyForgotPasswordAction,
} from '../action';
import {requestSignInFailure, updateStepNumber} from '../slice';

const useForgotPasswordFacade = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const passwordRef = useRef<PasswordInputRef>(null);
  const rePasswordRef = useRef<PasswordInputRef>(null);
  const dispatch = useDispatch();

  const {loading, error, stepNumber} = useGlobalState(state => state.signIn);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const backdropPress = useCallback(() => {
    dispatch(updateStepNumber(1));
    navigation.goBack();
  }, [dispatch, navigation]);

  useEffect(() => {
    if (error) {
      dispatch(requestSignInFailure(null));
      if (error?.errorCode === ERROR_CODE.USER_DOSE_NOT_EXIST) {
        showMessage({
          message: i18n.t('error_message.error_003'),
        });
      } else {
        showMessage({
          message: error?.message ?? i18n.t('app.default_message'),
        });
      }
    }
  }, [error, dispatch]);

  const onPressBack = useCallback(() => {
    if (stepNumber === 1) {
      backdropPress();
    } else {
      dispatch(updateStepNumber(stepNumber - 1));
    }
  }, [stepNumber, dispatch, backdropPress]);

  const onValidateConfirmPassword = useCallback(
    confirmPass => {
      if (confirmPass === newPassword) {
        return true;
      } else {
        return false;
      }
    },
    [newPassword],
  );

  const onForgotPassword = useCallback(() => {
    dispatch(forgotPasswordAction({email}));
  }, [dispatch, email]);

  const onResendOtp = useCallback(() => {
    setCode('');
    dispatch(
      resendOtpForgotAction({email, type: VERIFY_CODE_TYPE.FORGOT_PASSWORD}),
    );
  }, [dispatch, email]);

  const onVerifyOtp = useCallback(() => {
    setCode('');
    dispatch(
      verifyForgotPasswordAction({
        verifyCode: code,
        type: VERIFY_CODE_TYPE.FORGOT_PASSWORD,
      }),
    );
  }, [dispatch, code]);

  const onResetPassword = useCallback(() => {
    dispatch(resetPasswordAction({password: newPassword}));
  }, [dispatch, newPassword]);

  const onPressNext = useCallback(() => {
    switch (stepNumber) {
      case 1:
        onForgotPassword();
        break;
      case 2:
        onVerifyOtp();
        break;
      case 3:
        if (
          validPassword(newPassword) &&
          onValidateConfirmPassword(rePassword)
        ) {
          onResetPassword();
        } else {
          passwordRef.current?.onValidateValue(newPassword);
          rePasswordRef.current?.onValidateValue(rePassword);
        }
        break;
      case 4:
        backdropPress();
        break;
    }
  }, [
    stepNumber,
    backdropPress,
    newPassword,
    rePassword,
    onValidateConfirmPassword,
    onForgotPassword,
    onVerifyOtp,
    onResetPassword,
  ]);

  const updateStep = useCallback(() => {
    dispatch(updateStepNumber(1));
  }, [dispatch]);

  return {
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
  };
};

export default useForgotPasswordFacade;
