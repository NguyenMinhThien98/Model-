import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {useCallback} from 'react';
import {InputProps} from 'components/Input';
import i18n from 'utils/LocalizedStrings';
import countryList from './country.json';
import DropDown, {DropDownItem} from 'components/Dropdown';
interface CountryProps extends Omit<InputProps, 'value'> {
  countrySelected: DropDownItem;
  onSelect: (country: DropDownItem) => void;
  pickerContainerStyle?: ViewStyle;
  title?: string;
}

const AppCountryPicker = ({
  containerStyle,
  label,
  darkMode,
  parentStyle,
  countrySelected,
  onSelect,
  pickerContainerStyle,
  title = i18n.t('review.select_country'),
}: CountryProps) => {
  const onSelectCountry = useCallback(
    country => {
      onSelect(country);
    },
    [onSelect],
  );

  return (
    <View style={[styles.container, pickerContainerStyle]}>
      <DropDown
        title={title}
        label={label}
        darkMode={darkMode}
        parentStyle={parentStyle}
        containerStyle={containerStyle}
        onSelect={onSelectCountry}
        data={countryList}
        itemSelected={countrySelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppCountryPicker;
