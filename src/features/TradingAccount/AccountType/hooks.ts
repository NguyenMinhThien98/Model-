import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Images} from 'assets/images';
import {ACCOUNT_TYPE} from 'config/constants';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import i18n from 'utils/LocalizedStrings';
import {resetDoneScreen, updateAccountType} from '../slide';

const useAccountTypeFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [typeSelected, setTypeSelected] = useState(ACCOUNT_TYPE.PERSONAL);
  const dispatch = useDispatch();

  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);

  const onSelectType = useCallback(type => {
    setTypeSelected(type);
  }, []);

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.ACCOUNT_TYPE && typeSelected) {
      switch (typeSelected) {
        case ACCOUNT_TYPE.PERSONAL:
        case ACCOUNT_TYPE.COMPANY:
        case ACCOUNT_TYPE.CORPORATE_TRUST:
          navigation.navigate(SCREENS.PERSONAL_DETAILS, {isEdit: false});
          break;
      }
    }
  }, [doneScreen, navigation, typeSelected, dispatch]);

  const onPressNext = useCallback(() => {
    dispatch(
      updateAccountType({data: typeSelected, screen: SCREENS.ACCOUNT_TYPE}),
    );
  }, [typeSelected, dispatch]);

  const accountTypeList = [
    {
      title: i18n.t('account_type.personal_account'),
      description: i18n.t('account_type.personal_des'),
      type: ACCOUNT_TYPE.PERSONAL,
      activeIcon: Images.ic_personal_active,
      inActiveIcon: Images.ic_personal_inactive,
    },
    {
      title: i18n.t('account_type.joint_account'),
      description: i18n.t('account_type.joint_des'),
      type: ACCOUNT_TYPE.JOINT_ACCOUNT,
      activeIcon: Images.ic_joint_active,
      inActiveIcon: Images.ic_joint_inactive,
    },
    {
      title: i18n.t('account_type.company'),
      description: i18n.t('account_type.company_des'),
      type: ACCOUNT_TYPE.COMPANY,
      activeIcon: Images.ic_company_active,
      inActiveIcon: Images.ic_company_inactive,
    },
    {
      title: i18n.t('account_type.individual'),
      description: i18n.t('account_type.individual_des'),
      type: ACCOUNT_TYPE.INDIVIDUAL_TRUST,
      activeIcon: Images.ic_individual_active,
      inActiveIcon: Images.ic_individual_inactive,
    },
    {
      title: i18n.t('account_type.corporate'),
      description: i18n.t('account_type.corporate_des'),
      type: ACCOUNT_TYPE.CORPORATE_TRUST,
      activeIcon: Images.ic_corporate_active,
      inActiveIcon: Images.ic_corporate_inactive,
    },
  ];

  return {
    typeSelected,
    onSelectType,
    accountTypeList,
    onPressNext,
  };
};

export default useAccountTypeFacade;
