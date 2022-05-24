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
import useEditPhoneFacade from './hook';
import styles from './styles';

const EditPhone = () => {
  const {phone, setPhone, onClearPhone, onGoToOTP, isValidPhone, phoneRef} =
    useEditPhoneFacade();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <SafeAreaView style={globalStyles.flexOne}>
        <SimpleHeader
          headerText={t('editPhone.header')}
          leftIcon={Images.ic_close_header_24px}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{i18n.t('editPhone.contactPhone')}</Text>
          <Input
            ref={phoneRef}
            onChangeText={setPhone}
            value={phone}
            parentStyle={
              isValidPhone
                ? {...styles.emailInputContainer, ...styles.inputFocus}
                : styles.emailInputContainer
            }
            rightIcon={phone?.length > 0 ? Images.ic_close_circle : undefined}
            containerStyle={styles.emailInput}
            leftIcon={Images.ic_phone}
            onPressRightIcon={onClearPhone}
            autoFocus
            onValidate={validEmail}
            errorMessage={i18n.t('editPhone.pleasePhone')}
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.updateButton} onPress={onGoToOTP}>
            <Text style={styles.buttonText}>{i18n.t('editPhone.header')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default EditPhone;
