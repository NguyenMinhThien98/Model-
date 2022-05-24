import {api} from 'api/index';
import {ACCOUNT_TYPE} from 'config/constants';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import {
  requestActionFailed,
  requestActionStart,
  requestCreateAccountSuccess,
} from './slide';

function* createPersonalAccount(payload) {
  try {
    yield put(requestActionStart());
    const accountType = yield select(state => state.tradingAccount.accountType);
    let apiAccout;
    switch (accountType) {
      case ACCOUNT_TYPE.PERSONAL:
        apiAccout = api.account.createPersonalAccount;
        break;
      case ACCOUNT_TYPE.COMPANY:
        apiAccout = api.account.createCompanyAccount;
        break;
      default:
        break;
    }

    const {data, error} = yield call(apiAccout, payload.data);
    if (data) {
      yield put(requestCreateAccountSuccess());
    } else {
      yield put(requestActionFailed(error));
    }
  } catch (error) {
    yield put(requestActionFailed(error));
  }
}

export function* watchAccountRequests() {
  yield takeLatest(actionTypes.CREATE_PERSONAL_ACCOUNT, createPersonalAccount);
}
