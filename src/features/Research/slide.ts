import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';
import {ItemRecent, ItemResultSearch} from '../../models/ItemResultSearch';

const initialState = {
  loading: <boolean>false,
  resultSearches: <Array<ItemResultSearch>>[],
  recentSearches: <Array<ItemRecent>>[],
  topSearches: <Array<any>>[],
  error: <Error | null>null,
  isUpdate: <boolean>false,
};

const researchSlice = createSlice({
  name: 'research',
  initialState,
  reducers: {
    //search
    requestSearch(state) {
      state.loading = true;
      state.error = null;
    },
    requestSearchSuccess(state, action) {
      state.loading = false;
      state.resultSearches = action.payload;
    },
    requestSearchFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    //get Recent
    requestRecent(state) {
      state.loading = true;
      state.error = null;
    },
    requestRecentSuccess(state, action) {
      state.recentSearches = action.payload;
      state.isUpdate = false;
      state.loading = false;
    },
    requestRecentFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    //delete Recent
    deleteRecent(state) {
      state.loading = true;
      state.error = null;
    },
    deleteRecentSuccess(state) {
      state.loading = false;
      state.isUpdate = true;
    },
    deleteRecentFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    //get top search
    requestTop(state) {
      state.loading = true;
      state.error = null;
    },
    requestTopSuccess(state, action) {
      state.topSearches = action.payload;
      state.loading = false;
    },
    requestTopFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  requestSearch,
  requestSearchSuccess,
  requestSearchFailure,
  requestRecent,
  requestRecentSuccess,
  requestRecentFailure,
  deleteRecent,
  deleteRecentSuccess,
  deleteRecentFailure,
  requestTop,
  requestTopSuccess,
  requestTopFailure,
} = researchSlice.actions;

export default researchSlice.reducer;
