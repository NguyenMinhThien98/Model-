import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {PasswordInputRef} from 'components/PasswordInput';
import {useCallback, useEffect, useRef, useState} from 'react';
import {validEmail, validPassword} from 'utils/commonHelpers';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useDispatch} from 'react-redux';
import {logInAction} from './action';
import useGlobalState from 'redux/useGlobalState';
import {showMessage} from 'react-native-flash-message';
import i18n from 'utils/LocalizedStrings';
import {ERROR_CODE} from 'config/constants';
import {requestSignInFailure, resetSignInData} from './slice';

const useSignInFacade = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRemember, setIsRemember] = useState(false);
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<PasswordInputRef>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const {loading, error} = useGlobalState(state => state.signIn);

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

  const onPressContinue = useCallback(() => {
    if (validEmail(email) && validPassword(password)) {
      const payload = {
        params: {
          email,
          password: password,
        },
        isRemember,
      };
      dispatch(logInAction(payload));
    } else {
      emailRef.current?.onValidateValue(email);
      passwordRef.current?.onValidateValue(password);
    }
  }, [email, password, isRemember, dispatch]);

  const onCheckRemember = useCallback(() => {
    setIsRemember(preValue => !preValue);
  }, []);

  const onPressForgotPassword = useCallback(() => {
    navigation.navigate(SCREENS.FORGOT_PASSWORD);
  }, [navigation]);

  const goToRegister = useCallback(() => {
    navigation.navigate(SCREENS.SIGN_UP);
  }, [navigation]);

  const onResetData = useCallback(() => {
    dispatch(resetSignInData());
  }, [dispatch]);

  return {
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
  };
};

export default useSignInFacade;
