import {StyleSheet, Text, View} from 'react-native';
import React, {Ref, useCallback, useMemo} from 'react';
import i18n from 'utils/LocalizedStrings';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';
import PasswordValidation from 'components/PasswordValidation';
import PasswordInput, {PasswordInputRef} from 'components/PasswordInput';
import {
  validLetterAndNumber,
  validPassword,
  validSpecial,
  validUppercaseAndLowercase,
} from 'utils/commonHelpers';

interface ResetPassProps {
  newPassword: string;
  rePassword: string;
  onChangeNewPassword: (text: string) => void;
  onChangeRePassword: (text: string) => void;
  passwordRef: Ref<PasswordInputRef>;
  rePasswordRef: Ref<PasswordInputRef>;
}

interface PasswordProps {
  password: string;
}

const PasswordStrength = ({password}: PasswordProps) => {
  const strongList = [1, 2, 3, 4];

  const strengthLevel = useMemo(() => {
    let level = 0;
    if (password?.length >= 8) {
      level += 1;
    }
    if (validLetterAndNumber(password)) {
      level += 1;
    }
    if (validUppercaseAndLowercase(password)) {
      level += 1;
    }
    if (validSpecial(password)) {
      level += 1;
    }

    return level;
  }, [password]);
  return (
    <View style={styles.strengthView}>
      <Text style={styles.strengthTitle}>
        {i18n.t('login.passwordStrength')}
      </Text>
      <View style={styles.strengthContainer}>
        {strongList.map((item, index) => (
          <View
            key={index}
            style={[
              styles.strengthItem,
              index < strengthLevel && styles.strong,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const ResetPassword = ({
  newPassword,
  rePassword,
  onChangeNewPassword,
  onChangeRePassword,
  passwordRef,
  rePasswordRef,
}: ResetPassProps) => {
  const onValidateConfirmPassword = useCallback(
    confirmPass => {
      if (confirmPass === newPassword) {
        return true;
      } else {
        return false;
      }
    },
    [newPassword],
  );

  return (
    <View>
      <Text style={styles.title}>{i18n.t('login.reset_password')}</Text>
      <PasswordInput
        placeholder={i18n.t('login.new_password')}
        value={newPassword}
        onChangeText={onChangeNewPassword}
        containerStyle={styles.inputStyle}
        onValidate={validPassword}
        errorMessage={i18n.t('sign_up_validate.please_password')}
        ref={passwordRef}
      />
      <PasswordInput
        placeholder={i18n.t('login.re_password')}
        value={rePassword}
        onChangeText={onChangeRePassword}
        containerStyle={styles.inputStyle}
        onValidate={onValidateConfirmPassword}
        errorMessage={i18n.t('sign_up_validate.password_not_match')}
        ref={rePasswordRef}
      />
      <PasswordStrength password={newPassword} />
      <PasswordValidation
        password={newPassword}
        containerStyle={styles.validation}
        passwordConfirm={rePassword}
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
    marginTop: 15,
  },
  validation: {
    marginTop: 15,
    marginBottom: 30,
  },
  strong: {
    backgroundColor: Colors.primary,
  },
  strengthContainer: {
    borderColor: Colors.border,
    borderRadius: 5,
    borderWidth: 1,
    height: 12,
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  strengthItem: {
    flex: 1,
    marginRight: 1,
  },
  strengthTitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.grey700,
    marginBottom: 4,
  },
  strengthView: {
    width: '100%',
    marginTop: 15,
  },
});

export default ResetPassword;
