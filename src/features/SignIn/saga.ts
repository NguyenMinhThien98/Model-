import {api} from 'api/index';
import {AppProvider} from 'app/appProvider';
import {updateUserInfo} from 'app/slice';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  requestSignIn,
  requestSignInFailure,
  requestSignInSuccess,
  updateStepNumber,
} from './slice';
import * as actionTypes from './actionTypes';
import {showMessage} from 'react-native-flash-message';
import i18n from 'utils/LocalizedStrings';

function* signInFlow(payload) {
  try {
    yield put(requestSignIn());
    const {data, error} = yield call(api.auth.signIn, payload.data.params);
    if (data) {
      yield put(updateUserInfo(data));
      yield call(AppProvider.setAuth, data.token);
      if (payload.data.isRemember) {
        yield call(AppProvider.setUserInfo, data);
      }
      yield put(requestSignInSuccess());
    } else {
      yield put(requestSignInFailure(error));
    }
  } catch (error) {
    yield put(requestSignInFailure(error));
  }
}

function* forgotPasswordFlow(payload) {
  try {
    yield put(requestSignIn());
    const {data, error} = yield call(api.auth.forgotPassword, payload.data);
    if (data) {
      yield call(AppProvider.setAuth, data.token);
      yield put(updateStepNumber(2));
    } else {
      yield put(requestSignInFailure(error));
    }
  } catch (error) {
    yield put(requestSignInFailure(error));
  }
}

function* resendOtpForgotPasswordFlow(payload) {
  try {
    yield put(requestSignIn());
    const {data, error} = yield call(api.auth.resendOtp, payload.data);
    if (data) {
      yield put(requestSignInSuccess());
      showMessage({
        message: i18n.t('error_message.sent_email'),
        type: 'success',
      });
    } else {
      yield put(requestSignInFailure(error));
    }
  } catch (error) {
    yield put(requestSignInFailure(error));
  }
}

function* resetPasswordFlow(payload) {
  try {
    yield put(requestSignIn());
    const {data, error} = yield call(api.auth.resetPassword, payload.data);
    if (data) {
      yield put(updateStepNumber(4));
    } else {
      yield put(requestSignInFailure(error));
    }
  } catch (error) {
    yield put(requestSignInFailure(error));
  }
}

function* verifyForgotPasswordFlow(payload) {
  try {
    yield put(requestSignIn());
    const {data, error} = yield call(api.auth.verifyEmail, payload.data);
    if (data) {
      yield put(updateStepNumber(3));
    } else {
      yield put(requestSignInFailure(error));
    }
  } catch (error) {
    yield put(requestSignInFailure(error));
  }
}

export function* watchSignInRequests() {
  yield takeLatest(actionTypes.REQUEST_LOGIN, signInFlow);
  yield takeLatest(actionTypes.FORGOT_PASSWORD, forgotPasswordFlow);
  yield takeLatest(
    actionTypes.RESEND_OTP_FORGOT_PASSWORD,
    resendOtpForgotPasswordFlow,
  );
  yield takeLatest(actionTypes.RESET_PASSWORD, resetPasswordFlow);
  yield takeLatest(
    actionTypes.VERIFY_FORGOT_PASSWORD,
    verifyForgotPasswordFlow,
  );
}
