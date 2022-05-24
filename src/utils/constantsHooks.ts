import {DropDownItem} from 'components/Dropdown';
import {
  ACCOUNT_TYPE,
  TAX_EXEMPTION_CODE,
  FUNDING_SOURCE,
  ID_TYPE,
  ISSUE_STATE,
  OCCUPATION_TYPE,
  TIN_EXEMPTION_CODE,
  COMPANY_ROLE,
  COMPANY_TYPE,
  TRUST_TYPE,
} from 'config/constants';
import {useCallback} from 'react';
import i18n from './LocalizedStrings';

const useConstants = () => {
  const titleList: Array<DropDownItem> = [
    {
      label: i18n.t('personal_account.mr'),
      value: ACCOUNT_TYPE.MR,
    },
    {
      label: i18n.t('personal_account.miss'),
      value: ACCOUNT_TYPE.MISS,
    },
    {
      label: i18n.t('personal_account.mrs'),
      value: ACCOUNT_TYPE.MRS,
    },
    {
      label: i18n.t('personal_account.dr'),
      value: ACCOUNT_TYPE.DR,
    },
    {
      label: i18n.t('personal_account.mx'),
      value: ACCOUNT_TYPE.MX,
    },
  ];

  const occupationList: Array<DropDownItem> = [
    {
      label: i18n.t('occupation_type.clerical'),
      value: OCCUPATION_TYPE.CLERICAL,
    },
    {
      label: i18n.t('occupation_type.community'),
      value: OCCUPATION_TYPE.COMMUNITY,
    },
    {
      label: i18n.t('occupation_type.homemaker'),
      value: OCCUPATION_TYPE.HOMEMAKER,
    },
    {
      label: i18n.t('occupation_type.labourer'),
      value: OCCUPATION_TYPE.LABOURER,
    },
    {
      label: i18n.t('occupation_type.machinery'),
      value: OCCUPATION_TYPE.MACHINERY,
    },
    {
      label: i18n.t('occupation_type.managers'),
      value: OCCUPATION_TYPE.MANAGERS,
    },
    {
      label: i18n.t('occupation_type.military'),
      value: OCCUPATION_TYPE.MILITARY,
    },
    {
      label: i18n.t('occupation_type.professional'),
      value: OCCUPATION_TYPE.PROFESSIONAL,
    },
    {
      label: i18n.t('occupation_type.retired'),
      value: OCCUPATION_TYPE.RETIRED,
    },
    {
      label: i18n.t('occupation_type.salesWorkers'),
      value: OCCUPATION_TYPE.SALES_WORKERS,
    },
    {
      label: i18n.t('occupation_type.selfEmployed'),
      value: OCCUPATION_TYPE.SELF_EMPLOYED,
    },
    {
      label: i18n.t('occupation_type.student'),
      value: OCCUPATION_TYPE.STUDENT,
    },
    {
      label: i18n.t('occupation_type.technicians'),
      value: OCCUPATION_TYPE.TECHNICIANS_AND_TRADE_WORKERS,
    },
    {
      label: i18n.t('occupation_type.unemployed'),
      value: OCCUPATION_TYPE.UNEMPLOYED,
    },
    {
      label: i18n.t('occupation_type.other'),
      value: OCCUPATION_TYPE.OTHER,
    },
  ];

  const fundingSources: Array<DropDownItem> = [
    {
      label: i18n.t('funding_source.employment'),
      value: FUNDING_SOURCE.EMPLOYMENT,
    },
    {
      label: i18n.t('funding_source.windfall'),
      value: FUNDING_SOURCE.WINDFALL,
    },
    {
      label: i18n.t('funding_source.inheritance'),
      value: FUNDING_SOURCE.INHERITANCE,
    },
    {
      label: i18n.t('funding_source.investments_australia'),
      value: FUNDING_SOURCE.INVESTMENTS_AUSTRALIA,
    },
    {
      label: i18n.t('funding_source.investments_savings'),
      value: FUNDING_SOURCE.INVESTMENTS_SAVINGS,
    },
    {
      label: i18n.t('funding_source.savings'),
      value: FUNDING_SOURCE.SAVINGS,
    },
  ];

  const identificationList: Array<DropDownItem> = [
    {
      label: i18n.t('identification.driver_license'),
      value: ID_TYPE.DRIVERS_LICENSE,
    },
    {
      label: i18n.t('identification.passport'),
      value: ID_TYPE.PASSPORT,
    },
  ];

  const stateList: Array<DropDownItem> = [
    {
      label: i18n.t('issue_state.australian_capital_territory'),
      value: ISSUE_STATE.AUSTRALIAN_CAPITAL_TERRITORY,
      resultDisplay: ISSUE_STATE.ACT,
    },
    {
      label: i18n.t('issue_state.new_south_wales'),
      value: ISSUE_STATE.NEW_SOUTH_WALES,
      resultDisplay: ISSUE_STATE.NSW,
    },
    {
      label: i18n.t('issue_state.northern_territory'),
      value: ISSUE_STATE.NORTHERN_TERRITORY,
      resultDisplay: ISSUE_STATE.NT,
    },
    {
      label: i18n.t('issue_state.queensland'),
      value: ISSUE_STATE.QUEENS_LAND,
      resultDisplay: ISSUE_STATE.QLD,
    },
    {
      label: i18n.t('issue_state.south_australia'),
      value: ISSUE_STATE.SOUTH_AUSTRALIA,
      resultDisplay: ISSUE_STATE.SA,
    },
    {
      label: i18n.t('issue_state.tasmania'),
      value: ISSUE_STATE.TASMANIA,
      resultDisplay: ISSUE_STATE.TAS,
    },
    {
      label: i18n.t('issue_state.victoria'),
      value: ISSUE_STATE.VICTORIA,
      resultDisplay: ISSUE_STATE.VIC,
    },
    {
      label: i18n.t('issue_state.western_australia'),
      value: ISSUE_STATE.WESTERN_AUSTRALIA,
      resultDisplay: ISSUE_STATE.WA,
    },
  ];

  const tinReasons: Array<DropDownItem> = [
    {
      label: i18n.t('tin_reason.not_issued'),
      value: TIN_EXEMPTION_CODE.NOT_ISSUED,
    },
    {
      label: i18n.t('tin_reason.not_need'),
      value: TIN_EXEMPTION_CODE.NOT_REQUIRED,
    },
    {
      label: i18n.t('tin_reason.not_received'),
      value: TIN_EXEMPTION_CODE.UNOBTAINABLE,
    },
    {
      label: i18n.t('tin_reason.another_reason'),
      value: TIN_EXEMPTION_CODE.APPLIED_FOR,
    },
  ];

  const taxExemptionReasons: Array<DropDownItem> = [
    {
      label: i18n.t('tax_exemption_reason.alphabetical'),
      value: TAX_EXEMPTION_CODE.ALPHABETIC_OR_MORE_THAN_11_CHARS,
    },
    {
      label: i18n.t('tax_exemption_reason.not_lodge_tax'),
      value: TAX_EXEMPTION_CODE.TAX_RETURN_NOT_REQUIRED,
    },
    {
      label: i18n.t('tax_exemption_reason.under_old'),
      value: TAX_EXEMPTION_CODE.AGED_UNDER_SIXTEEN,
    },
    {
      label: i18n.t('tax_exemption_reason.norfolk_resident'),
      value: TAX_EXEMPTION_CODE.NORFOLK_ISLAND_RESIDENT,
    },
    {
      label: i18n.t('tax_exemption_reason.not_resident'),
      value: TAX_EXEMPTION_CODE.NON_RESIDENT,
    },
    {
      label: i18n.t('tax_exemption_reason.provider'),
      value: TAX_EXEMPTION_CODE.PROVIDER_OF_CONSUMER_OR_BUSINESS_FINANCE,
    },
    {
      label: i18n.t('tax_exemption_reason.social_security'),
      value: TAX_EXEMPTION_CODE.SOCIAL_SECURITY_OR_VET_PENSION,
    },
    {
      label: i18n.t('tax_exemption_reason.another_benefit'),
      value: TAX_EXEMPTION_CODE.OTHER_SOCIAL_SECURITY_BENEFIT,
    },
    {
      label: i18n.t('tax_exemption_reason.another_reason'),
      value: TAX_EXEMPTION_CODE.NO_TFN_QUOTED,
    },
  ];

  const getTitleAccount = useCallback(
    (accountType: string | null, holderNumber?: number) => {
      if (accountType) {
        switch (accountType) {
          case ACCOUNT_TYPE.PERSONAL:
            return i18n.t('account_type.personal_account').toUpperCase();
          case ACCOUNT_TYPE.JOINT_ACCOUNT:
            return i18n
              .t('account_type.joint_account_title', {holderNumber})
              .toUpperCase();
          case ACCOUNT_TYPE.COMPANY:
            return i18n.t('account_type.company').toUpperCase();
          case ACCOUNT_TYPE.INDIVIDUAL_TRUST:
            return i18n.t('account_type.individual').toUpperCase();
          case ACCOUNT_TYPE.CORPORATE_TRUST:
            return i18n.t('account_type.corporate').toUpperCase();
          default:
            break;
        }
      }
    },
    [],
  );

  const companyRoles: Array<DropDownItem> = [
    {
      label: i18n.t('company_account.director'),
      value: COMPANY_ROLE.DIRECTOR,
    },
    {
      label: i18n.t('company_account.beneficial_owner'),
      value: COMPANY_ROLE.BENEFICIAL_OWNER,
    },
    {
      label: i18n.t('occupation_type.other'),
      value: COMPANY_ROLE.OTHER,
    },
  ];

  const companyTypes: Array<DropDownItem> = [
    {
      label: i18n.t('company_type.private'),
      value: COMPANY_TYPE.PRIVATE,
    },
    {
      label: i18n.t('company_type.unlisted_ublic'),
      value: COMPANY_TYPE.UNLISTED_PUBLIC,
    },
    {
      label: i18n.t('company_type.listed_public'),
      value: COMPANY_TYPE.LISTED_PUBLIC,
    },
    {
      label: i18n.t('company_type.financial_institution'),
      value: COMPANY_TYPE.FINANCIAL_INSTITUTION,
    },
  ];

  const trustTypes: Array<DropDownItem> = [
    {
      label: i18n.t('trust_type.bare'),
      value: TRUST_TYPE.BARE,
    },
    {
      label: i18n.t('trust_type.discretionary'),
      value: TRUST_TYPE.DISCRETIONARY,
    },
    {
      label: i18n.t('trust_type.fixed'),
      value: TRUST_TYPE.FIXED,
    },
    {
      label: i18n.t('address.unit'),
      value: TRUST_TYPE.UNIT,
    },
    {
      label: i18n.t('occupation_type.other'),
      value: TRUST_TYPE.OTHER,
    },
  ];

  return {
    titleList,
    occupationList,
    fundingSources,
    identificationList,
    stateList,
    tinReasons,
    taxExemptionReasons,
    getTitleAccount,
    companyRoles,
    companyTypes,
    trustTypes,
  };
};

export default useConstants;
