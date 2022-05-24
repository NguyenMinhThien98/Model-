import * as actionTypes from './actionTypes';

export const getStockListAction = payload => {
  return {
    type: actionTypes.GET_STOCK_LIST,
    data: payload,
  };
};

export const createWatchListAction = payload => {
  return {
    type: actionTypes.CREATE_WATCH_LIST,
    data: payload,
  };
};
