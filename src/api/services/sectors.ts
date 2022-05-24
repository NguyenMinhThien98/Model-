import {request} from './base';
import {apiUrl} from '../paths';

const getSectors = params => {
  return request(apiUrl.industries, 'get', params);
};
export default {
  getSectors,
};
