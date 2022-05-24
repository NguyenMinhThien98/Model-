import Button from 'components/Button';
import OtpInput from 'components/OtpInput';
import React, {useEffect, useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';

interface OtpProps {
  onPressButton?: () => void;
  onPressResend?: () => void;
  buttonTitle?: string;
  value: string;
  onChangeText: (value: string) => void;
  title?: string;
  subTitle?: string;
  containerStyle?: ViewStyle;
  onResend?: () => void;
}

const OtpComponent = ({
  onPressButton,
  buttonTitle = i18n.t('sign_up.continue'),
  value,
  onChangeText,
  title = i18n.t('sign_up.enter_code'),
  subTitle = i18n.t('sign_up.please_enter_code'),
  containerStyle,
  onResend,
}: OtpProps) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  }, [inputRef]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <OtpInput value={value} onChangeText={onChangeText} modalRef={inputRef} />
      <View style={styles.resendView}>
        <Text style={styles.normalText}>{i18n.t('sign_up.not_receive')}</Text>
        <TouchableOpacity hitSlop={styles.resendHitSlop} onPress={onResend}>
          <Text style={styles.highlightText}>
            {i18n.t('sign_up.resend_otp')}
          </Text>
        </TouchableOpacity>
      </View>

      <Button title={buttonTitle} onPress={onPressButton} />
    </View>
  );
};

export default OtpComponent;
