import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {COMPANY_ROLE, COMPANY_TYPE, ISSUE_STATE} from 'config/constants';
import {
  RootRouteProps,
  RootStackParamList,
  SCREENS,
} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import i18n from 'utils/LocalizedStrings';
import {resetDoneScreen, updateAccountData} from '../slide';

const useCompanyFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState({
    registeredOfficeState: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    companyRole: {
      label: i18n.t('company_account.director'),
      value: COMPANY_ROLE.DIRECTOR,
    },
    companyName: '',
    companyType: {
      label: i18n.t('company_type.private'),
      value: COMPANY_TYPE.PRIVATE,
    },
    companySectors: {value: 'OIL_GAS_DRILLING', label: 'Oil Gas Drilling'},
    acnNumber: '',
    abnNumber: '',
    dateOfIncorporation: undefined,
    tfnNumber: '',
    isTaxExemptionForCompany: false,
    registeredOfficeUnitNumber: '',
    registeredOfficeStreetNumber: '',
    registeredOfficeStreetNameOne: '',
    registeredOfficeSuburb: '',
    registeredOfficePostcode: '',
    businessUnitNumber: '',
    businessStreetNumber: '',
    businessStreetNameOne: '',
    businessSuburb: '',
    businessPostcode: '',
    businessState: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    isSameOfficeAddress: false,
  });

  const unitNumberRef = useRef<InputRef>(null);
  const streetNumberRef = useRef<InputRef>(null);
  const streetNameRef = useRef<InputRef>(null);
  const suburbRef = useRef<InputRef>(null);
  const postCodeRef = useRef<InputRef>(null);
  const mailingUnitNumberRef = useRef<InputRef>(null);
  const mailingStreetNumberRef = useRef<InputRef>(null);
  const mailingStreetNameRef = useRef<InputRef>(null);
  const mailingSuburbRef = useRef<InputRef>(null);
  const mailingPostCodeRef = useRef<InputRef>(null);
  const companyNameRef = useRef<InputRef>(null);
  const dateIncorporationRef = useRef<InputRef>(null);

  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);
  const dispatch = useDispatch();
  const route = useRoute<RootRouteProps<SCREENS.COMPANY_DETAILS>>();

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.COMPANY_DETAILS) {
      if (route?.params?.isEdit) {
        navigation.navigate(SCREENS.REVIEW_DETAILS);
      } else {
        navigation.navigate(SCREENS.ADDITIONAL_DETAILS);
      }
    }
  }, [doneScreen, navigation, dispatch, route]);

  useEffect(() => {
    if (accountData && accountData.registeredOfficeState) {
      setValue(accountData);
    }
  }, [accountData]);

  const resetDoneScreenValue = useCallback(() => {
    dispatch(resetDoneScreen());
  }, [dispatch]);

  const onChangeValue = useCallback((text: any, key: string) => {
    setValue(preValue => {
      const newValue = {...preValue};
      newValue[key] = text;
      return newValue;
    });
  }, []);

  const validateData = useCallback((ref, data) => {
    if (!data || (typeof data === 'string' && !data.trim())) {
      ref.current?.onShowError(true);
      return false;
    } else {
      ref.current?.onShowError(false);
      return true;
    }
  }, []);

  const onValidateFeild = useCallback((data): boolean => {
    if (!data || (typeof data === 'string' && !data.trim())) {
      return false;
    } else {
      return true;
    }
  }, []);

  const onPressNext = useCallback(() => {
    let isValid = validateData(unitNumberRef, value.registeredOfficeUnitNumber);
    isValid =
      validateData(streetNumberRef, value.registeredOfficeStreetNumber) &&
      isValid;
    isValid =
      validateData(streetNameRef, value.registeredOfficeStreetNameOne) &&
      isValid;
    isValid = validateData(suburbRef, value.registeredOfficeSuburb) && isValid;
    isValid =
      validateData(postCodeRef, value.registeredOfficePostcode) && isValid;
    isValid =
      validateData(mailingUnitNumberRef, value.businessUnitNumber) && isValid;
    isValid =
      validateData(mailingStreetNumberRef, value.businessStreetNumber) &&
      isValid;
    isValid =
      validateData(mailingStreetNameRef, value.businessStreetNameOne) &&
      isValid;
    isValid = validateData(mailingSuburbRef, value.businessSuburb) && isValid;
    isValid =
      validateData(mailingPostCodeRef, value.businessPostcode) && isValid;
    isValid = validateData(companyNameRef, value.companyName) && isValid;
    isValid =
      validateData(dateIncorporationRef, value.dateOfIncorporation) && isValid;

    if (isValid) {
      dispatch(
        updateAccountData({
          data: {
            ...accountData,
            ...value,
          },
          screen: SCREENS.COMPANY_DETAILS,
        }),
      );
    }
  }, [accountData, dispatch, value, validateData]);

  const onPressCheckBox = useCallback(() => {
    onChangeValue(!value.isSameOfficeAddress, 'isSameOfficeAddress');
  }, [onChangeValue, value.isSameOfficeAddress]);

  useEffect(() => {
    if (value.isSameOfficeAddress) {
      setValue(preValue => {
        const newValue = {
          ...preValue,
          businessState: preValue.registeredOfficeState,
          businessUnitNumber: preValue.registeredOfficeUnitNumber,
          businessStreetNumber: preValue.registeredOfficeUnitNumber,
          businessStreetNameOne: preValue.registeredOfficeStreetNameOne,
          businessPostcode: preValue.registeredOfficePostcode,
          businessSuburb: preValue.registeredOfficeSuburb,
        };
        return newValue;
      });
    }
  }, [value.isSameOfficeAddress]);

  return {
    onPressNext,
    value,
    onChangeValue,
    onPressCheckBox,
    resetDoneScreenValue,
    unitNumberRef,
    streetNumberRef,
    streetNameRef,
    suburbRef,
    postCodeRef,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    accountType,
    onValidateFeild,
    companyNameRef,
    dateIncorporationRef,
  };
};

export default useCompanyFacade;
