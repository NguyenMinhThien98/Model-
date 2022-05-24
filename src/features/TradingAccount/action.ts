import * as actionTypes from './actionTypes';

export const createPersonalAccount = payload => {
  return {
    type: actionTypes.CREATE_PERSONAL_ACCOUNT,
    data: payload,
  };
};
