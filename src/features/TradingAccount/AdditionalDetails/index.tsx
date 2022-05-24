import {Text, ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import Screen from 'components/Screen';
import TradingHeader from 'features/TradingAccount/Components/TradingHeader';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Button from 'components/Button';
import RadioButton from 'components/RadioButton';
import useAdditionalDetailsFacade from './hooks';
import {ACCOUNT_TYPE} from 'config/constants';
import useConstants from 'utils/constantsHooks';
import AddressComponent from '../Components/AddressComponent';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import DropDown from 'components/Dropdown';

const inputFeilds = {
  isLinkedCash: 'isLinkedCash',
  companyMailingUnitNumber: 'companyMailingUnitNumber',
  companyMailingStreetNumber: 'companyMailingStreetNumber',
  companyMailingStreetNameOne: 'companyMailingStreetNameOne',
  companyMailingSuburb: 'companyMailingSuburb',
  companyMailingPostcode: 'companyMailingPostcode',
  companyMailingState: 'companyMailingState',
  useExistAddress: 'useExistAddress',
  addressSelected: 'addressSelected',
};

const IncomeDirection = ({value, onChangeValue}) => {
  return (
    <>
      <Text style={[styles.titleSmall, styles.spaceTop]}>
        {i18n.t('additional.income')}
      </Text>
      <Text style={styles.note}>{i18n.t('additional.income_description')}</Text>
      <Text style={styles.smallText}>
        {i18n.t('additional.income_description2')}
      </Text>

      <View style={styles.optionView}>
        <RadioButton
          title={i18n.t('onboarding.yes')}
          isChecked={value.isLinkedCash}
          darkMode
          onPress={() => onChangeValue(true, inputFeilds.isLinkedCash)}
        />
        <RadioButton
          title={i18n.t('additional.no_option')}
          isChecked={!value.isLinkedCash}
          darkMode
          onPress={() => onChangeValue(false, inputFeilds.isLinkedCash)}
        />
      </View>
    </>
  );
};

const MailingAddress = ({
  value,
  onChangeValue,
  mailingUnitNumberRef,
  mailingStreetNumberRef,
  mailingStreetNameRef,
  mailingSuburbRef,
  mailingPostCodeRef,
  addressAlreadyList,
  onValidateFeild,
}) => {
  return (
    <View>
      <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>
      <Text style={[styles.titleSmall, styles.spaceTop]}>
        {i18n.t('address.mailing_address')}
      </Text>
      <Text style={styles.titleQuestion}>
        {i18n.t('company_account.use_exist_address')}
      </Text>
      <View style={styles.optionView}>
        <RadioButton
          title={i18n.t('onboarding.yes')}
          isChecked={value.useExistAddress}
          darkMode
          onPress={() => onChangeValue(true, inputFeilds.useExistAddress)}
        />
        <RadioButton
          title={i18n.t('company_account.use_new_address')}
          isChecked={!value.useExistAddress}
          darkMode
          onPress={() => onChangeValue(false, inputFeilds.useExistAddress)}
        />
      </View>
      {value.useExistAddress && (
        <DropDown
          title={i18n.t('company_account.select_address')}
          label={i18n.t('address.state')}
          darkMode
          parentStyle={styles.inputContainer}
          onSelect={item => onChangeValue(item, inputFeilds.addressSelected)}
          data={addressAlreadyList}
          itemSelected={value.addressSelected}
        />
      )}

      {!value.useExistAddress && (
        <AddressComponent
          darkMode
          onValidate={onValidateFeild}
          unitNumber={value.companyMailingUnitNumber}
          unitRef={mailingUnitNumberRef}
          onChangeUnitNumber={text =>
            onChangeValue(text, inputFeilds.companyMailingUnitNumber)
          }
          streetNumber={value.companyMailingStreetNumber}
          streetNumberRef={mailingStreetNumberRef}
          onChangeStreetNumber={text =>
            onChangeValue(text, inputFeilds.companyMailingStreetNumber)
          }
          streetName={value.companyMailingStreetNameOne}
          streetNameRef={mailingStreetNameRef}
          onChangeStreetName={text =>
            onChangeValue(text, inputFeilds.companyMailingStreetNameOne)
          }
          suburb={value.companyMailingSuburb}
          onChangeSuburb={text =>
            onChangeValue(text, inputFeilds.companyMailingSuburb)
          }
          suburbRef={mailingSuburbRef}
          postCode={value.companyMailingPostcode}
          onChangePostcode={text =>
            onChangeValue(text, inputFeilds.companyMailingPostcode)
          }
          postCodeRef={mailingPostCodeRef}
          state={value.companyMailingState}
          onChangeState={item =>
            onChangeValue(item, inputFeilds.companyMailingState)
          }
        />
      )}
    </View>
  );
};

const AdditionalDetails = ({navigation}) => {
  const {
    onPressNext,
    value,
    onChangeValue,
    resetDoneScreenValue,
    accountType,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    addressAlreadyList,
    onValidateFeild,
  } = useAdditionalDetailsFacade();

  const {getTitleAccount} = useConstants();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      resetDoneScreenValue();
    });

    return unsubscribe;
  }, [navigation, resetDoneScreenValue]);

  const renderBody = () => {
    switch (accountType) {
      case ACCOUNT_TYPE.PERSONAL:
        return <IncomeDirection value={value} onChangeValue={onChangeValue} />;
      case ACCOUNT_TYPE.COMPANY:
        return (
          <MailingAddress
            value={value}
            onChangeValue={onChangeValue}
            mailingUnitNumberRef={mailingUnitNumberRef}
            mailingStreetNumberRef={mailingStreetNumberRef}
            mailingStreetNameRef={mailingStreetNameRef}
            mailingSuburbRef={mailingSuburbRef}
            mailingPostCodeRef={mailingPostCodeRef}
            addressAlreadyList={addressAlreadyList}
            onValidateFeild={onValidateFeild}
          />
        );
      default:
        break;
    }
  };

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
                {i18n.t('additional.additional')}
              </Text>
              {renderBody()}
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

export default AdditionalDetails;
