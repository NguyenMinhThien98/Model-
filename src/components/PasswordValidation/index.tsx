import CheckBox from 'components/CheckBox';
import styles from './styles';
import React, {useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import {
  validLetterAndNumber,
  validSpecial,
  validUppercaseAndLowercase,
} from 'utils/commonHelpers';
import i18n from 'utils/LocalizedStrings';

interface PasswordProps {
  containerStyle?: ViewStyle;
  password: string;
  passwordConfirm?: string;
}
const PasswordValidation = ({
  containerStyle,
  password,
  passwordConfirm,
}: PasswordProps) => {
  const ruleList = useMemo(
    () => [
      {
        title: i18n.t('sign_up_validate.character'),
        isChecked: password?.length >= 8,
      },
      {
        title: i18n.t('sign_up_validate.letter_number'),
        isChecked: validLetterAndNumber(password),
      },
      {
        title: i18n.t('sign_up_validate.upper_lower'),
        isChecked: validUppercaseAndLowercase(password),
      },
      {
        title: i18n.t('sign_up_validate.special_character'),
        isChecked: validSpecial(password),
      },
      {
        title: i18n.t('sign_up_validate.password_match'),
        isChecked: password === passwordConfirm && !!password,
      },
    ],
    [password, passwordConfirm],
  );

  return (
    <View style={containerStyle}>
      {ruleList.map(item => (
        <CheckBox
          key={item.title}
          title={item.title}
          isChecked={item.isChecked}
          titleStyle={styles.ruleContent}
        />
      ))}
    </View>
  );
};

export default PasswordValidation;
