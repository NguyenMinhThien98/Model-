import {View, ViewStyle} from 'react-native';
import React, {useCallback, useState} from 'react';
import Input, {InputProps, InputRef} from 'components/Input';
import {Images} from 'assets/images';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatBirthDate} from 'utils/datetime';
import i18n from 'utils/LocalizedStrings';

interface DateProps extends Omit<InputProps, 'value'> {
  dateSelected?: Date;
  onSelect: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  pickerContainerStyle?: ViewStyle;
  inputRef?: React.RefObject<InputRef>;
}

const DatePicker = ({
  containerStyle,
  label,
  darkMode,
  parentStyle,
  dateSelected,
  onSelect,
  mode = 'date',
  pickerContainerStyle,
  inputRef,
  onValidate,
}: DateProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const onPressInput = useCallback(() => {
    setVisibleModal(preValue => !preValue);
  }, []);

  const onConfirm = useCallback(
    (date: Date) => {
      onSelect(date);
      onPressInput();
      if (inputRef) {
        setTimeout(() => {
          inputRef.current?.onValidateValue?.(formatBirthDate(date));
        }, 500);
      }
    },
    [onSelect, onPressInput, inputRef],
  );

  return (
    <View style={pickerContainerStyle}>
      <Input
        placeholder={i18n.t('personal_account.date_format')}
        label={label}
        darkMode={darkMode}
        parentStyle={parentStyle}
        containerStyle={containerStyle}
        value={formatBirthDate(dateSelected)}
        leftIcon={Images.ic_calendar}
        disable
        onPress={onPressInput}
        ref={inputRef}
        adjustsFontSizeToFit
        numberOfLines={1}
        onValidate={onValidate}
      />
      <DateTimePickerModal
        isVisible={visibleModal}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onPressInput}
      />
    </View>
  );
};
export default DatePicker;
