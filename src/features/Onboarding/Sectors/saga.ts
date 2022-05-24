import {api} from 'api/index';
import {PAGE_LIMIT} from 'config/constants';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import {
  requestGetSectorList,
  requestGetSectorListFailure,
  requestGetSectorListSuccess,
  updateEndListMark,
  updatePageNumber,
} from './slice';

function* getSectorsFlow(payload) {
  try {
    const {pageNumber, sectors} = yield select(state => state.sectors);

    let page = pageNumber;
    if (payload.data?.isRefresh) {
      page = 1;
      yield put(updateEndListMark(false));
      yield put(updatePageNumber(page));
    }

    yield put(requestGetSectorList());

    const params = {
      page: page,
      limit: PAGE_LIMIT,
    };

    const {data, error} = yield call(api.sectors.getSectors, params);

    if (data) {
      if (data?.data?.length < PAGE_LIMIT) {
        yield put(updateEndListMark(true));
      }
      yield put(updatePageNumber(page + 1));

      const newList = page === 1 ? data.data : [...sectors, ...data.data];

      yield put(requestGetSectorListSuccess(newList));
    } else {
      yield put(requestGetSectorListFailure(error));
    }
  } catch (error) {
    yield put(requestGetSectorListFailure(error));
  }
}

export function* watchSectorRequests() {
  yield takeLatest(actionTypes.GET_SECTOR_LIST, getSectorsFlow);
}
