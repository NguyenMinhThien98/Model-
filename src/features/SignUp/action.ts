import * as actionTypes from './actionTypes';

export const signUpAction = payload => {
  return {
    type: actionTypes.REQUEST_SIGN_UP,
    data: payload,
  };
};

export const verifyCodeAction = payload => {
  return {
    type: actionTypes.VERIFY_CODE,
    data: payload,
  };
};

export const resendOtp = payload => {
  return {
    type: actionTypes.RESEND_OTP_SIGN_UP,
    data: payload,
  };
};
