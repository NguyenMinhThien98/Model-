import {View, Text, TouchableOpacity, Image, ViewStyle} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Input, {InputProps} from 'components/Input';
import {Images} from 'assets/images';
import AppModal from 'components/Modal';
import styles from './styles';
import Button from 'components/Button';
import i18n from 'utils/LocalizedStrings';

export interface DropDownItem {
  label: string;
  value: string;
  resultDisplay?: string;
  data?: any;
}
interface DropDownProps extends Omit<InputProps, 'value'> {
  data: Array<DropDownItem>;
  title?: string;
  itemSelected: DropDownItem;
  onSelect: (item: DropDownItem) => void;
  dropdownStyle?: ViewStyle;
}

const DropDown = ({
  placeholder,
  containerStyle,
  label,
  darkMode,
  parentStyle,
  itemSelected,
  title,
  data,
  onSelect,
  dropdownStyle,
  editable = true,
}: DropDownProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [highLightItem, setHighLightItem] =
    useState<DropDownItem>(itemSelected);

  useEffect(() => {
    setHighLightItem(itemSelected);
  }, [itemSelected]);

  const onPressInput = useCallback(() => {
    if (editable) {
      setVisibleModal(preValue => !preValue);
    }
  }, [editable]);

  const onSelectItem = useCallback(item => {
    setHighLightItem(item);
  }, []);

  const onPressSelect = useCallback(() => {
    onSelect(highLightItem);
    onPressInput();
  }, [onSelect, onPressInput, highLightItem]);

  return (
    <View style={dropdownStyle}>
      <Input
        placeholder={placeholder}
        label={label}
        darkMode={darkMode}
        parentStyle={parentStyle}
        containerStyle={containerStyle}
        value={itemSelected?.resultDisplay || itemSelected.label}
        rightIcon={Images.ic_caret_down}
        disable
        onPress={onPressInput}
      />
      <AppModal
        modalVisible={visibleModal}
        darkMode={darkMode}
        onBackdropPress={onPressInput}
        modalStyle={styles.modalStyle}
        containerStyle={styles.modalContainerStyle}
        backdropStyle={styles.backdropStyle}
        renderBottomComponent={() => (
          <View style={[styles.buttonView, darkMode && styles.buttonViewDark]}>
            <Button
              title={i18n.t('personal_account.select')}
              containerStyle={styles.selectButton}
              onPress={onPressSelect}
            />
          </View>
        )}>
        <>
          <Text style={[styles.textLightMode, darkMode && styles.title]}>
            {title}
          </Text>
          <View
            style={[styles.separatorLightMode, darkMode && styles.separator]}
          />
          {data.map(item => {
            if (item) {
              return (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    styles.itemContainer,
                    item.value === highLightItem?.value &&
                      (darkMode && styles.selectedContainer,
                      styles.selectedLightModeContainer),
                  ]}
                  onPress={() => onSelectItem(item)}>
                  <Text
                    style={[styles.content, darkMode && styles.darkContent]}>
                    {item.label}
                  </Text>
                  {item.value === highLightItem?.value && (
                    <Image source={Images.ic_check_no_bg} />
                  )}
                </TouchableOpacity>
              );
            }
          })}
        </>
      </AppModal>
    </View>
  );
};
export default DropDown;
