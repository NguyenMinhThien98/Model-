import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {verifyUpdateEmail} from 'features/AccountSetting/action';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from 'redux/store';
import {validEmail} from 'utils/commonHelpers';

const useEditEmailFacade = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const currentEmail = useSelector(
    (state: GlobalState) => state?.account?.accountInfo?.email,
  );
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const emailRef = useRef<InputRef>(null);

  const onClearEmail = () => {
    setEmail('');
  };

  const onGoToOTP = () => {
    if (isValidEmail) {
      const data = {
        email,
      };
      dispatch(verifyUpdateEmail(data));
      navigation.navigate(SCREENS.EDIT_EMAIL_OTP, {email: email});
    } else {
      emailRef.current?.onValidateValue(email);
    }
  };

  useEffect(() => {
    setEmail(currentEmail);
  }, [currentEmail]);

  useEffect(() => {
    setIsValidEmail(validEmail(email));
  }, [email]);

  return {
    email,
    setEmail,
    onClearEmail,
    onGoToOTP,
    isValidEmail,
    emailRef,
  };
};
export default useEditEmailFacade;
