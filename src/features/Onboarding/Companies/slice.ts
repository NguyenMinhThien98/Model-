import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';
import {Stock} from 'models/Stock';

const initialState = {
  loading: <boolean>false,
  error: <Error | null>null,
  isEndList: <boolean>false,
  pageNumber: <number>1,
  stocks: <Array<Stock> | null>null,
};

const stockSlice = createSlice({
  name: 'Stocks',
  initialState,
  reducers: {
    requestGetStockList(state) {
      state.loading = true;
      state.error = null;
    },
    requestGetStockListSuccess(state, action) {
      state.loading = false;
      state.stocks = action.payload;
    },
    requestGetStockListFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updatePageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    updateEndListMark(state, action) {
      state.isEndList = action.payload;
    },
    requestCreateWatchListSuccess(state) {
      state.loading = false;
    },
  },
});

export const {
  requestGetStockList,
  requestGetStockListSuccess,
  requestGetStockListFailure,
  updatePageNumber,
  updateEndListMark,
  requestCreateWatchListSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
