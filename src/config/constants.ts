import {Dimensions} from 'react-native';

export enum STORE_KEYS {
  TOKEN = 'authenticationToken',
  CURRENT_USER = 'user',
  ACCOUNT_INFO = 'accountInfo',
}

export enum VERIFY_CODE_TYPE {
  SIGN_UP = 'sign up',
  FORGOT_PASSWORD = 'forgot password',
}

export const PAGE_LIMIT = 30;

export enum ACCOUNT_TYPE {
  PERSONAL = 'Personal',
  JOINT_ACCOUNT = 'Joint',
  COMPANY = 'Company',
  INDIVIDUAL_TRUST = 'INDIV/SMSF',
  CORPORATE_TRUST = 'COMP/SMSF',
}

export enum ERROR_CODE {
  ALREADY_EXIST = '001',
  USER_DOSE_NOT_EXIST = '003',
}

export enum BUTTON_STATE {
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
}

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export enum ACCOUNT_TYPE {
  MR = 'Mr',
  MISS = 'Miss',
  MRS = 'Mrs',
  DR = 'Dr.',
  MX = 'Mx',
}

export enum OCCUPATION_TYPE {
  CLERICAL = 'CLERICAL_AND_ADMINISTRATIVE_WORKERS',
  COMMUNITY = 'COMMUNITY_AND_PERSONAL_SERVICE_WORKERS',
  HOMEMAKER = 'HOMEMAKER',
  LABOURER = 'LABOURER',
  MACHINERY = 'MACHINERY_OPERATORS_AND_DRIVERS',
  MANAGERS = 'MANAGERS',
  MILITARY = 'MILITARY',
  PROFESSIONAL = 'PROFESSIONAL',
  RETIRED = 'RETIRED',
  SALES_WORKERS = 'SALES_WORKERS',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  STUDENT = 'STUDENT',
  TECHNICIANS_AND_TRADE_WORKERS = 'TECHNICIANS_AND_TRADE_WORKERS',
  UNEMPLOYED = 'UNEMPLOYED',
  OTHER = 'OTHER',
}

export enum FUNDING_SOURCE {
  EMPLOYMENT = 'Employment',
  WINDFALL = 'Gift / Windfall',
  INHERITANCE = 'Inheritance',
  INVESTMENTS_AUSTRALIA = 'Investments Australia',
  INVESTMENTS_SAVINGS = 'Investments Savings',
  SAVINGS = 'Savings',
}

export enum ID_TYPE {
  DRIVERS_LICENSE = 'Driver’s license',
  PASSPORT = 'Passport',
}

export enum ISSUE_STATE {
  AUSTRALIAN_CAPITAL_TERRITORY = 'AUSTRALIAN_CAPITAL_TERRITORY',
  NEW_SOUTH_WALES = 'NEW_SOUTH_WALES',
  NORTHERN_TERRITORY = 'NORTHERN_TERRITORY',
  QUEENS_LAND = 'QUEENSLAND',
  SOUTH_AUSTRALIA = 'SOUTH_AUSTRALIA',
  TASMANIA = 'TASMANIA',
  VICTORIA = 'VICTORIA',
  WESTERN_AUSTRALIA = 'WESTERN_AUSTRALIA',
  ACT = 'ACT',
  NSW = 'NSW',
  NT = 'NT',
  QLD = 'Qld',
  SA = 'SA',
  WA = 'WA',
  VIC = 'Vic',
  TAS = 'Tas',
}

export const DEFAULT_COUNTRY = {
  callingCode: ['61'],
  cca2: 'AU',
  currency: ['AUD'],
  flag: 'flag-au',
  name: 'Australia',
  region: 'Oceania',
  subregion: 'Australia and New Zealand',
  value: 'AUS',
  label: 'Australia',
  eu: false,
};

export enum ADDRESS_TYPE {
  RESIDENTIAL = 'Residential',
  MAILING = 'Mailing',
  REGISTERED_OFFICE = 'Registered Office',
  BUSINESS = 'Business',
  TRUST = 'Trust',
}

export enum TAX_EXEMPTION_CODE {
  ALPHABETIC_OR_MORE_THAN_11_CHARS = 'ALPHABETIC_OR_MORE_THAN_11_CHARS',
  TAX_RETURN_NOT_REQUIRED = 'TAX_RETURN_NOT_REQUIRED',
  AGED_UNDER_SIXTEEN = 'AGED_UNDER_SIXTEEN',
  NON_RESIDENT = 'NON_RESIDENT',
  NORFOLK_ISLAND_RESIDENT = 'NORFOLK_ISLAND_RESIDENT',
  NO_TFN_QUOTED = 'NO_TFN_QUOTED',
  OTHER_SOCIAL_SECURITY_BENEFIT = 'OTHER_SOCIAL_SECURITY_BENEFIT',
  PROVIDER_OF_CONSUMER_OR_BUSINESS_FINANCE = 'PROVIDER_OF_CONSUMER_OR_BUSINESS_FINANCE',
  SOCIAL_SECURITY_OR_VET_PENSION = 'SOCIAL_SECURITY_OR_VET_PENSION',
}

export enum TIN_EXEMPTION_CODE {
  NOT_ISSUED = 'NOT_ISSUED',
  NOT_REQUIRED = 'NOT_REQUIRED',
  APPLIED_FOR = 'APPLIED_FOR',
  UNOBTAINABLE = 'UNOBTAINABLE',
}

export enum COMPANY_ROLE {
  DIRECTOR = 'DIRECTOR',
  BENEFICIAL_OWNER = 'BENEFICIAL_OWNER',
  OTHER = 'OTHER',
}

export enum COMPANY_TYPE {
  PRIVATE = 'PRIVATE',
  UNLISTED_PUBLIC = 'UNLISTED_PUBLIC',
  LISTED_PUBLIC = 'LISTED_PUBLIC',
  FINANCIAL_INSTITUTION = 'FINANCIAL_INSTITUTION',
}

export enum TAG_TYPE {
  ANNOUNCEMENT = 'announcement',
  RECOMMENDATIONS = 'recommendations',
  BROKERNOTES = 'broker_notes',
  RESOURCES = 'resources',
  MARKETNEWS = 'market_news',
  BUY = 'buy',
  SELL = 'sell',
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum TRUST_TYPE {
  BARE = 'BARE',
  DISCRETIONARY = 'DISCRETIONARY',
  FIXED = 'FIXED',
  UNIT = 'UNIT',
  OTHER = 'OTHER',
}
