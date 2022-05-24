import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {
  DEFAULT_COUNTRY,
  TAX_EXEMPTION_CODE,
  ID_TYPE,
  ISSUE_STATE,
  TIN_EXEMPTION_CODE,
} from 'config/constants';
import {
  RootRouteProps,
  RootStackParamList,
  SCREENS,
} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {formatBirthDate} from 'utils/datetime';
import i18n from 'utils/LocalizedStrings';
import {resetDoneScreen, updateAccountData} from '../slide';

const useIdentificationFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState({
    isTaxResident: true,
    tfn: '',
    isTaxExemption: false,
    identificationType: {
      label: i18n.t('identification.driver_license'),
      value: ID_TYPE.DRIVERS_LICENSE,
    },
    licenseNumber: '',
    passportNumber: '',
    expiryDate: undefined,
    stateOfIssue: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    country: DEFAULT_COUNTRY,
    countryOfBirth: DEFAULT_COUNTRY,
    townOfBirth: '',
    isHaveTin: true,
    tin: '',
    tfnExemptionCode: {
      label: i18n.t('tax_exemption_reason.alphabetical'),
      value: TAX_EXEMPTION_CODE.ALPHABETIC_OR_MORE_THAN_11_CHARS,
    },
    tinExemptionCode: {
      label: i18n.t('tin_reason.not_issued'),
      value: TIN_EXEMPTION_CODE.NOT_ISSUED,
    },
  });
  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);
  const route = useRoute<RootRouteProps<SCREENS.IDENTIFICATION>>();
  const dispatch = useDispatch();

  const TFNRef = useRef<InputRef>(null);
  const birthTownRef = useRef<InputRef>(null);
  const TINRef = useRef<InputRef>(null);
  const licenseRef = useRef<InputRef>(null);
  const passportRef = useRef<InputRef>(null);
  const expiryDateRef = useRef<InputRef>(null);

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.IDENTIFICATION) {
      if (route.params?.isEdit) {
        navigation.navigate(SCREENS.REVIEW_DETAILS);
      } else {
        navigation.navigate(SCREENS.ADDRESS, {isEdit: false});
      }
    }
  }, [doneScreen, navigation, route, dispatch]);

  useEffect(() => {
    if (accountData && accountData.identificationType) {
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
    let isValid: boolean | undefined = true;
    if (value.isTaxResident) {
      isValid = TFNRef.current?.onValidateValue(value.tfn) && isValid;
    } else {
      isValid =
        birthTownRef.current?.onValidateValue(value.townOfBirth) && isValid;
    }

    if (value.identificationType.value === ID_TYPE.DRIVERS_LICENSE) {
      isValid =
        licenseRef.current?.onValidateValue(value.licenseNumber) && isValid;
      isValid =
        expiryDateRef.current?.onValidateValue(
          formatBirthDate(value.expiryDate),
        ) && isValid;
    } else {
      isValid =
        passportRef.current?.onValidateValue(value.passportNumber) && isValid;
    }

    if (!value.isTaxResident && value.isHaveTin) {
      isValid = TINRef.current?.onValidateValue(value.tin) && isValid;
    }

    if (isValid) {
      dispatch(
        updateAccountData({
          data: {
            ...accountData,
            ...value,
          },
          screen: SCREENS.IDENTIFICATION,
        }),
      );
    }
  }, [accountData, dispatch, value]);

  return {
    onPressNext,
    value,
    onChangeValue,
    TFNRef,
    birthTownRef,
    TINRef,
    licenseRef,
    passportRef,
    expiryDateRef,
    accountType,
    onValidateFeild,
  };
};

export default useIdentificationFacade;
