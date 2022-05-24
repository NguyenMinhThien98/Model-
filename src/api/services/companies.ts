import {request} from './base';
import {apiUrl} from '../paths';

const getCompanies = params => {
  return request(apiUrl.companies, 'get', {
    ...params,
    industryIds: JSON.stringify(params.industryIds),
  });
};
export default {
  getCompanies,
};
