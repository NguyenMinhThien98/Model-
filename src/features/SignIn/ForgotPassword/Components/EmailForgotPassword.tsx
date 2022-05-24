import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import i18n from 'utils/LocalizedStrings';
import Input from 'components/Input';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';

interface EmailProps {
  email: string;
  onChangeEmail: (text: string) => void;
}
const EmailForgotPassword = ({email, onChangeEmail}: EmailProps) => {
  return (
    <View>
      <Text style={styles.title}>{i18n.t('login.forgot_password2')}</Text>
      <Text style={styles.note}>{i18n.t('login.enter_email_note')}</Text>
      <Input
        value={email}
        onChangeText={onChangeEmail}
        placeholder={i18n.t('login.enter_email')}
        containerStyle={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.greyDark,
  },
  note: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.greyMedium,
    marginVertical: 15,
  },
  inputStyle: {
    marginBottom: 90,
  },
});

export default EmailForgotPassword;
