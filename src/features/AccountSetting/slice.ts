import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';

const initialState = {
  accountInfo: <any>null,
  loading: <boolean>false,
  errorGetInfo: <Error | null>null,
  isRequestSuccess: <boolean>false,
  errorVerify: <Error | null>null,
  isVerifySuccess: <boolean>false,
  isUpdateEmailSuccess: <boolean>false,
  errorUpdateEmail: <Error | null>null,
  isUpdatePhoneSuccess: <boolean>false,
  errorUpdatePhone: <Error | null>null,
  isVerifyPhoneSuccess: <boolean>false,
  errorVerifyPhone: <Error | null>null,
  errorUpdateResidentialAddress: <Error | null>null,
  isUpdateResidentialAddressSuccess: <boolean>false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    requestGetAccountInfo(state) {
      state.loading = true;
      state.errorGetInfo = null;
      state.isRequestSuccess = false;
    },
    requestGetAccountInfoSuccess(state) {
      state.loading = false;
      state.isRequestSuccess = true;
    },
    requestGetAccountInfoFailure(state, action) {
      state.loading = false;
      state.errorGetInfo = action.payload;
    },
    updateAccountInfo(state, action) {
      state.accountInfo = action.payload;
    },
    updateAccountInfoField(state, action) {
      state.accountInfo[action.payload?.field] = action.payload?.value;
    },
    requestVerifyEmail(state) {
      state.loading = true;
      state.errorVerify = null;
      state.isVerifySuccess = false;
    },
    requestVerifyEmailSuccess(state) {
      state.loading = false;
      state.isVerifySuccess = true;
    },
    requestVerifyEmailFailure(state, action) {
      state.loading = false;
      state.errorVerify = action.payload;
    },
    requestUpdateEmail(state) {
      state.loading = true;
      state.errorVerify = null;
      state.isUpdateEmailSuccess = false;
    },
    requestUpdateEmailSuccess(state) {
      state.loading = false;
      state.isUpdateEmailSuccess = true;
    },
    requestUpdateEmailFailure(state, action) {
      state.loading = false;
      state.isUpdateEmailSuccess = false;
      state.errorUpdateEmail = action.payload;
    },
    resetUpdateEmail(state) {
      state.loading = false;
      state.errorUpdateEmail = null;
      state.isUpdateEmailSuccess = false;
    },
    requestVerifyPhone(state) {
      state.loading = true;
      state.errorVerifyPhone = null;
      state.isVerifyPhoneSuccess = false;
    },
    requestVerifyPhoneSuccess(state) {
      state.loading = false;
      state.isVerifyPhoneSuccess = true;
    },
    requestVerifyPhoneFailure(state, action) {
      state.loading = false;
      state.isVerifyPhoneSuccess = false;
      state.errorVerifyPhone = action.payload;
    },
    resetVerifyPhone(state) {
      state.loading = false;
      state.errorVerifyPhone = null;
      state.isVerifyPhoneSuccess = false;
    },
    requestUpdatePhone(state) {
      state.loading = true;
      state.errorUpdatePhone = null;
      state.isUpdatePhoneSuccess = false;
    },
    requestUpdatePhoneSuccess(state) {
      state.loading = false;
      state.isUpdatePhoneSuccess = true;
    },
    requestUpdatePhoneFailure(state, action) {
      state.loading = false;
      state.isUpdatePhoneSuccess = false;
      state.errorUpdatePhone = action.payload;
    },
    resetUpdatePhone(state) {
      state.loading = false;
      state.errorUpdatePhone = null;
      state.isUpdatePhoneSuccess = false;
    },
    requestUpdateResidentialAddress(state) {
      state.loading = true;
      state.errorUpdateResidentialAddress = null;
      state.isUpdatePhoneSuccess = false;
    },
    requestUpdateResidentialAddressSuccess(state) {
      state.loading = false;
      state.isUpdateResidentialAddressSuccess = true;
    },
    requestUpdateResidentialAddressFailure(state, action) {
      state.loading = false;
      state.isUpdateResidentialAddressSuccess = false;
      state.errorUpdateResidentialAddress = action.payload;
    },
    resetUpdateResidentialAddress(state) {
      state.loading = false;
      state.errorUpdateResidentialAddress = null;
      state.isUpdateResidentialAddressSuccess = false;
    },
  },
});

export const {
  requestGetAccountInfo,
  requestGetAccountInfoSuccess,
  requestGetAccountInfoFailure,
  updateAccountInfo,
  updateAccountInfoField,
  requestVerifyEmail,
  requestVerifyEmailFailure,
  requestVerifyEmailSuccess,
  requestUpdateEmail,
  requestUpdateEmailSuccess,
  requestUpdateEmailFailure,
  resetUpdateEmail,
  requestVerifyPhone,
  requestVerifyPhoneSuccess,
  requestVerifyPhoneFailure,
  resetVerifyPhone,
  requestUpdatePhone,
  requestUpdatePhoneSuccess,
  requestUpdatePhoneFailure,
  resetUpdatePhone,
  requestUpdateResidentialAddress,
  requestUpdateResidentialAddressSuccess,
  requestUpdateResidentialAddressFailure,
  resetUpdateResidentialAddress,
} = accountSlice.actions;

export default accountSlice.reducer;
