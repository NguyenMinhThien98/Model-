import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {InputRef} from 'components/Input';
import {ISSUE_STATE, TRUST_TYPE} from 'config/constants';
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

const useTrustDetialFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState({
    trustRoles: [i18n.t('corporate_trust.owner')],
    trustType: {
      label: i18n.t('trust_type.discretionary'),
      value: TRUST_TYPE.DISCRETIONARY,
    },
    trustFullname: '',
    trustMailingStreetName: '',
    trustMailingUnitNumber: '',
    trustMailingStreetNumber: '',
    trustMailingStreetNameOne: '',
    trustMailingSuburb: '',
    trustMailingPostcode: '',
    trustMailingState: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    trustFullName: '',
    isTaxExemptionForTrust: false,
    trustABNNumber: '',
    trustTFNNumber: '',
  });

  const mailingUnitNumberRef = useRef<InputRef>(null);
  const mailingStreetNumberRef = useRef<InputRef>(null);
  const mailingStreetNameRef = useRef<InputRef>(null);
  const mailingSuburbRef = useRef<InputRef>(null);
  const mailingPostCodeRef = useRef<InputRef>(null);
  const trustFullNameRef = useRef<InputRef>(null);

  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);
  const dispatch = useDispatch();
  const route = useRoute<RootRouteProps<SCREENS.TRUST_DETAILS>>();

  useEffect(() => {
    dispatch(resetDoneScreen());
    if (doneScreen === SCREENS.TRUST_DETAILS) {
      if (route?.params?.isEdit) {
        navigation.navigate(SCREENS.REVIEW_DETAILS);
      } else {
        navigation.navigate(SCREENS.COMPANY_DETAILS, {isEdit: false});
      }
    }
  }, [doneScreen, navigation, dispatch, route, accountType]);

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
    let isValid = validateData(
      mailingUnitNumberRef,
      value.trustMailingUnitNumber,
    );
    isValid =
      validateData(mailingStreetNumberRef, value.trustMailingStreetNumber) &&
      isValid;
    isValid =
      validateData(mailingStreetNameRef, value.trustMailingStreetNameOne) &&
      isValid;
    isValid =
      validateData(mailingSuburbRef, value.trustMailingSuburb) && isValid;
    isValid =
      validateData(mailingPostCodeRef, value.trustMailingPostcode) && isValid;
    isValid = validateData(trustFullNameRef, value.trustFullName) && isValid;

    if (isValid) {
      dispatch(
        updateAccountData({
          data: {
            ...accountData,
            ...value,
          },
          screen: SCREENS.TRUST_DETAILS,
        }),
      );
    }
  }, [accountData, dispatch, value, validateData]);

  const onPressCheckBox = useCallback(
    (item, isChecked) => {
      if (isChecked) {
        const newRoles = value.trustRoles.filter(element => element !== item);
        onChangeValue(newRoles, 'trustRoles');
      } else {
        const newRoles = [...value.trustRoles, item];
        onChangeValue(newRoles, 'trustRoles');
      }
    },
    [onChangeValue, value.trustRoles],
  );

  const isCheckedItem = useCallback(
    item => {
      return value.trustRoles.findIndex(element => element === item) !== -1;
    },
    [value.trustRoles],
  );

  const trustRoles = [
    i18n.t('corporate_trust.owner'),
    i18n.t('corporate_trust.executor'),
    i18n.t('corporate_trust.beneficiary'),
    i18n.t('corporate_trust.appointer'),
    i18n.t('corporate_trust.contributor'),
    i18n.t('corporate_trust.settlor'),
    i18n.t('occupation_type.other'),
  ];

  return {
    onPressNext,
    value,
    onChangeValue,
    onPressCheckBox,
    resetDoneScreenValue,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    accountType,
    onValidateFeild,
    trustRoles,
    trustFullNameRef,
    isCheckedItem,
  };
};

export default useTrustDetialFacade;
