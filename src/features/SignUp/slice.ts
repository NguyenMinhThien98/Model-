import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';

const initialState = {
  loading: <boolean>false,
  error: <Error | null>null,
  isSignUpSuccess: false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    requestSignUp(state) {
      state.loading = true;
      state.error = null;
      state.isSignUpSuccess = false;
    },
    requestSignUpSuccess(state) {
      state.loading = false;
      state.isSignUpSuccess = true;
    },
    requestSignUpFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    requestVerifyCode(state) {
      state.loading = true;
      state.error = null;
    },
    requestVerifyCodeSuccess(state) {
      state.loading = false;
    },
    requestVerifyCodeFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    resetSignUpData() {
      return initialState;
    },
  },
});

export const {
  requestSignUp,
  requestSignUpFailure,
  requestSignUpSuccess,
  requestVerifyCode,
  requestVerifyCodeFailure,
  requestVerifyCodeSuccess,
  resetSignUpData,
} = signUpSlice.actions;

export default signUpSlice.reducer;
