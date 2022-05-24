import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';

const initialState = {
  loading: <boolean>false,
  error: <Error | null>null,
  stepNumber: <number>1,
};

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    requestSignIn(state) {
      state.loading = true;
      state.error = null;
    },
    requestSignInSuccess(state) {
      state.loading = false;
    },
    requestSignInFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateStepNumber(state, action) {
      state.loading = false;
      state.stepNumber = action.payload;
    },
    resetSignInData() {
      return initialState;
    },
  },
});

export const {
  requestSignIn,
  requestSignInFailure,
  requestSignInSuccess,
  updateStepNumber,
  resetSignInData,
} = signInSlice.actions;

export default signInSlice.reducer;
