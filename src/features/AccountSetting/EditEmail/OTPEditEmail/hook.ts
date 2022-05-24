import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {updateEmailAction} from 'features/AccountSetting/action';
import {
  resetUpdateEmail,
  updateAccountInfoField,
} from 'features/AccountSetting/slice';

import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from 'redux/store';
import i18n from 'utils/LocalizedStrings';

const useEditEmailOTPFacade = (route?: any) => {
  const [otp, setOtp] = useState('');
  const email = route?.params?.email;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const {isUpdateEmailSuccess} = useSelector(
    (state: GlobalState) => state.account,
  );

  useEffect(() => {
    if (otp.length === 6) {
      const data = {
        code: otp,
        email: email,
      };
      dispatch(updateEmailAction(data));
    }
  }, [otp]);

  useEffect(() => {
    if (isUpdateEmailSuccess) {
      navigation.navigate(SCREENS.MY_PROFILE);
      showMessage({
        message: i18n.t('editEmail.updateSuccess'),
        type: 'success',
      });
      dispatch(updateAccountInfoField({field: 'email', value: email}));
      dispatch(resetUpdateEmail());
    }
  }, [isUpdateEmailSuccess, dispatch, email, navigation]);

  return {
    otp,
    email,
    setOtp,
  };
};
export default useEditEmailOTPFacade;
