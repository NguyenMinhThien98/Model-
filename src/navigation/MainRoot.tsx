import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'assets/colors';
import {Images} from 'assets/images';
import CompanyOverview from 'features/Company/Overview';
import DashBoard from 'features/DashBoard';
import Portfolio from 'features/Portfolio';
import Trade from 'features/Research';
import Research from 'features/Research';
import {AccountType} from 'features/TradingAccount/AccountType';
import AdditionalDetails from 'features/TradingAccount/AdditionalDetails';
import Address from 'features/TradingAccount/Address';
import Identification from 'features/TradingAccount/Identification';
import PersonalDetails from 'features/TradingAccount/PersonalDetails';
import ReviewDetails from 'features/TradingAccount/ReviewDetails';
import {AccountWelcome} from 'features/TradingAccount/Welcome';
import SimulationDetail from 'features/SimulationDetail';
import Watchlist from 'features/Watchlist';
import React, {FC} from 'react';
import {Image} from 'react-native';
import {SCREENS} from './NavigationTypes';
import CompanyDetails from 'features/TradingAccount/CompanyDetails';
import Company from 'features/Company';
import Recommendations from 'features/Company/Recommendations';
import RecommendationDetails from 'features/Company/RecommendationDetails';
import CompanyNews from 'features/Company/News';
import CompanyAbout from 'features/Company/About';
import CompanyNewsDetails from 'features/Company/NewsDetails';
import CompanyFinancialsSummary from 'features/Company/Financials/Summary';
import CompanyFinancialsHealth from 'features/Company/Financials/Health';
import CompanyFinancialsEquity from 'features/Company/Financials/Equity';
import CompanyFinancialsValuation from 'features/Company/Financials/Valuation';
import CompanyFinancialsDividends from 'features/Company/Financials/Dividends';
import AccountSetting from 'features/AccountSetting/Main';
import MyProfile from 'features/AccountSetting/MyProfile';
import TrustDetails from 'features/TradingAccount/TrustDetails';
import EditEmail from 'features/AccountSetting/EditEmail/SetEditEmail';
import EditEmailOTP from 'features/AccountSetting/EditEmail/OTPEditEmail';
import EditPhone from 'features/AccountSetting/EditPhone/SetEditPhone';
import ViewAllRecommendations from 'features/Research/ViewAllRecommendations';
import EditResidential from 'features/AccountSetting/EditResidential';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabConfigs = [
  {
    name: SCREENS.RESEARCH,
    component: Research,
    inActiveIcon: Images.ic_search,
    activeIcon: Images.ic_search_active,
  },
  {
    name: SCREENS.PORTFOLIO,
    component: Portfolio,
    inActiveIcon: Images.ic_portfolio,
    activeIcon: Images.ic_portfolio_active,
  },
  {
    name: SCREENS.DASH_BOARD,
    component: DashBoard,
    inActiveIcon: Images.ic_dashboard,
    activeIcon: Images.ic_dashboard_active,
  },
  {
    name: SCREENS.TRADE,
    component: Trade,
    inActiveIcon: Images.ic_trade,
    activeIcon: Images.ic_trade_active,
  },
  {
    name: SCREENS.WATCHLIST,
    component: Watchlist,
    inActiveIcon: Images.ic_watchlist,
    activeIcon: Images.ic_watchlist_active,
  },
];

const MainTab: FC = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.DASH_BOARD}>
      {MainTabConfigs.map(tab => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? tab.activeIcon : tab.inActiveIcon} />
            ),
            tabBarActiveTintColor: Colors.greyDark,
            tabBarInactiveTintColor: Colors.greyMedium,
          }}
          key={tab.name}
        />
      ))}
      <Tab.Screen
        options={{
          tabBarButton: () => null,
        }}
        name={SCREENS.ACCOUNT_SETTING}
        component={AccountSetting}
      />
    </Tab.Navigator>
  );
};

export const MainRoot: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.MAIN_TAB} component={MainTab} />
      <Stack.Screen name={SCREENS.ACCOUNT_SETTING} component={AccountSetting} />
      <Stack.Screen name={SCREENS.ACCOUNT_WELCOME} component={AccountWelcome} />
      <Stack.Screen name={SCREENS.ACCOUNT_TYPE} component={AccountType} />
      <Stack.Screen
        name={SCREENS.PERSONAL_DETAILS}
        component={PersonalDetails}
      />
      <Stack.Screen name={SCREENS.IDENTIFICATION} component={Identification} />
      <Stack.Screen name={SCREENS.ADDRESS} component={Address} />
      <Stack.Screen
        name={SCREENS.ADDITIONAL_DETAILS}
        component={AdditionalDetails}
      />
      <Stack.Screen name={SCREENS.COMPANY_DETAILS} component={CompanyDetails} />
      <Stack.Screen name={SCREENS.REVIEW_DETAILS} component={ReviewDetails} />
      <Stack.Screen
        name={SCREENS.SIMULATION_DETAIL}
        component={SimulationDetail}
      />
      <Stack.Screen
        name={SCREENS.COMPANY_OVERVIEW}
        component={CompanyOverview}
      />
      <Stack.Screen name={SCREENS.COMPANY} component={Company} />
      <Stack.Screen name={SCREENS.RECOMMENDATION} component={Recommendations} />
      <Stack.Screen
        name={SCREENS.RECOMMENDATIONDETAILS}
        component={RecommendationDetails}
      />
      <Stack.Screen name={SCREENS.COMPANYNEWS} component={CompanyNews} />
      <Stack.Screen name={SCREENS.COMPANYABOUT} component={CompanyAbout} />
      <Stack.Screen
        name={SCREENS.COMPANYNEWSDETAILS}
        component={CompanyNewsDetails}
      />
      <Stack.Screen
        name={SCREENS.COMPANYFINANCIALSSUMMARY}
        component={CompanyFinancialsSummary}
      />
      <Stack.Screen
        name={SCREENS.COMPANYFINANCIALSHEALTH}
        component={CompanyFinancialsHealth}
      />
      <Stack.Screen
        name={SCREENS.COMPANYFINANCIALSEQUITY}
        component={CompanyFinancialsEquity}
      />
      <Stack.Screen
        name={SCREENS.COMPANYFINANCIALSVALUATION}
        component={CompanyFinancialsValuation}
      />
      <Stack.Screen
        name={SCREENS.COMPANYFINANCIALSDIVIDENDS}
        component={CompanyFinancialsDividends}
      />
      <Stack.Screen name={SCREENS.MY_PROFILE} component={MyProfile} />
      <Stack.Screen name={SCREENS.TRUST_DETAILS} component={TrustDetails} />
      <Stack.Screen name={SCREENS.EDIT_EMAIL} component={EditEmail} />
      <Stack.Screen name={SCREENS.EDIT_PHONE} component={EditPhone} />
      <Stack.Screen name={SCREENS.EDIT_EMAIL_OTP} component={EditEmailOTP} />
      <Stack.Screen
        name={SCREENS.VIEW_ALLRECOMMENDATIONS}
        component={ViewAllRecommendations}
      />
      <Stack.Screen
        name={SCREENS.EDIT_RESIDENTIAL}
        component={EditResidential}
      />
    </Stack.Navigator>
  );
};
