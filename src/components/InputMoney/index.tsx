import {
  ViewStyle,
  TextInput,
  View,
  Text,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React, {forwardRef, useCallback} from 'react';
import styles from './styles';
import {KeyboardTypeOptions} from 'react-native';
import {Colors} from 'assets/colors';

interface InputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  suffixesContainerStyle?: ViewStyle;
  suffixesTextStyle?: TextStyle;
  suffixesText?: string;
}

export interface InputRef {
  onShowError: (text: string) => void;
  onValidateValue: (text: string) => void;
}

const InputMoney = forwardRef<InputRef, InputProps>(
  ({
    placeholder,
    containerStyle,
    inputStyle,
    onChangeText,
    value,
    keyboardType,
    suffixesContainerStyle,
    suffixesTextStyle,
    suffixesText,
    ...props
  }: InputProps) => {
    const onChangeValue = useCallback(
      (text: string) => {
        onChangeText(text);
      },
      [onChangeText],
    );

    return (
      <View>
        <View style={[styles.container, containerStyle]}>
          <TextInput
            placeholder={placeholder}
            style={[styles.input, inputStyle]}
            placeholderTextColor={Colors.greyMedium}
            value={value}
            onChangeText={onChangeValue}
            keyboardType={keyboardType}
            {...props}
          />
          {suffixesText && (
            <View
              style={[styles.suffixesContainerStyle, suffixesContainerStyle]}>
              <View style={styles.suffixesSubContainerStyle}>
                <Text style={[suffixesTextStyle]}>{suffixesText}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  },
);

export default InputMoney;
