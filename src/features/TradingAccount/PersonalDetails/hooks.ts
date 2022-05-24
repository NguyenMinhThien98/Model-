import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {ACCOUNT_TYPE, FUNDING_SOURCE, OCCUPATION_TYPE} from 'config/constants';
import {
  RootRouteProps,
  RootStackParamList,
  SCREENS,
} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {validEmail} from 'utils/commonHelpers';
import {formatBirthDate} from 'utils/datetime';
import i18n from 'utils/LocalizedStrings';
import {resetDoneScreen, updateAccountData} from '../slide';

const usePersonalDetailsFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RootRouteProps<SCREENS.PERSONAL_DETAILS>>();
  const [value, setValue] = useState({
    title: {
      label: i18n.t('personal_account.mr'),
      value: ACCOUNT_TYPE.MR,
    },
    firstName: '',
    lastName: '',
    middleName: '',
    alternateName: '',
    mobilePhone: '',
    email: '',
    occupationType: {
      label: i18n.t('occupation_type.professional'),
      value: OCCUPATION_TYPE.PROFESSIONAL,
    },
    sourceOfFunds: {
      label: i18n.t('funding_source.savings'),
      value: FUNDING_SOURCE.SAVINGS,
    },
    dateOfBirth: undefined,
  });

  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const mobilePhoneRef = useRef<InputRef>(null);
  const birthDateRef = useRef<InputRef>(null);

  const dispatch = useDispatch();

  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.PERSONAL_DETAILS) {
      if (route.params?.isEdit) {
        navigation.navigate(SCREENS.REVIEW_DETAILS);
      } else {
        navigation.navigate(SCREENS.IDENTIFICATION, {isEdit: false});
      }
    }
  }, [doneScreen, navigation, route, dispatch]);

  useEffect(() => {
    if (accountData && accountData.title) {
      setValue(accountData);
    }
  }, [accountData]);

  const onChangeValue = useCallback((text: any, key: string) => {
    setValue(preValue => {
      const newValue = {...preValue};
      newValue[key] = text;
      return newValue;
    });
  }, []);

  const onValidateFeild = useCallback((data): boolean => {
    if (!data || (typeof data === 'string' && !data.trim())) {
      return false;
    } else {
      return true;
    }
  }, []);

  const onPressNext = useCallback(() => {
    emailRef.current?.onValidateValue(value.email);
    let isValid = firstNameRef.current?.onValidateValue(value.firstName);
    isValid = lastNameRef.current?.onValidateValue(value.lastName) && isValid;
    isValid =
      mobilePhoneRef.current?.onValidateValue(value.mobilePhone) && isValid;
    isValid =
      birthDateRef.current?.onValidateValue(
        formatBirthDate(value.dateOfBirth),
      ) && isValid;

    isValid = validEmail(value.email) && isValid;

    if (isValid) {
      dispatch(
        updateAccountData({
          data: {
            ...accountData,
            ...value,
          },
          screen: SCREENS.PERSONAL_DETAILS,
        }),
      );
    }
  }, [accountData, dispatch, value]);

  return {
    onPressNext,
    value,
    onChangeValue,
    firstNameRef,
    lastNameRef,
    mobilePhoneRef,
    emailRef,
    birthDateRef,
    accountType,
    onValidateFeild,
  };
};

export default usePersonalDetailsFacade;
