import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DropDownItem} from 'components/Dropdown';
import {InputRef} from 'components/Input';
import {ACCOUNT_TYPE, ISSUE_STATE} from 'config/constants';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {formatAddress} from 'utils/commonHelpers';
import i18n from 'utils/LocalizedStrings';
import {resetDoneScreen, updateAccountData} from '../slide';

const useAdditionalDetailsFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState({
    isLinkedCash: false,
    companyMailingUnitNumber: '',
    companyMailingStreetNumber: '',
    companyMailingStreetNameOne: '',
    companyMailingSuburb: '',
    companyMailingPostcode: '',
    companyMailingState: {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    useExistAddress: false,
    addressSelected: {
      label: '',
      value: '',
      data: {
        unitNumber: '',
        streetNumber: '',
        streetName: '',
        suburb: '',
        postCode: '',
        state: {
          label: i18n.t('issue_state.new_south_wales'),
          value: ISSUE_STATE.NEW_SOUTH_WALES,
          resultDisplay: ISSUE_STATE.NSW,
        },
      },
    },
  });

  const accountType = useGlobalState(state => state.tradingAccount.accountType);
  const accountData = useGlobalState(state => state.tradingAccount.accountData);
  const doneScreen = useGlobalState(state => state.tradingAccount.doneScreen);
  const dispatch = useDispatch();

  const mailingUnitNumberRef = useRef<InputRef>(null);
  const mailingStreetNumberRef = useRef<InputRef>(null);
  const mailingStreetNameRef = useRef<InputRef>(null);
  const mailingSuburbRef = useRef<InputRef>(null);
  const mailingPostCodeRef = useRef<InputRef>(null);

  useEffect(() => {
    if (doneScreen === SCREENS.ADDITIONAL_DETAILS) {
      navigation.navigate(SCREENS.REVIEW_DETAILS);
    }
  }, [doneScreen, navigation]);

  const getTitleAccount = useCallback(() => {
    if (accountType) {
      switch (accountType) {
        case ACCOUNT_TYPE.PERSONAL:
          return i18n.t('account_type.personal_account').toUpperCase();
        default:
          break;
      }
    }
  }, [accountType]);

  useEffect(() => {
    if (accountData) {
      if (accountData.isLinkedCash || accountData.companyMailingState) {
        setValue(accountData);
      } else if (accountType === ACCOUNT_TYPE.COMPANY) {
        const address = {
          label: formatAddress(
            accountData.mailingUnitNumber,
            accountData.mailingStreetNumber,
            accountData.mailingStreetNameOne,
            accountData.mailingSuburb,
            accountData.mailingPostcode,
            accountData.mailingState.resultDisplay ||
              accountData.mailingState.label,
            undefined,
            i18n.t('address.residential_address'),
          ),
          value: i18n.t('company_account.same_residential_address'),
          data: {
            unitNumber: accountData.mailingUnitNumber,
            streetNumber: accountData.mailingStreetNumber,
            streetName: accountData.mailingStreetNameOne,
            suburb: accountData.mailingSuburb,
            postCode: accountData.mailingPostcode,
            state: accountData.mailingState,
          },
        };
        setValue(preValue => ({...preValue, addressSelected: address}));
      }
    }
  }, [accountData, accountType]);

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
    let params = {
      ...accountData,
      ...value,
    };
    switch (accountType) {
      case ACCOUNT_TYPE.COMPANY:
        let isValid = validateData(
          mailingUnitNumberRef,
          value.companyMailingUnitNumber,
        );
        isValid =
          validateData(
            mailingStreetNumberRef,
            value.companyMailingStreetNumber,
          ) && isValid;
        isValid =
          validateData(
            mailingStreetNameRef,
            value.companyMailingStreetNameOne,
          ) && isValid;
        isValid =
          validateData(mailingSuburbRef, value.companyMailingSuburb) && isValid;
        isValid =
          validateData(mailingPostCodeRef, value.companyMailingPostcode) &&
          isValid;

        if (isValid || value.useExistAddress) {
          if (value.useExistAddress && value.addressSelected?.data) {
            params = {
              ...params,
              companyMailingUnitNumber: value.addressSelected.data.unitNumber,
              companyMailingStreetNumber:
                value.addressSelected.data.streetNumber,
              companyMailingStreetNameOne:
                value.addressSelected.data.streetName,
              companyMailingSuburb: value.addressSelected.data.suburb,
              companyMailingPostcode: value.addressSelected.data.postCode,
              companyMailingState: value.addressSelected.data.state,
            };
          }
          dispatch(
            updateAccountData({
              data: params,
              screen: SCREENS.ADDITIONAL_DETAILS,
            }),
          );
        }
        break;
      case ACCOUNT_TYPE.PERSONAL:
        dispatch(
          updateAccountData({
            data: params,
            screen: SCREENS.ADDITIONAL_DETAILS,
          }),
        );
        break;
      default:
        break;
    }
  }, [dispatch, value, validateData, accountData, accountType]);

  const addressAlreadyList: Array<DropDownItem | undefined> = useMemo(() => {
    switch (accountType) {
      case ACCOUNT_TYPE.COMPANY:
        return [
          {
            label: formatAddress(
              accountData.unitNumber,
              accountData.streetNumber,
              accountData.streetNameOne,
              accountData.suburb,
              accountData.postcode,
              accountData.state.resultDisplay || accountData.state.label,
              undefined,
              i18n.t('address.residential_address'),
            ),
            value: i18n.t('company_account.same_residential_address'),
            data: {
              unitNumber: accountData.unitNumber,
              streetNumber: accountData.streetNumber,
              streetName: accountData.streetNameOne,
              suburb: accountData.suburb,
              postCode: accountData.postcode,
              state: accountData.state,
            },
          },
          {
            label: formatAddress(
              accountData.registeredOfficeUnitNumber,
              accountData.registeredOfficeStreetNumber,
              accountData.registeredOfficeStreetNameOne,
              accountData.registeredOfficeSuburb,
              accountData.registeredOfficePostcode,
              accountData.registeredOfficeState.resultDisplay ||
                accountData.registeredOfficeState.label,
              undefined,
              i18n.t('company_account.office_dddress'),
            ),
            value: i18n.t('company_account.same_registered_address'),
            data: {
              unitNumber: accountData.registeredOfficeUnitNumber,
              streetNumber: accountData.registeredOfficeStreetNumber,
              streetName: accountData.registeredOfficeStreetNameOne,
              suburb: accountData.registeredOfficeSuburb,
              postCode: accountData.registeredOfficePostcode,
              state: accountData.registeredOfficeState,
            },
          },
          !accountData.isSameOfficeAddress
            ? {
                label: formatAddress(
                  accountData.businessUnitNumber,
                  accountData.businessStreetNumber,
                  accountData.businessStreetNameOne,
                  accountData.businessSuburb,
                  accountData.businessPostcode,
                  accountData.businessState.resultDisplay ||
                    accountData.businessState.label,
                  undefined,
                  i18n.t('company_account.place_business'),
                ),
                value: i18n.t('company_account.same_principle_address'),
                data: {
                  unitNumber: accountData.businessUnitNumber,
                  streetNumber: accountData.businessStreetNumber,
                  streetName: accountData.businessStreetNameOne,
                  suburb: accountData.businessSuburb,
                  postCode: accountData.businessPostcode,
                  state: accountData.businessState,
                },
              }
            : undefined,
        ];

      default:
        return [];
    }
  }, [accountData, accountType]);

  return {
    onPressNext,
    value,
    onChangeValue,
    getTitleAccount,
    resetDoneScreenValue,
    accountType,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    addressAlreadyList,
    onValidateFeild,
  };
};

export default useAdditionalDetailsFacade;
