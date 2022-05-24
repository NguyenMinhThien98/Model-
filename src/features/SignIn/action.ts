import * as actionTypes from './actionTypes';

export const logInAction = payload => {
  return {
    type: actionTypes.REQUEST_LOGIN,
    data: payload,
  };
};

export const forgotPasswordAction = payload => {
  return {
    type: actionTypes.FORGOT_PASSWORD,
    data: payload,
  };
};

export const resendOtpForgotAction = payload => {
  return {
    type: actionTypes.RESEND_OTP_FORGOT_PASSWORD,
    data: payload,
  };
};

export const resetPasswordAction = payload => {
  return {
    type: actionTypes.RESET_PASSWORD,
    data: payload,
  };
};

export const verifyForgotPasswordAction = payload => {
  return {
    type: actionTypes.VERIFY_FORGOT_PASSWORD,
    data: payload,
  };
};
