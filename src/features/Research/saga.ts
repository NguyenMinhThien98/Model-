import {api} from 'api/index';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  requestSearch,
  requestSearchSuccess,
  requestSearchFailure,
  requestRecent,
  requestRecentSuccess,
  requestRecentFailure,
  requestTop,
  requestTopSuccess,
  requestTopFailure,
  deleteRecent,
  deleteRecentSuccess,
  deleteRecentFailure,
} from './slide';
import * as actionTypes from './actionTypes';
import {PAGE_LIMIT} from 'config/constants';

function* searchFlow(payload) {
  try {
    yield put(requestSearch());
    const params = {
      key: payload.data.text,
      page: 1,
      limit: PAGE_LIMIT,
      filters: payload.data?.filters,
    };
    const {data, error} = yield call(api.research.search, params);
    if (data) {
      yield put(requestSearchSuccess(data?.data));
    } else {
      yield put(requestSearchFailure(error));
    }
  } catch (error) {
    yield put(requestSearchFailure(error));
  }
}

function* getRecentFlow() {
  const params = {
    page: 1,
    limit: PAGE_LIMIT,
  };
  try {
    yield put(requestRecent());
    const {data, error} = yield call(api.research.getRecentSearch, params);
    if (data) {
      yield put(requestRecentSuccess(data?.data));
    } else {
      yield put(requestRecentFailure(error));
    }
  } catch (error) {
    yield put(requestRecentFailure(error));
  }
}

function* deleteRecentFlow(payload) {
  try {
    yield put(deleteRecent());
    yield call(api.research.deleteRecentSearch, payload.id);
    yield put(deleteRecentSuccess());
    getRecentFlow();
  } catch (error) {
    yield put(deleteRecentFailure(error));
  }
}

function* getTopFlow() {
  const params = {page: 1, limit: PAGE_LIMIT};
  try {
    yield put(requestTop());
    const {data, error} = yield call(api.research.getTopSearch, params);
    if (data) {
      yield put(requestTopSuccess(data?.data));
    } else {
      yield put(requestTopFailure(error));
    }
  } catch (error) {
    yield put(requestTopFailure(error));
  }
}
export function* watchResearchRequests() {
  yield takeLatest(actionTypes.REQUEST_SEARCH, searchFlow);
  yield takeLatest(actionTypes.REQUEST_RECENT, getRecentFlow);
  yield takeLatest(actionTypes.REQUEST_DELETE_RECENT, deleteRecentFlow);
  yield takeLatest(actionTypes.REQUEST_TOP, getTopFlow);
}
