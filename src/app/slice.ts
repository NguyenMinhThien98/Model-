import {createSlice} from '@reduxjs/toolkit';
import {User} from 'models/User';

const initialState = {
  userInfo: <User | null>null,
  isUsingTrade: <boolean>true,
  isSignUpAccount: <boolean>false,
  disableMessage: <boolean>false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initialApp() {},
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    updatePurPoseUsingApp(state, action) {
      state.isUsingTrade = action.payload;
    },
    updateSignUpData(state, action) {
      state.isSignUpAccount = action.payload;
    },
    logoutApp() {},
    updateShowMessage(state, action) {
      state.disableMessage = action.payload;
    },
  },
});

export const {
  initialApp,
  updateUserInfo,
  updatePurPoseUsingApp,
  updateSignUpData,
  logoutApp,
  updateShowMessage,
} = appSlice.actions;

export default appSlice.reducer;
