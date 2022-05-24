import {request} from './base';
import {apiUrl} from '../paths';

const createWatchList = companyIds => {
  return request(apiUrl.watchlist, 'post', {
    companyIds,
  });
};
export default {
  createWatchList,
};
