import * as actionTypes from './actionTypes';

export const getSectorListAction = payload => {
  return {
    type: actionTypes.GET_SECTOR_LIST,
    data: payload,
  };
};
