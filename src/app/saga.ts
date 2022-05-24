import {AppProvider} from './appProvider';
import {initialApp, logoutApp, updateUserInfo} from './slice';
import {call, put, takeEvery} from 'redux-saga/effects';

function* checkAuth() {
  try {
    const user = yield call(AppProvider.getUserInfo);

    yield put(updateUserInfo(user));
  } catch (error) {}
}

function* logoutFlow() {
  try {
    yield call(AppProvider.setAuth, null);
    yield call(AppProvider.setUserInfo, null);
    yield put(updateUserInfo(null));
  } catch (error) {}
}

export function* watchInitApp() {
  yield takeEvery(initialApp().type, checkAuth);
  yield takeEvery(logoutApp().type, logoutFlow);
}
