import {request} from './base';
import {apiUrl} from '../paths';
import {Filters} from '../../models/Filters';
import {getNumber} from '../../utils/commonHelpers';

const search = params => {
  const filters: Filters = params.filters;
  const {
    type: _type,
    peRatio,
    marketCap: mCap,
    marketPriceShare: mpShare,
    roeRatio,
    dividendYield: dYield,
  }: Filters = params.filters;
  const type = _type.isETFsOnly
    ? 'ETFsOnly'
    : _type.isShareOnly
    ? 'ShareOnly'
    : 'All';

  const pe = peRatio.isOn
    ? {from: getNumber(peRatio.min), to: getNumber(peRatio.max)}
    : '';
  const marketCap = mCap.isOn
    ? {from: getNumber(mCap.min), to: getNumber(mCap.max)}
    : '';
  const marketRiceShare = filters.marketPriceShare.isOn
    ? {from: getNumber(mpShare.min), to: getNumber(mpShare.max)}
    : '';

  const roe = roeRatio.isOn
    ? {from: getNumber(roeRatio.min), to: getNumber(roeRatio.max)}
    : '';

  const dividendYield = filters.roeRatio.isOn
    ? {from: getNumber(dYield.min), to: getNumber(dYield.max)}
    : '';

  const filter = {
    type,
    pe,
    marketCap,
    marketRiceShare,
    roe,
    dividendYield,
  };

  const filterParams = {
    ...params,
    filters: JSON.stringify(filter),
  };
  return request(apiUrl.search(filterParams), 'get', null);
};

const getRecentSearch = params => {
  return request(apiUrl.getRecentSearch(params), 'get', null);
};

const deleteRecentSearch = id => {
  return request(apiUrl.deleteRecentSearch(id), 'delete', null);
};

const getTopSearch = params => {
  return request(apiUrl.getTopSearch(params), 'get', null);
};

export default {
  search,
  getRecentSearch,
  getTopSearch,
  deleteRecentSearch,
};
