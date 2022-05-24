import * as actionTypes from './actionTypes';

export const searchAction = payload => {
  return {
    type: actionTypes.REQUEST_SEARCH,
    data: payload,
  };
};

export const getRecentAction = () => {
  return {
    type: actionTypes.REQUEST_RECENT,
  };
};

export const deleteRecent = (id: number) => {
  return {
    type: actionTypes.REQUEST_DELETE_RECENT,
    id,
  };
};

export const getTopAction = () => {
  return {
    type: actionTypes.REQUEST_TOP,
  };
};
