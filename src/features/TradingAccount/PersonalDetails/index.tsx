import {Text, ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import TradingHeader from 'features/TradingAccount/Components/TradingHeader';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Button from 'components/Button';
import Input from 'components/Input';
import DropDown from 'components/Dropdown';
import usePersonalDetailsFacade from './hooks';
import DatePicker from 'components/DatePicker';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import useConstants from 'utils/constantsHooks';
import {validEmail} from 'utils/commonHelpers';

const inputFeilds = {
  title: 'title',
  firstName: 'firstName',
  lastName: 'lastName',
  middleName: 'middleName',
  alternateName: 'alternateName',
  email: 'email',
  mobilePhone: 'mobilePhone',
  occupationType: 'occupationType',
  sourceOfFunds: 'sourceOfFunds',
  birthDate: 'dateOfBirth',
};

const PersonalDetails: FC = () => {
  const {
    value,
    onChangeValue,
    onPressNext,
    firstNameRef,
    lastNameRef,
    mobilePhoneRef,
    emailRef,
    birthDateRef,
    accountType,
    onValidateFeild,
  } = usePersonalDetailsFacade();
  const {titleList, occupationList, fundingSources, getTitleAccount} =
    useConstants();

  return (
    <Screen>
      <>
        <TradingHeader />
        <MaqroKeyboardAvoidingView>
          <View style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrolView}>
              <Text style={styles.accountType}>
                {getTitleAccount(accountType)}
              </Text>
              <Text style={styles.title}>
                {i18n.t('personal_account.personal_details')}
              </Text>
              <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>
              <DropDown
                itemSelected={value.title}
                label={`${i18n.t('personal_account.title')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={text => onChangeValue(text, inputFeilds.title)}
                containerStyle={styles.titleContainer}
                data={titleList}
                title={i18n.t('personal_account.select_title')}
              />
              <Input
                placeholder={i18n.t('personal_account.enter_first_name')}
                label={`${i18n.t('personal_account.first_name')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                value={value.firstName}
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.firstName)
                }
                ref={firstNameRef}
                onValidate={onValidateFeild}
              />
              <Input
                placeholder={i18n.t('personal_account.enter_last_name')}
                label={`${i18n.t('personal_account.last_name')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onChangeText={text => onChangeValue(text, inputFeilds.lastName)}
                value={value.lastName}
                ref={lastNameRef}
                onValidate={onValidateFeild}
              />
              <Input
                placeholder={i18n.t('personal_account.enter_middle_name')}
                label={i18n.t('personal_account.middle_name')}
                darkMode
                parentStyle={styles.inputContainer}
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.middleName)
                }
                value={value.middleName}
              />
              <Input
                placeholder={i18n.t('personal_account.enter_alternate_name')}
                label={i18n.t('personal_account.alternate_names')}
                darkMode
                parentStyle={styles.inputContainer}
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.alternateName)
                }
                value={value.alternateName}
              />
              <DatePicker
                label={`${i18n.t('personal_account.birth_date')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={date => onChangeValue(date, inputFeilds.birthDate)}
                dateSelected={value.dateOfBirth}
                inputRef={birthDateRef}
                onValidate={onValidateFeild}
              />
              <Input
                placeholder={i18n.t('personal_account.enter_mobile_number')}
                label={`${i18n.t('personal_account.mobile_number')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.mobilePhone)
                }
                value={value.mobilePhone}
                keyboardType="phone-pad"
                ref={mobilePhoneRef}
                onValidate={onValidateFeild}
              />
              <Input
                placeholder={i18n.t('login.enter_email')}
                label={`${i18n.t('sign_up.email')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onChangeText={text => onChangeValue(text, inputFeilds.email)}
                value={value.email}
                onValidate={validEmail}
                errorMessage={i18n.t('sign_up_validate.please_email')}
                ref={emailRef}
              />
              <View style={styles.separatorLine} />
              <Text style={styles.titleSmall}>
                {i18n.t('personal_account.source_funds')}
              </Text>
              <Text style={styles.note}>
                {i18n.t('personal_account.funds_question')}
              </Text>
              <DropDown
                title={i18n.t('personal_account.select_occupation')}
                label={`${i18n.t('personal_account.occupation_type')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={text =>
                  onChangeValue(text, inputFeilds.occupationType)
                }
                data={occupationList}
                itemSelected={value.occupationType}
              />
              <DropDown
                title={i18n.t('personal_account.select_funding')}
                placeholder={i18n.t('login.enter_email')}
                label={`${i18n.t('personal_account.main_source')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={text =>
                  onChangeValue(text, inputFeilds.sourceOfFunds)
                }
                itemSelected={value.sourceOfFunds}
                data={fundingSources}
              />
            </ScrollView>
            <Button
              title={i18n.t('login.next')}
              containerStyle={styles.nextButton}
              onPress={onPressNext}
            />
          </View>
        </MaqroKeyboardAvoidingView>
      </>
    </Screen>
  );
};

export default PersonalDetails;
