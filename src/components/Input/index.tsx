import {
  ViewStyle,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  TextInputProps,
  ImageStyle,
} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './styles';
import {Colors} from '../../assets/colors';
import {Images} from 'assets/images';
import {KeyboardTypeOptions} from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  errorMessage?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  onValidate?: (value: string) => boolean;
  leftIcon?: ImageSourcePropType;
  onPressLeftIcon?: () => void;
  rightIcon?: ImageSourcePropType;
  onPressRightIcon?: () => void;
  label?: string;
  darkMode?: boolean;
  parentStyle?: ViewStyle;
  disable?: boolean;
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  rightIconStyles?: ImageStyle;
}

export interface InputRef {
  onShowError: (value: boolean) => void;
  onValidateValue: (text: string) => boolean;
}

const Input = forwardRef<InputRef, InputProps>(
  (
    {
      placeholder,
      containerStyle,
      inputStyle,
      errorMessage,
      onChangeText,
      value,
      keyboardType,
      onValidate,
      leftIcon,
      onPressLeftIcon,
      rightIcon,
      onPressRightIcon,
      label,
      darkMode,
      parentStyle,
      disable,
      onPress,
      onFocus,
      onBlur,
      onSubmitEditing,
      ...props
    }: InputProps,
    ref,
  ) => {
    const timeOutValidate = useRef<NodeJS.Timeout | null>(null);
    const [isError, setIsError] = useState(false);

    const onShowError = useCallback(data => {
      setIsError(data);
    }, []);

    const onValidateValue = useCallback(
      text => {
        if (onValidate && onValidate(text)) {
          setIsError(false);
          return true;
        } else {
          setIsError(true);
          return false;
        }
      },
      [onValidate],
    );

    useImperativeHandle(
      ref,
      () => ({
        onShowError,
        onValidateValue,
      }),
      [onShowError, onValidateValue],
    );

    const onChangeValue = useCallback(
      (text: string) => {
        onChangeText?.(text);
        if (onValidate) {
          timeOutValidate.current && clearTimeout(timeOutValidate.current);
          timeOutValidate.current = setTimeout(() => {
            onValidateValue(text);
          }, 500);
        }
      },
      [onChangeText, onValidateValue, onValidate],
    );

    return (
      <View style={parentStyle}>
        {label && (
          <Text style={[styles.label, darkMode && styles.labelDark]}>
            {label}
          </Text>
        )}
        <TouchableOpacity
          style={[
            styles.container,
            darkMode && styles.darkContainer,
            containerStyle,
            isError && styles.errorInput,
          ]}
          activeOpacity={onPress ? 0.5 : 1}
          onPress={onPress}>
          {leftIcon && (
            <TouchableOpacity
              style={styles.leftIconView}
              disabled={!onPressLeftIcon}
              onPress={onPressLeftIcon}>
              <Image source={leftIcon} />
            </TouchableOpacity>
          )}
          {disable ? (
            <Text
              style={[
                styles.input,
                darkMode && styles.inputDark,
                inputStyle,
                isError && !!value && styles.errorText,
              ]}
              {...props}>
              {value || placeholder}
            </Text>
          ) : (
            <TextInput
              placeholder={placeholder}
              style={[
                styles.input,
                darkMode && styles.inputDark,
                inputStyle,
                isError && styles.errorText,
              ]}
              placeholderTextColor={
                darkMode ? Colors.darkMode70 : Colors.greyMedium
              }
              value={value}
              onChangeText={onChangeValue}
              keyboardType={keyboardType}
              onFocus={onFocus}
              onBlur={onBlur}
              returnKeyType="go"
              onSubmitEditing={onSubmitEditing}
              editable
              {...props}
            />
          )}

          {rightIcon && (
            <TouchableOpacity
              disabled={!onPressRightIcon}
              onPress={onPressRightIcon}>
              <Image source={rightIcon} />
            </TouchableOpacity>
          )}
          {isError && (
            <Image style={styles.errorIcon} source={Images.ic_error} />
          )}
        </TouchableOpacity>
        {isError && !!errorMessage && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}
      </View>
    );
  },
);

export default Input;
