import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from 'redux/store';
import i18n from 'utils/LocalizedStrings';
import {getAccountInfoAction} from '../action';

const useMyProfileFacade = () => {
  const user = useSelector((state: GlobalState) => state.account.accountInfo);
  const {loading, errorGetInfo} = useSelector(
    (state: GlobalState) => state.account,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(getAccountInfoAction());
  }, [dispatch]);

  useEffect(() => {
    if (errorGetInfo) {
      showMessage({
        message: errorGetInfo?.message ?? i18n.t('error_message.unknown_error'),
      });
    }
  }, [errorGetInfo]);

  const onEditEmail = () => {
    navigation.navigate(SCREENS.EDIT_EMAIL);
  };

  const onEditPhone = () => {
    navigation.navigate(SCREENS.EDIT_PHONE);
  };

  const onEditResidential = () => {
    navigation.navigate(SCREENS.EDIT_RESIDENTIAL);
  };

  return {
    user,
    loading,
    onEditEmail,
    onEditPhone,
    onEditResidential,
  };
};
export default useMyProfileFacade;
