import appReducer from 'app/slice';
import signUpReducer from 'features/SignUp/slice';
import signInReducer from 'features/SignIn/slice';
import sectorsReducer from 'features/Onboarding/Sectors/slice';
import stocksReducer from 'features/Onboarding/Companies/slice';
import researchReducer from 'features/Research/slide';
import tradingAccountReducer from 'features/TradingAccount/slide';
import accountReducer from 'features/AccountSetting/slice';

const rootReducer = {
  app: appReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  sectors: sectorsReducer,
  stocks: stocksReducer,
  research: researchReducer,
  tradingAccount: tradingAccountReducer,
  account: accountReducer,
};

export default rootReducer;
