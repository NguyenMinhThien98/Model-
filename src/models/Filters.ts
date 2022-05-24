export type Filters = {
  type: TypeData;
  peRatio: FilterData;
  marketCap: FilterData;
  marketPriceShare: FilterData;
  roeRatio: FilterData;
  dividendYield: FilterData;
};

export type TypeData = {
  isOn: boolean;
  isAll: boolean;
  isShareOnly: boolean;
  isETFsOnly: boolean;
};

export type FilterData = {
  isOn: boolean;
  min: string;
  max: string;
};
