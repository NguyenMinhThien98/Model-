import globalStyles from 'assets/globalStyles';
import {Images} from 'assets/images';
import Input from 'components/Input';
import SimpleHeader from 'components/SimpleHeader';
import {t} from 'i18next';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {validEmail} from 'utils/commonHelpers';
import i18n from 'utils/LocalizedStrings';
import useEditEmailFacade from './hook';
import styles from './styles';

const EditEmail = () => {
  const {email, setEmail, onClearEmail, onGoToOTP, isValidEmail, emailRef} =
    useEditEmailFacade();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <SafeAreaView style={globalStyles.flexOne}>
        <SimpleHeader
          headerText={t('editEmail.header')}
          leftIcon={Images.ic_close_header_24px}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{i18n.t('editEmail.contactEmail')}</Text>
          <Input
            ref={emailRef}
            onChangeText={setEmail}
            value={email}
            parentStyle={
              isValidEmail
                ? {...styles.emailInputContainer, ...styles.inputFocus}
                : styles.emailInputContainer
            }
            rightIcon={email?.length > 0 ? Images.ic_close_circle : undefined}
            containerStyle={styles.emailInput}
            leftIcon={Images.ic_email_24px}
            onPressRightIcon={onClearEmail}
            autoFocus
            onValidate={validEmail}
            errorMessage={i18n.t('editEmail.pleaseEmail')}
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.updateButton} onPress={onGoToOTP}>
            <Text style={styles.buttonText}>{i18n.t('editEmail.header')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default EditEmail;
