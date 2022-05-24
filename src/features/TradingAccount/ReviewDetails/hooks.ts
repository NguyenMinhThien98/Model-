import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ACCOUNT_TYPE, ADDRESS_TYPE, ID_TYPE} from 'config/constants';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import {formatAddress} from 'utils/commonHelpers';
import {formatBirthDate} from 'utils/datetime';
import i18n from 'utils/LocalizedStrings';
import {createPersonalAccount} from '../action';
import {AccountProps, requestActionFailed, resetAccountData} from '../slide';

export interface CellItem {
  label: string;
  value: string;
}

export interface BlockItem {
  infoName: string;
  onPressEdit: () => void;
  data: Array<CellItem | undefined>;
}

const useReviewDetailFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [finalDetails, setFinalDetails] = useState<
    Array<BlockItem> | undefined
  >(undefined);

  const {accountType, accountData, loading, error} = useGlobalState(
    state => state.tradingAccount,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(requestActionFailed(null));
      showMessage({
        message: error?.message ?? i18n.t('app.default_message'),
      });
    }
  }, [error, dispatch]);

  const basicData = useCallback(
    (storeData: AccountProps) => {
      const data: Array<BlockItem> = [
        {
          infoName: i18n.t('review.personal_info'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.PERSONAL_DETAILS, {isEdit: true}),
          data: [
            {
              label: i18n.t('personal_account.first_name'),
              value: storeData.firstName,
            },
            {
              label: i18n.t('personal_account.last_name'),
              value: storeData.lastName,
            },
            {
              label: i18n.t('personal_account.middle_name'),
              value: storeData.middleName,
            },
            {
              label: i18n.t('personal_account.alternate_names'),
              value: storeData.alternateName,
            },
            {
              label: i18n.t('personal_account.birth_date'),
              value: formatBirthDate(storeData.dateOfBirth),
            },
            {
              label: i18n.t('personal_account.mobile_number'),
              value: storeData.mobilePhone,
            },
            {
              label: i18n.t('sign_up.email'),
              value: storeData.email,
            },
          ],
        },
        {
          infoName: i18n.t('identification.tax_information'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.IDENTIFICATION, {isEdit: true}),
          data: [
            {
              label: i18n.t('review.tfn'),
              value: storeData.tfn,
            },
            {
              label: i18n.t('review.tax_resident_question'),
              value: i18n
                .t(storeData.isTaxResident ? 'onboarding.yes' : 'onboarding.no')
                .toUpperCase(),
            },
            {
              label: i18n.t('review.tax_exemption'),
              value: i18n
                .t(
                  storeData.isTaxExemption ? 'onboarding.yes' : 'onboarding.no',
                )
                .toUpperCase(),
            },
          ],
        },
        {
          infoName: i18n.t('personal_account.source_funds'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.PERSONAL_DETAILS, {isEdit: true}),
          data: [
            {
              label: i18n.t('personal_account.occupation_type'),
              value:
                storeData.occupationType.resultDisplay ||
                storeData.occupationType.label,
            },
            {
              label: i18n.t('review.source_fund'),
              value:
                storeData.sourceOfFunds.resultDisplay ||
                storeData.sourceOfFunds.label,
            },
          ],
        },
        {
          infoName: i18n.t('review.id_document'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.IDENTIFICATION, {isEdit: true}),
          data: [
            {
              label: i18n.t('review.id_type'),
              value:
                storeData.identificationType.resultDisplay ||
                storeData.identificationType.label,
            },
            {
              label: i18n.t(
                storeData.identificationType.value === ID_TYPE.DRIVERS_LICENSE
                  ? 'review.license_number'
                  : 'identification.passport',
              ),
              value:
                storeData.identificationType.value === ID_TYPE.DRIVERS_LICENSE
                  ? storeData.licenseNumber
                  : storeData.passportNumber,
            },
            storeData.identificationType.value === ID_TYPE.DRIVERS_LICENSE
              ? {
                  label: i18n.t('review.expiry_date'),
                  value: formatBirthDate(storeData.expiryDate),
                }
              : undefined,
            {
              label: i18n.t('review.state_issue'),
              value:
                storeData.stateOfIssue.resultDisplay ||
                storeData.stateOfIssue.label,
            },
          ],
        },
      ];
      return data;
    },
    [navigation],
  );

  const preparePersonalData = useCallback(
    (storeData: AccountProps) => {
      const newData: Array<BlockItem> = [
        ...basicData(storeData),
        {
          infoName: i18n.t('additional.additional'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.ADDRESS, {isEdit: true}),
          data: [
            {
              label: i18n.t('address.residential_address'),
              value: formatAddress(
                storeData.unitNumber,
                storeData.streetNumber,
                storeData.streetNameOne,
                storeData.suburb,
                storeData.postcode,
                storeData.state.resultDisplay || storeData.state.label,
              ),
            },
            {
              label: i18n.t('address.moved_question'),
              value: i18n
                .t(
                  storeData.isHaveMoveAddress
                    ? 'onboarding.yes'
                    : 'onboarding.no',
                )
                .toUpperCase(),
            },
            {
              label: i18n.t('address.mailing_address'),
              value: storeData.isSameResidentialAddress
                ? i18n.t('company_account.same_residential_address')
                : formatAddress(
                    storeData.mailingUnitNumber,
                    storeData.mailingStreetNumber,
                    storeData.mailingStreetNameOne,
                    storeData.mailingSuburb,
                    storeData.mailingPostcode,
                    storeData.mailingState.resultDisplay ||
                      storeData.mailingState.label,
                  ),
            },
            {
              label: i18n.t('additional.income'),
              value: i18n
                .t(storeData.isLinkedCash ? 'onboarding.yes' : 'onboarding.no')
                .toUpperCase(),
            },
          ],
        },
      ];

      setFinalDetails(newData);
    },
    [navigation, basicData],
  );

  const prepareComapnyData = useCallback(
    (storeData: AccountProps) => {
      const newData: Array<BlockItem> = [
        ...basicData(storeData),
        {
          infoName: i18n.t('address.address'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.ADDRESS, {isEdit: true}),
          data: [
            {
              label: i18n.t('address.residential_address'),
              value: formatAddress(
                storeData.unitNumber,
                storeData.streetNumber,
                storeData.streetNameOne,
                storeData.suburb,
                storeData.postcode,
                storeData.state.resultDisplay || storeData.state.label,
              ),
            },
            {
              label: i18n.t('address.moved_question'),
              value: i18n
                .t(
                  storeData.isHaveMoveAddress
                    ? 'onboarding.yes'
                    : 'onboarding.no',
                )
                .toUpperCase(),
            },
          ],
        },
        {
          infoName: i18n.t('company_account.company_info'),
          onPressEdit: () =>
            navigation.navigate(SCREENS.COMPANY_DETAILS, {isEdit: true}),
          data: [
            {
              label: i18n.t('company_account.role_company'),
              value: storeData.companyRole.label,
            },
            {
              label: i18n.t('company_account.full_name_company'),
              value: storeData.companyName,
            },
            {
              label: i18n.t('company_account.company_type'),
              value: storeData.companyType.label,
            },
            {
              label: i18n.t('company_account.company_sector'),
              value: storeData.companySectors.label,
            },
            {
              label: i18n.t('company_account.acn'),
              value: storeData.acnNumber,
            },
            {
              label: i18n.t('company_account.abn'),
              value: storeData.abnNumber,
            },
            {
              label: i18n.t('company_account.date_registeration'),
              value: formatBirthDate(storeData.dateOfIncorporation),
            },
            {
              label: i18n.t('company_account.tax_number'),
              value: storeData.tfnNumber,
            },
            {
              label: i18n.t('review.tax_exemption'),
              value: i18n
                .t(
                  storeData.isTaxExemptionForCompany
                    ? 'onboarding.yes'
                    : 'onboarding.no',
                )
                .toUpperCase(),
            },
            {
              label: i18n.t('company_account.office_dddress'),
              value: formatAddress(
                storeData.registeredOfficeUnitNumber,
                storeData.registeredOfficeStreetNumber,
                storeData.registeredOfficeStreetNameOne,
                storeData.registeredOfficeSuburb,
                storeData.registeredOfficePostcode,
                storeData.registeredOfficeState.resultDisplay ||
                  storeData.registeredOfficeState.label,
              ),
            },
            {
              label: i18n.t('company_account.place_bussiness_address'),
              value: storeData.isSameOfficeAddress
                ? i18n.t('company_account.same_registered_address')
                : formatAddress(
                    storeData.businessUnitNumber,
                    storeData.businessStreetNumber,
                    storeData.businessStreetNameOne,
                    storeData.businessSuburb,
                    storeData.businessPostcode,
                    storeData.businessState.resultDisplay ||
                      storeData.businessState.label,
                  ),
            },
          ],
        },
        {
          infoName: i18n.t('additional.additional'),
          onPressEdit: () => navigation.navigate(SCREENS.ADDITIONAL_DETAILS),
          data: [
            {
              label: i18n.t('company_account.place_bussiness_address'),
              value: storeData.useExistAddress
                ? storeData.addressSelected.value
                : formatAddress(
                    storeData.companyMailingUnitNumber,
                    storeData.companyMailingStreetNumber,
                    storeData.companyMailingStreetNameOne,
                    storeData.companyMailingSuburb,
                    storeData.companyMailingPostcode,
                    storeData.companyMailingState.resultDisplay ||
                      storeData.companyMailingState.label,
                  ),
            },
          ],
        },
      ];

      setFinalDetails(newData);
    },
    [navigation, basicData],
  );

  useEffect(() => {
    if (accountData && accountType) {
      switch (accountType) {
        case ACCOUNT_TYPE.PERSONAL:
          preparePersonalData(accountData);
          break;
        case ACCOUNT_TYPE.COMPANY:
          prepareComapnyData(accountData);
          break;
        default:
          break;
      }
    }
  }, [accountData, accountType, preparePersonalData, prepareComapnyData]);

  const onPressComplete = useCallback(() => {
    let params = {
      dateOfBirth: formatBirthDate(accountData.dateOfBirth),
      occupationType: accountData.occupationType.value,
      sourceOfFunds: accountData.sourceOfFunds.value,
      accountType,
      state: accountData.state.value,
      mailingState: accountData.mailingState.value,
      expiryDate: formatBirthDate(accountData.expiryDate),
      stateOfIssue: accountData.stateOfIssue.value,
      typeAddress: ADDRESS_TYPE.RESIDENTIAL,
      isPassport: accountData.identificationType.value === ID_TYPE.PASSPORT,
      isLicense:
        accountData.identificationType.value === ID_TYPE.DRIVERS_LICENSE,
      country: accountData.country.value,
      countryOfBirth: accountData.countryOfBirth.value,
      exemptionCode:
        accountData.isTaxResident && !accountData.isTaxExemption
          ? undefined
          : accountData.isTaxResident && accountData.isTaxExemption
          ? accountData.tfnExemptionCode.value
          : accountData.tinExemptionCode.value,
      title: accountData.title.value,
      identificationType: accountData.identificationType.value,
      isTaxExemption: accountData.isTaxResident
        ? accountData.isTaxExemption
        : accountData.isHaveTin,
    };
    if (accountType) {
      switch (accountType) {
        case ACCOUNT_TYPE.PERSONAL:
          params = {...accountData, ...params};
          break;
        case ACCOUNT_TYPE.COMPANY:
          const additionalData = {
            ...params,
            companyRole: accountData.companyRole.value,
            companyType: accountData.companyType.value,
            companySectors: accountData.companySectors.value,
            dateOfIncorporation: formatBirthDate(
              accountData.dateOfIncorporation,
            ),
            registeredOfficeState: accountData.registeredOfficeState.value,
            businessState: accountData.businessState.value,
            companyMailingState: accountData.businessState.value,
          };
          params = {
            ...accountData,
            ...additionalData,
          };
          break;

        default:
          break;
      }
    }
    dispatch(createPersonalAccount(params));
  }, [accountData, accountType, dispatch]);

  const goToDashboard = useCallback(() => {
    setShowSuccessModal(false);
    navigation.navigate(SCREENS.MAIN_TAB);
  }, [navigation]);

  const onResetData = useCallback(() => {
    dispatch(resetAccountData());
  }, [dispatch]);

  return {
    onPressComplete,
    finalDetails,
    showSuccessModal,
    goToDashboard,
    loading,
    onResetData,
    accountType,
  };
};

export default useReviewDetailFacade;
