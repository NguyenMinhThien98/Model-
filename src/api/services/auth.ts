import {request} from './base';
import {apiUrl} from '../paths';

const signIn = params => {
  return request(apiUrl.signIn, 'post', params);
};

const signUp = params => {
  return request(apiUrl.signUp, 'post', params);
};

const verifyEmail = params => {
  return request(apiUrl.verifyEmail, 'post', params);
};

const forgotPassword = params => {
  return request(apiUrl.forgotPassword, 'post', params);
};

const resetPassword = params => {
  return request(apiUrl.resetPassword, 'patch', params);
};

const resendOtp = params => {
  return request(apiUrl.resendOtp, 'post', params);
};

export default {
  signIn,
  signUp,
  verifyEmail,
  forgotPassword,
  resetPassword,
  resendOtp,
};
