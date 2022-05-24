import {TextInput, View, Text, ViewStyle} from 'react-native';
import React, {Ref} from 'react';
import styles from './styles';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

interface OtpProps {
  value: string;
  onChangeText?: (value: string) => void;
  modalRef?: Ref<TextInput>;
  customCellStyles?: ViewStyle;
  customFocusCellStyles?: ViewStyle;
  autoFocus?: boolean;
}

const CELL_COUNT: number = 6;

const OtpInput = ({
  value,
  onChangeText,
  modalRef,
  customCellStyles,
  customFocusCellStyles,
  autoFocus = false,
  ...props
}: OtpProps) => {
  return (
    <CodeField
      {...props}
      ref={modalRef}
      value={value}
      caretHidden={false}
      onChangeText={onChangeText}
      cellCount={CELL_COUNT}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoFocus={autoFocus}
      renderCell={({index, symbol, isFocused}) => (
        <>
          <View
            key={index}
            style={[
              styles.cell,
              customCellStyles,
              isFocused && {...styles.focusCell, ...customFocusCellStyles},
            ]}>
            <Text style={[styles.codeText, isFocused && styles.focusText]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
          {index === 2 && (
            <View key="separator" style={styles.separator}>
              <Text style={styles.codeText}>-</Text>
            </View>
          )}
        </>
      )}
    />
  );
};

export default OtpInput;
