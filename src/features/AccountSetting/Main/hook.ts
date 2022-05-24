import {Images} from 'assets/images';
import {t} from 'i18next';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {logoutApp} from 'app/slice';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

const UserType = {
  SET_UP: 'SET_UP',
  TRANSFER: 'TRANSFER',
};

type AccountSettingSection = {
  id: number;
  icon: Images;
  title: string;
  handlePress: () => void;
};

const useDashboardFacade = () => {
  const userType = UserType.TRANSFER;

  const isSetupUser = userType === UserType.SET_UP;
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onLogoutApp = useCallback(() => {
    dispatch(logoutApp());
  }, [dispatch]);

  const onGoToMyProfile = () => {
    navigation.navigate(SCREENS.MY_PROFILE);
  };

  const sections: AccountSettingSection[] = [
    {
      id: 1,
      icon: Images.ic_user_gradient,
      title: t('accountSettings.myProfile'),
      handlePress: () => {
        onGoToMyProfile();
      },
    },
    {
      id: 2,
      icon: Images.ic_notification_gradient,
      title: t('accountSettings.notificationSettings'),
      handlePress: () => {},
    },
    {
      id: 3,
      icon: Images.ic_funds_gradient,
      title: t('accountSettings.funds'),
      handlePress: () => {},
    },
    {
      id: 4,
      icon: Images.ic_orders_gradient,
      title: 'Orders',
      handlePress: () => {},
    },
    {
      id: 5,
      icon: Images.ic_security_gradient,
      title: t('accountSettings.security'),
      handlePress: () => {},
    },
    {
      id: 6,
      icon: Images.ic_payment_gradient,
      title: t('accountSettings.payment'),
      handlePress: () => {},
    },
    {
      id: 7,
      icon: Images.ic_subscriptions_gradient,
      title: t('accountSettings.subscriptions'),
      handlePress: () => {},
    },
    {
      id: 8,
      icon: isSetupUser
        ? Images.ic_setup_account_gradient
        : Images.ic_transfer_gradient,
      title: isSetupUser ? t('t.setupAccount') : t('accountSettings.transfer'),
      handlePress: () => {},
    },
    {
      id: 9,
      icon: Images.ic_info_outline_gradient,
      title: t('accountSettings.howToUse'),
      handlePress: () => {},
    },
    {
      id: 10,
      icon: Images.ic_help_outline_gradient,
      title: t('accountSettings.helpAndSupport'),
      handlePress: () => {},
    },
    {
      id: 11,
      icon: Images.ic_user_gradient,
      title: t('accountSettings.logOut'),
      handlePress: () => {
        onLogoutApp();
      },
    },
  ];

  return {
    sections,
  };
};
export default useDashboardFacade;
