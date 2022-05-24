import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {verifyUpdatePhoneAction} from 'features/AccountSetting/action';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from 'redux/store';

const useEditPhoneFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const currentPhone = useSelector(
    (state: GlobalState) => state?.account.accountInfo?.number_phone,
  );
  const [phone, setPhone] = useState<string>('');
  const [isValidPhone, setIsValidPhone] = useState<boolean>(false);
  const phoneRef = useRef<InputRef>(null);
  const dispatch = useDispatch();

  const onClearPhone = () => {
    setPhone('');
  };

  const onGoToOTP = () => {
    if (isValidPhone) {
      const data = {numberPhone: phone};
      dispatch(verifyUpdatePhoneAction(data));
      navigation.navigate(SCREENS.EDIT_PHONE_OTP, {phone});
    } else {
      phoneRef.current?.onValidateValue(phone);
    }
  };

  useEffect(() => {
    setPhone(currentPhone);
  }, [currentPhone]);

  useEffect(() => {
    setIsValidPhone(phone?.length > 0);
  }, [phone]);

  return {
    phone,
    setPhone,
    onClearPhone,
    onGoToOTP,
    isValidPhone,
    phoneRef,
  };
};
export default useEditPhoneFacade;
