import {FilterData, Filters, TypeData} from 'models/Filters';
import {useEffect, useState} from 'react';
import {getNumber} from '../../../utils/commonHelpers';

const maxPercent: number = 100;

type Props = {
  updateFilters: (filters: Filters) => void;
};

const useFiltersSearch = ({updateFilters}: Props) => {
  const [filters, setFilters] = useState<Filters>({
    type: {isOn: false, isAll: true, isShareOnly: false, isETFsOnly: false},
    peRatio: {isOn: false, min: '0', max: '0'},
    marketCap: {isOn: false, min: '0', max: '0'},
    marketPriceShare: {isOn: false, min: '0', max: '0'},
    roeRatio: {isOn: false, min: '0', max: '0'},
    dividendYield: {isOn: false, min: '0', max: '0'},
  });

  const formatMoney = (value: string): string => {
    const _value = getNumber(value);
    return new Intl.NumberFormat().format(Number(_value));
  };

  const setMin = (value: string, min: number): string =>
    (Number(value) < min ? Number(value) : min).toString();

  const setMax = (value: string, max: number): string =>
    (Number(value) < max ? Number(value) : max).toString();

  const onChangeType = (newState: Partial<TypeData>) =>
    setFilters({...filters, type: {...filters.type, ...newState}});
  const setOnType = (value: boolean) => onChangeType({isOn: value});
  const setTypeAll = (value: boolean) =>
    onChangeType({isAll: true, isShareOnly: false, isETFsOnly: false});
  const setTypeShareOnly = (value: boolean) =>
    onChangeType({isAll: false, isShareOnly: true, isETFsOnly: false});
  const setTypeETFsOnly = (value: boolean) =>
    onChangeType({isAll: false, isShareOnly: false, isETFsOnly: true});

  const onChangePeRatio = (newState: Partial<FilterData>) =>
    setFilters({...filters, peRatio: {...filters.peRatio, ...newState}});
  const setOnPeRatio = (value: boolean) => onChangePeRatio({isOn: value});
  const setMinPeRatio = (value: string) =>
    onChangePeRatio({min: formatMoney(value)});
  const setMaxPeRatio = (value: string) =>
    onChangePeRatio({max: formatMoney(value)});

  const onChangeMarketCap = (newState: Partial<FilterData>) =>
    setFilters({...filters, marketCap: {...filters.marketCap, ...newState}});
  const setOnMarketCap = (value: boolean) => onChangeMarketCap({isOn: value});
  const setMinMarketCap = (value: string) =>
    onChangeMarketCap({min: formatMoney(value)});
  const setMaxMarketCap = (value: string) =>
    onChangeMarketCap({max: formatMoney(value)});

  const onChangeMarketPriceShare = (newState: Partial<FilterData>) =>
    setFilters({
      ...filters,
      marketPriceShare: {...filters.marketPriceShare, ...newState},
    });
  const setOnMarketPriceShare = (value: boolean) =>
    onChangeMarketPriceShare({isOn: value});
  const setMinMarketPriceShare = (value: string) =>
    onChangeMarketPriceShare({min: formatMoney(value)});
  const setMaxMarketPriceShare = (value: string) =>
    onChangeMarketPriceShare({max: formatMoney(value)});

  const onChangeRoeRatio = (newState: Partial<FilterData>) =>
    setFilters({...filters, roeRatio: {...filters.roeRatio, ...newState}});
  const setOnRoeRatioe = (value: boolean) => onChangeRoeRatio({isOn: value});
  const setMinRoeRatio = (value: string) =>
    onChangeRoeRatio({min: formatMoney(value)});
  const setMaxRoeRatio = (value: string) =>
    onChangeRoeRatio({max: setMax(value, maxPercent)});

  const onChangeDividendYield = (newState: Partial<FilterData>) =>
    setFilters({
      ...filters,
      dividendYield: {...filters.dividendYield, ...newState},
    });
  const setOnDividendYield = (value: boolean) =>
    onChangeDividendYield({isOn: value});
  const setMinDividendYield = (value: string) =>
    onChangeDividendYield({min: formatMoney(value)});
  const setMaxDividendYield = (value: string) =>
    onChangeDividendYield({max: setMin(value, maxPercent)});

  const isVisibleInfinity: boolean =
    filters.peRatio.isOn ||
    filters.marketCap.isOn ||
    filters.marketPriceShare.isOn ||
    filters.roeRatio.isOn ||
    filters.dividendYield.isOn;

  useEffect(() => {
    updateFilters(filters);
  }, [filters]);

  return {
    filters,
    setOnType,
    setTypeAll,
    setTypeShareOnly,
    setTypeETFsOnly,
    setOnPeRatio,
    setMinPeRatio,
    setMaxPeRatio,
    setOnMarketCap,
    setMinMarketCap,
    setMaxMarketCap,
    setOnMarketPriceShare,
    setMinMarketPriceShare,
    setMaxMarketPriceShare,
    setOnRoeRatioe,
    setMinRoeRatio,
    setMaxRoeRatio,
    setOnDividendYield,
    setMinDividendYield,
    setMaxDividendYield,
    isVisibleInfinity,
  };
};

export default useFiltersSearch;
