import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {ACCOUNT_TYPE, ISSUE_STATE} from 'config/constants';
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

const useAddressFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState({
    state: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    unitNumber: '',
    streetNumber: '',
    streetNameOne: '',
    suburb: '',
    postcode: '',
    mailingState: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    mailingUnitNumber: '',
    mailingStreetNumber: '',
    mailingStreetNameOne: '',
    mailingSuburb: '',
    mailingPostcode: '',
    isHaveMoveAddress: false,
    isSameResidentialAddress: false,
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

  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);
  const dispatch = useDispatch();
  const route = useRoute<RootRouteProps<SCREENS.ADDRESS>>();

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.ADDRESS) {
      if (route?.params?.isEdit) {
        navigation.navigate(SCREENS.REVIEW_DETAILS);
        return;
      }

      switch (accountType) {
        case ACCOUNT_TYPE.PERSONAL:
          navigation.navigate(SCREENS.ADDITIONAL_DETAILS);
          break;
        case ACCOUNT_TYPE.COMPANY:
          navigation.navigate(SCREENS.COMPANY_DETAILS, {isEdit: false});
          break;
        case ACCOUNT_TYPE.CORPORATE_TRUST:
          navigation.navigate(SCREENS.TRUST_DETAILS, {isEdit: false});
          break;
        default:
          break;
      }
    }
  }, [doneScreen, navigation, accountType, dispatch, route]);

  useEffect(() => {
    if (accountData && accountData.state) {
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
    let isValid = unitNumberRef.current?.onValidateValue(value.unitNumber);
    isValid =
      streetNumberRef.current?.onValidateValue(value.streetNumber) && isValid;
    isValid =
      streetNameRef.current?.onValidateValue(value.streetNameOne) && isValid;
    isValid = suburbRef.current?.onValidateValue(value.suburb) && isValid;
    isValid = postCodeRef.current?.onValidateValue(value.postcode) && isValid;
    isValid =
      mailingUnitNumberRef.current?.onValidateValue(value.mailingUnitNumber) &&
      isValid;
    isValid =
      mailingStreetNumberRef.current?.onValidateValue(
        value.mailingStreetNumber,
      ) && isValid;
    isValid =
      mailingStreetNameRef.current?.onValidateValue(
        value.mailingStreetNameOne,
      ) && isValid;
    isValid =
      mailingPostCodeRef.current?.onValidateValue(value.mailingPostcode) &&
      isValid;
    isValid =
      mailingSuburbRef.current?.onValidateValue(value.mailingSuburb) && isValid;

    if (isValid) {
      dispatch(
        updateAccountData({
          data: {
            ...accountData,
            ...value,
          },
          screen: SCREENS.ADDRESS,
        }),
      );
    }
  }, [accountData, dispatch, value]);

  const onPressCheckBox = useCallback(() => {
    onChangeValue(!value.isSameResidentialAddress, 'isSameResidentialAddress');
  }, [onChangeValue, value.isSameResidentialAddress]);

  useEffect(() => {
    if (value.isSameResidentialAddress) {
      setValue(preValue => {
        const newValue = {
          ...preValue,
          mailingState: preValue.state,
          mailingUnitNumber: preValue.unitNumber,
          mailingStreetNumber: preValue.streetNumber,
          mailingStreetNameOne: preValue.streetNameOne,
          mailingSuburb: preValue.suburb,
          mailingPostcode: preValue.postcode,
        };
        return newValue;
      });
      mailingUnitNumberRef.current?.onValidateValue(value.unitNumber);
      mailingStreetNumberRef.current?.onValidateValue(value.streetNumber);
      mailingStreetNameRef.current?.onValidateValue(value.streetNameOne);
      mailingPostCodeRef.current?.onValidateValue(value.postcode);
      mailingSuburbRef.current?.onValidateValue(value.suburb);
    }
  }, [value.isSameResidentialAddress]);

  return {
    onPressNext,
    value,
    onChangeValue,
    onPressCheckBox,
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
  };
};

export default useAddressFacade;
