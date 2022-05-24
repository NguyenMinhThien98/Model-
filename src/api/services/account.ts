import {request} from './base';
import {apiUrl} from '../paths';

const createPersonalAccount = params => {
  return request(apiUrl.personalAccount, 'post', params);
};

const getAccountInfo = (params?) => {
  return request(apiUrl.getAccountInfo, 'get', params);
};
const createCompanyAccount = params => {
  return request(apiUrl.companyAccount, 'post', params);
};

const verifyUpdateEmail = params => {
  return request(apiUrl.verifyUpdateEmail, 'post', params);
};

const updateEmail = params => {
  return request(apiUrl.updateEmail, 'patch', params);
};

const verifyUpdatePhone = params => {
  return request(apiUrl.verifyUpdatePhone, 'post', params);
};

const updatePhone = params => {
  return request(apiUrl.updatePhone, 'patch', params);
};

const updateResidentialAddress = params => {
  return request(apiUrl.updateResidentialAddress, 'put', params);
};

export default {
  createPersonalAccount,
  getAccountInfo,
  createCompanyAccount,
  verifyUpdateEmail,
  updateEmail,
  verifyUpdatePhone,
  updatePhone,
  updateResidentialAddress,
};
