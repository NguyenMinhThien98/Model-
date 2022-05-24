import {api} from 'api/index';
import {updateSignUpData} from 'app/slice';
import {PAGE_LIMIT} from 'config/constants';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import {
  requestCreateWatchListSuccess,
  requestGetStockList,
  requestGetStockListFailure,
  requestGetStockListSuccess,
  updateEndListMark,
  updatePageNumber,
} from './slice';

function* getStocksFlow(payload) {
  try {
    const {pageNumber, stocks} = yield select(state => state.stocks);

    let page = pageNumber;
    if (payload.data?.isRefresh) {
      page = 1;
      yield put(updateEndListMark(false));
      yield put(updatePageNumber(page));
    }

    yield put(requestGetStockList());

    const params = {
      page: page,
      limit: PAGE_LIMIT,
      industryIds: payload.data?.industryIds ?? undefined,
    };

    const {data, error} = yield call(api.companies.getCompanies, params);

    if (data) {
      if (data?.data?.length < PAGE_LIMIT) {
        yield put(updateEndListMark(true));
      }
      yield put(updatePageNumber(page + 1));

      const newList = page === 1 ? data.data : [...stocks, ...data.data];

      yield put(requestGetStockListSuccess(newList));
    } else {
      yield put(requestGetStockListFailure(error));
    }
  } catch (error) {
    yield put(requestGetStockListFailure(error));
  }
}

function* createWatchListFlow(payload) {
  try {
    yield put(requestGetStockList());
    const {data, error} = yield call(
      api.watchlist.createWatchList,
      payload.data,
    );

    if (data) {
      yield put(updateSignUpData(false));
      yield put(requestCreateWatchListSuccess());
    } else {
      yield put(requestGetStockListFailure(error));
    }
  } catch (error) {
    yield put(requestGetStockListFailure(error));
  }
}

export function* watchStockRequests() {
  yield takeLatest(actionTypes.GET_STOCK_LIST, getStocksFlow);
  yield takeLatest(actionTypes.CREATE_WATCH_LIST, createWatchListFlow);
}
