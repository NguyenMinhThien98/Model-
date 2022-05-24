import * as actionTypes from './actionTypes';

export const getAccountInfoAction = (payload?) => {
  return {
    type: actionTypes.GET_ACCOUNT_INFO,
    data: payload,
  };
};

export const verifyUpdateEmail = (payload?) => {
  return {
    type: actionTypes.VERIFY_UPDATE_EMAIL,
    data: payload,
  };
};
export const updateEmailAction = (payload?) => {
  return {
    type: actionTypes.UPDATE_EMAIL,
    data: payload,
  };
};
export const verifyUpdatePhoneAction = (payload?) => {
  return {
    type: actionTypes.VERIFY_UPDATE_PHONE,
    data: payload,
  };
};
export const updatePhoneAction = (payload?) => {
  return {
    type: actionTypes.UPDATE_PHONE,
    data: payload,
  };
};
export const updateResidentialAddressAction = (payload?) => {
  return {
    type: actionTypes.UPDATE_RESIDENTIAL_ADDRESS,
    data: payload,
  };
};
