import {all, fork} from 'redux-saga/effects';
import {watchInitApp} from 'app/saga';
import {watchSignUpRequests} from 'features/SignUp/saga';
import {watchSignInRequests} from 'features/SignIn/saga';
import {watchSectorRequests} from 'features/Onboarding/Sectors/saga';
import {watchStockRequests} from 'features/Onboarding/Companies/saga';
import {watchResearchRequests} from 'features/Research/saga';
import {watchAccountRequests} from 'features/TradingAccount/saga';
import {watchAccountInfoRequests} from 'features/AccountSetting/saga';

export default function* rootSaga() {
  yield all([
    fork(watchInitApp),
    fork(watchSignUpRequests),
    fork(watchSignInRequests),
    fork(watchSectorRequests),
    fork(watchStockRequests),
    fork(watchResearchRequests),
    fork(watchAccountRequests),
    fork(watchAccountInfoRequests),
  ]);
}
