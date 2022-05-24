import {api} from 'api/index';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  requestGetAccountInfo,
  requestGetAccountInfoFailure,
  requestGetAccountInfoSuccess,
  requestUpdateEmail,
  requestUpdateEmailFailure,
  requestUpdateEmailSuccess,
  requestUpdatePhone,
  requestUpdatePhoneFailure,
  requestUpdatePhoneSuccess,
  requestUpdateResidentialAddress,
  requestUpdateResidentialAddressFailure,
  requestUpdateResidentialAddressSuccess,
  requestVerifyEmail,
  requestVerifyEmailFailure,
  requestVerifyEmailSuccess,
  requestVerifyPhone,
  requestVerifyPhoneFailure,
  requestVerifyPhoneSuccess,
  updateAccountInfo,
} from './slice';
import * as actionTypes from './actionTypes';
import {showMessage} from 'react-native-flash-message';
import i18n from 'utils/LocalizedStrings';

function* getAccountInfoFlow() {
  try {
    yield put(requestGetAccountInfo());
    const {data, error} = yield call(api.account.getAccountInfo);
    if (data) {
      yield put(requestGetAccountInfoSuccess());
      yield put(updateAccountInfo(data));
    } else {
      yield put(requestGetAccountInfoFailure(error));
    }
  } catch (error) {
    yield put(requestGetAccountInfoFailure(error));
  }
}
function* verifyUpdateEmailFlow(payload) {
  try {
    yield put(requestVerifyEmail());
    const {data, error} = yield call(
      api.account.verifyUpdateEmail,
      payload.data,
    );
    if (data) {
      yield put(requestVerifyEmailSuccess());
    } else {
      yield put(requestVerifyEmailFailure(error));
    }
  } catch (error) {
    yield put(requestVerifyEmailFailure(error));
  }
}
function* updateEmailFlow(payload) {
  try {
    yield put(requestUpdateEmail());
    const {data, error} = yield call(api.account.updateEmail, payload.data);
    if (data) {
      yield put(requestUpdateEmailSuccess());
    } else {
      yield put(requestUpdateEmailFailure(error));
      showMessage({
        message: error?.message ?? i18n.t('error_message.unknown_error'),
        type: 'danger',
      });
    }
  } catch (error) {
    yield put(requestUpdateEmailFailure(error));
  }
}

function* verifyUpdatePhoneFlow(payload) {
  try {
    yield put(requestVerifyPhone());
    const {data, error} = yield call(
      api.account.verifyUpdatePhone,
      payload.data,
    );
    if (data) {
      yield put(requestVerifyPhoneSuccess());
    } else {
      yield put(requestVerifyPhoneFailure(error));
      showMessage({
        message: error?.message ?? i18n.t('error_message.unknown_error'),
        type: 'danger',
      });
    }
  } catch (error) {
    yield put(requestVerifyPhoneFailure(error));
  }
}

function* updatePhoneFlow(payload) {
  try {
    yield put(requestUpdatePhone());
    const {data, error} = yield call(api.account.updatePhone, payload.data);
    if (data) {
      yield put(requestUpdatePhoneSuccess());
    } else {
      yield put(requestUpdatePhoneFailure(error));
      showMessage({
        message: error?.message ?? i18n.t('error_message.unknown_error'),
        type: 'danger',
      });
    }
  } catch (error) {
    yield put(requestUpdatePhoneFailure(error));
  }
}
function* updateResidentialAddressFlow(payload) {
  try {
    yield put(requestUpdateResidentialAddress());
    const {data, error} = yield call(
      api.account.updateResidentialAddress,
      payload.data,
    );
    if (data) {
      yield put(requestUpdateResidentialAddressSuccess());
    } else {
      yield put(requestUpdateResidentialAddressFailure(error));
      showMessage({
        message: error?.message ?? i18n.t('error_message.unknown_error'),
        type: 'danger',
      });
    }
  } catch (error) {
    yield put(requestUpdateResidentialAddressFailure(error));
  }
}

export function* watchAccountInfoRequests() {
  yield takeLatest(actionTypes.GET_ACCOUNT_INFO, getAccountInfoFlow);
  yield takeLatest(actionTypes.VERIFY_UPDATE_EMAIL, verifyUpdateEmailFlow);
  yield takeLatest(actionTypes.UPDATE_EMAIL, updateEmailFlow);
  yield takeLatest(actionTypes.VERIFY_UPDATE_PHONE, verifyUpdatePhoneFlow);
  yield takeLatest(actionTypes.UPDATE_PHONE, updatePhoneFlow);
  yield takeLatest(
    actionTypes.UPDATE_RESIDENTIAL_ADDRESS,
    updateResidentialAddressFlow,
  );
}
