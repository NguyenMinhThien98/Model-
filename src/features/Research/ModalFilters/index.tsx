import React from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from 'assets/images';
import styles from './styles';
import useFiltersSearch, {Filters} from 'features/Research/ModalFilters/hooks';
import ItemFilter from './ItemFilter';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import globalStyles from 'assets/globalStyles';
import ItemType from 'features/Research/ModalFilters/ItemType';
import {t} from 'i18next';

type Props = {
  visible: boolean;
  onClose: () => void;
  updateFilters: (filter: Filters) => void;
};

const ModalFilters = (props: Props) => {
  const {
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
  } = useFiltersSearch({updateFilters: props.updateFilters});

  return (
    <Modal transparent visible={props.visible} animationType="none">
      <MaqroKeyboardAvoidingView>
        <View style={styles.container}>
          <SafeAreaView style={styles.safeViewContainer}>
            <View style={styles.viewMain}>
              <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <View style={styles.viewHeader}>
                  <Text style={styles.textTitle}>
                    {t('search.filter.filters')}
                  </Text>
                  <TouchableOpacity onPress={props.onClose}>
                    <Image source={Images.close} />
                  </TouchableOpacity>
                </View>
                <View style={styles.padding16}>
                  <ItemType
                    isVisibleContent={filters.type.isOn}
                    title={t('search.filter.type')}
                    valueSwitch={filters.type.isOn}
                    setValueSwitch={setOnType}
                    valueAll={filters.type.isAll}
                    valueShare={filters.type.isShareOnly}
                    valueETFs={filters.type.isETFsOnly}
                    setValueAll={setTypeAll}
                    setValueShare={setTypeShareOnly}
                    setValueETFs={setTypeETFsOnly}
                  />
                </View>
                <View style={styles.padding16}>
                  <ItemFilter
                    isVisibleContent={filters.peRatio.isOn}
                    isVisibleInfinity={isVisibleInfinity}
                    title={t('search.filter.pe_ratio')}
                    valueSwitch={filters.peRatio.isOn}
                    setValueSwitch={setOnPeRatio}
                    minValue={filters.peRatio.min}
                    setMinValue={setMinPeRatio}
                    maxValue={filters.peRatio.max}
                    setMaxValue={setMaxPeRatio}
                    suffixesText="$M"
                  />
                </View>
                <View style={styles.padding16}>
                  <ItemFilter
                    isVisibleContent={filters.marketCap.isOn}
                    title={t('search.filter.market_cap')}
                    valueSwitch={filters.marketCap.isOn}
                    setValueSwitch={setOnMarketCap}
                    minValue={filters.marketCap.min}
                    setMinValue={setMinMarketCap}
                    maxValue={filters.marketCap.max}
                    setMaxValue={setMaxMarketCap}
                    suffixesText="$M"
                  />
                </View>
                <View style={styles.padding16}>
                  <ItemFilter
                    isVisibleContent={filters.marketPriceShare.isOn}
                    title={t('search.filter.market_price_share')}
                    valueSwitch={filters.marketPriceShare.isOn}
                    setValueSwitch={setOnMarketPriceShare}
                    minValue={filters.marketPriceShare.min}
                    setMinValue={setMinMarketPriceShare}
                    maxValue={filters.marketPriceShare.max}
                    setMaxValue={setMaxMarketPriceShare}
                    suffixesText="$"
                  />
                </View>
                <View style={styles.padding16}>
                  <ItemFilter
                    isVisibleContent={filters.roeRatio.isOn}
                    title={t('search.filter.roe_ratio')}
                    valueSwitch={filters.roeRatio.isOn}
                    setValueSwitch={setOnRoeRatioe}
                    minValue={filters.roeRatio.min}
                    setMinValue={setMinRoeRatio}
                    maxValue={filters.roeRatio.max}
                    setMaxValue={setMaxRoeRatio}
                    suffixesText="%"
                  />
                </View>
                <View style={styles.padding16}>
                  <ItemFilter
                    isVisibleContent={filters.dividendYield.isOn}
                    title={t('search.filter.dividend_yield')}
                    valueSwitch={filters.dividendYield.isOn}
                    setValueSwitch={setOnDividendYield}
                    minValue={filters.dividendYield.min}
                    setMinValue={setMinDividendYield}
                    maxValue={filters.dividendYield.max}
                    setMaxValue={setMaxDividendYield}
                    suffixesText="%"
                  />
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
          <SafeAreaView style={globalStyles.bgWhite} />
        </View>
      </MaqroKeyboardAvoidingView>
    </Modal>
  );
};

export default ModalFilters;
