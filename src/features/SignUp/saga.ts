import {api} from 'api/index';
import {AppProvider} from 'app/appProvider';
import {updateSignUpData, updateUserInfo} from 'app/slice';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  requestSignUp,
  requestSignUpFailure,
  requestSignUpSuccess,
  requestVerifyCode,
  requestVerifyCodeFailure,
  requestVerifyCodeSuccess,
} from './slice';
import * as actionTypes from './actionTypes';
import {showMessage} from 'react-native-flash-message';
import i18n from 'utils/LocalizedStrings';

function* signUpFlow(payload) {
  try {
    yield put(requestSignUp());
    const {data, error} = yield call(api.auth.signUp, payload.data);
    if (data) {
      yield call(AppProvider.setAuth, data.token);
      yield put(requestSignUpSuccess());
    } else {
      yield put(requestSignUpFailure(error));
    }
  } catch (error) {
    yield put(requestSignUpFailure(error));
  }
}

function* verifyCodeFlow(payload) {
  try {
    yield put(requestVerifyCode());
    const {data, error} = yield call(api.auth.verifyEmail, payload.data);
    if (data) {
      yield put(updateSignUpData(true));
      yield call(AppProvider.setUserInfo, data);
      yield put(updateUserInfo(data));
      yield put(requestVerifyCodeSuccess());
    } else {
      yield put(requestVerifyCodeFailure(error));
    }
  } catch (error) {
    yield put(requestVerifyCodeFailure(error));
  }
}

function* resendOtpFlow(payload) {
  try {
    yield put(requestVerifyCode());
    const {data, error} = yield call(api.auth.resendOtp, payload.data);
    if (data) {
      yield put(requestVerifyCodeSuccess());
      showMessage({
        message: i18n.t('error_message.sent_email'),
        type: 'success',
      });
    } else {
      yield put(requestVerifyCodeFailure(error));
    }
  } catch (error) {
    yield put(requestVerifyCodeFailure(error));
  }
}

export function* watchSignUpRequests() {
  yield takeLatest(actionTypes.REQUEST_SIGN_UP, signUpFlow);
  yield takeLatest(actionTypes.VERIFY_CODE, verifyCodeFlow);
  yield takeLatest(actionTypes.RESEND_OTP_SIGN_UP, resendOtpFlow);
}
