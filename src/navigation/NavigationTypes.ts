import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RecommendData} from 'models/Recommendation';

export enum SCREENS {
  SPLASH = 'Splash',
  LOGIN = 'Login',
  SIGN_UP = 'SignUp',
  ONBOARDING = 'Onboarding',
  USE_MAQRO = 'UseMaqro',
  SECTORS = 'Sectors',
  COMPANIES = 'Companies',
  MAIN_TAB = 'MainTab',
  DASH_BOARD = 'Dashboard',
  RESEARCH = 'Research',
  PORTFOLIO = 'Portfolio',
  TRADE = 'Trade',
  WATCHLIST = 'Watchlist',
  SIMULATION_DETAIL = 'SimulationDetail',
  ACCOUNT_WELCOME = 'AccountWelcome',
  ACCOUNT_TYPE = 'AccountType',
  PERSONAL_DETAILS = 'PersonalDetails',
  IDENTIFICATION = 'Identification',
  ADDRESS = 'Address',
  ADDITIONAL_DETAILS = 'AdditionalDetails',
  PERSONAL_IDENTIFICATION = 'PersonalIdentification',
  PERSONAL_ADDRESS = 'PersonalAddress',
  PERSONAL_ADDITIONAL = 'PersonalAdditional',
  COMPANY_OVERVIEW = 'CompanyOverview',
  FORGOT_PASSWORD = 'ForgotPassword',
  COMPANY = 'Company',
  REVIEW_DETAILS = 'ReviewDetails',
  COMPANY_DETAILS = 'CompanyDetail',
  RECOMMENDATION = 'Recommendations',
  RECOMMENDATIONDETAILS = 'RecommendationDetails',
  COMPANYNEWS = 'CompanyNews',
  COMPANYABOUT = 'CompanyAbout',
  COMPANYNEWSDETAILS = 'CompanyNewDetails',
  COMPANYFINANCIALSSUMMARY = 'CompanyFinancialsSummary',
  COMPANYFINANCIALSHEALTH = 'CompanyFinancialsHealth',
  COMPANYFINANCIALSEQUITY = 'CompanyFinancialsEquity',
  COMPANYFINANCIALSVALUATION = 'CompanyFinancialsValuation',
  COMPANYFINANCIALSDIVIDENDS = 'CompanyFinancialsDividends',
  ACCOUNT_SETTING = 'AccountSetting',
  MY_PROFILE = 'MyProfile',
  TRUST_DETAILS = 'TrustDetails',
  EDIT_EMAIL = 'EditEmail',
  EDIT_EMAIL_OTP = 'EditEmailOTP',
  EDIT_PHONE = 'EditPhone',
  EDIT_PHONE_OTP = 'EditPhoneOTP',
  VIEW_ALLRECOMMENDATIONS = 'ViewAllRecommendations',
  EDIT_RESIDENTIAL = 'EditResidential',
}

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Onboarding: undefined;
  UseMaqro: undefined;
  Sectors: undefined;
  Companies: {industryIds: Array<number>};
  AccountWelcome: undefined;
  AccountType: undefined;
  PersonalDetails: {isEdit: boolean | undefined};
  Identification: {isEdit: boolean | undefined};
  Address: {isEdit: boolean | undefined};
  AdditionalDetails: undefined;
  PersonalIdentification: undefined;
  PersonalAddress: undefined;
  PersonalAdditional: undefined;
  CompanyOverview: undefined;
  ForgotPassword: undefined;
  ReviewDetails: undefined;
  MainTab: undefined;
  SimulationDetail: undefined;
  CompanyDetail: {isEdit: boolean | undefined};
  AccountSetting: undefined;
  MyProfile: undefined;
  TrustDetails: {isEdit: boolean | undefined};
  RecommendationDetails: {data: RecommendData};
  EditEmailOTP: {email: string | undefined};
  EditEmail: undefined;
  EditPhone: undefined;
  EditPhoneOTP: {phone: string | undefined};
  EditResidential: undefined;
};

export type RootRouteProps<SCREENS extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, SCREENS>;

export type CompanyScreenProps = {
  route: RouteProp<RootStackParamList, SCREENS.COMPANIES>;
  navigation: StackNavigationProp<RootStackParamList, SCREENS.COMPANIES>;
};
