import {
  ViewStyle,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {Colors} from 'assets/colors';

export interface PasswordInputRef {
  onShowError: (text: string) => void;
  onValidateValue: (text: string) => void;
}
interface InputProps {
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  errorMessage?: string;
  value: string;
  onChangeText: (value: string) => void;
  onValidate?: (value: string) => boolean;
}

const PasswordInput = forwardRef<PasswordInputRef, InputProps>(
  (
    {
      placeholder,
      containerStyle,
      inputStyle,
      errorMessage,
      value,
      onChangeText,
      onValidate,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [isShowPass, setIsShowPass] = useState<Boolean>(false);
    const timeOutValidate = useRef<NodeJS.Timeout | null>(null);
    const [isError, setIsError] = useState(false);

    const onShowError = useCallback(data => {
      setIsError(data);
    }, []);

    const onValidateValue = useCallback(
      text => {
        if (onValidate && onValidate(text)) {
          setIsError(false);
        } else {
          setIsError(true);
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
      [onChangeText, onValidate, onValidateValue],
    );

    const onPressEye = useCallback(() => {
      setIsShowPass(preValue => !preValue);
    }, []);

    return (
      <View>
        <View
          style={[
            styles.container,
            containerStyle,
            isError && styles.errorInput,
          ]}>
          <TextInput
            placeholder={placeholder}
            style={[
              styles.input,
              isShowPass && styles.showInput,
              inputStyle,
              isError && styles.errorText,
            ]}
            placeholderTextColor={Colors.greyMedium}
            secureTextEntry={!isShowPass}
            value={value}
            onChangeText={onChangeValue}
            {...props}
          />
          <TouchableOpacity hitSlop={styles.eyeHitSlop} onPress={onPressEye}>
            <Image
              source={isShowPass ? Images.ic_eye_open : Images.ic_eye_close}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        {isError && errorMessage && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}
      </View>
    );
  },
);

export default PasswordInput;
