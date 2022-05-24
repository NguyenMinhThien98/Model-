import {createSlice} from '@reduxjs/toolkit';
import {Error} from 'models/Error';
import {Sector} from 'models/Sector';

const initialState = {
  loading: <boolean>false,
  error: <Error | null>null,
  isEndList: <boolean>false,
  pageNumber: <number>1,
  sectors: <Array<Sector> | null>null,
};

const sectorSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
    requestGetSectorList(state) {
      state.loading = true;
      state.error = null;
    },
    requestGetSectorListSuccess(state, action) {
      state.loading = false;
      state.sectors = action.payload;
    },
    requestGetSectorListFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updatePageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    updateEndListMark(state, action) {
      state.isEndList = action.payload;
    },
  },
});

export const {
  requestGetSectorList,
  requestGetSectorListSuccess,
  requestGetSectorListFailure,
  updatePageNumber,
  updateEndListMark,
} = sectorSlice.actions;

export default sectorSlice.reducer;
