import {Text, ScrollView, View} from 'react-native';
import React from 'react';
import Screen from 'components/Screen';
import TradingHeader from 'features/TradingAccount/Components/TradingHeader';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Button from 'components/Button';
import Input from 'components/Input';
import DropDown from 'components/Dropdown';
import RadioButton from 'components/RadioButton';
import CheckBox from 'components/CheckBox';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import useCompanyFacade from './hooks';
import useConstants from 'utils/constantsHooks';
import DatePicker from 'components/DatePicker';
import AddressComponent from '../Components/AddressComponent';
import companySectors from 'utils/companySectors';

const inputFeilds = {
  registeredOfficeState: 'registeredOfficeState',
  companyRole: 'companyRole',
  companyName: 'companyName',
  companyType: 'companyType',
  companySectors: 'companySectors',
  acnNumber: 'acnNumber',
  abnNumber: 'abnNumber',
  dateOfIncorporation: 'dateOfIncorporation',
  tfnNumber: 'tfnNumber',
  isTaxExemptionForCompany: 'isTaxExemptionForCompany',
  registeredOfficeUnitNumber: 'registeredOfficeUnitNumber',
  registeredOfficeStreetNumber: 'registeredOfficeStreetNumber',
  registeredOfficeStreetNameOne: 'registeredOfficeStreetNameOne',
  registeredOfficeSuburb: 'registeredOfficeSuburb',
  registeredOfficePostcode: 'registeredOfficePostcode',
  businessUnitNumber: 'businessUnitNumber',
  businessStreetNumber: 'businessStreetNumber',
  businessStreetNameOne: 'businessStreetNameOne',
  businessSuburb: 'businessSuburb',
  businessPostcode: 'businessPostcode',
  businessState: 'businessState',
  isSameOfficeAddress: 'isSameOfficeAddress',
};

const CompanyDetails = () => {
  const {
    onPressNext,
    value,
    onChangeValue,
    onPressCheckBox,
    unitNumberRef,
    streetNumberRef,
    streetNameRef,
    suburbRef,
    postCodeRef,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    accountType,
    onValidateFeild,
    companyNameRef,
    dateIncorporationRef,
  } = useCompanyFacade();

  const {getTitleAccount, companyRoles, companyTypes} = useConstants();

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
                {i18n.t('company_account.company_details')}
              </Text>
              <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>

              {/* Company Info */}
              <Text style={[styles.titleSmall, styles.spaceTop]}>
                {i18n.t('company_account.company_info')}
              </Text>

              <Text style={[styles.titleQuestion]}>
                {i18n.t('company_account.company_role_question')}
              </Text>
              <View style={styles.optionView}>
                {companyRoles.map(item => (
                  <RadioButton
                    key={item.value}
                    title={item.label}
                    isChecked={value.companyRole.value === item.value}
                    darkMode
                    onPress={() => onChangeValue(item, inputFeilds.companyRole)}
                  />
                ))}
              </View>
              <Input
                placeholder={i18n.t('company_account.enter_company')}
                label={`${i18n.t('company_account.full_name_company')} *`}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.companyName)
                }
                value={value.companyName}
                parentStyle={styles.inputContainer}
                onValidate={onValidateFeild}
                ref={companyNameRef}
              />
              <DropDown
                title={i18n.t('company_type.title')}
                label={`${i18n.t('company_account.company_type')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={item => onChangeValue(item, inputFeilds.companyType)}
                data={companyTypes}
                itemSelected={value.companyType}
              />
              <DropDown
                title={i18n.t('company_sector.title')}
                label={`${i18n.t('company_account.company_sector')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={item =>
                  onChangeValue(item, inputFeilds.companySectors)
                }
                data={companySectors}
                itemSelected={value.companySectors}
              />
              <Input
                placeholder={i18n.t('company_account.enter_acn')}
                label={i18n.t('company_account.acn')}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.acnNumber)
                }
                value={value.acnNumber}
                parentStyle={styles.inputContainer}
                keyboardType="number-pad"
              />
              <Input
                placeholder={i18n.t('company_account.enter_abn')}
                label={i18n.t('company_account.abn')}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.abnNumber)
                }
                value={value.abnNumber}
                parentStyle={styles.inputContainer}
                keyboardType="number-pad"
              />
              <DatePicker
                label={`${i18n.t('company_account.date_registeration')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={date =>
                  onChangeValue(date, inputFeilds.dateOfIncorporation)
                }
                dateSelected={value.dateOfIncorporation}
                onValidate={onValidateFeild}
                inputRef={dateIncorporationRef}
              />
              <Input
                placeholder={i18n.t('company_account.enter_tfn')}
                label={i18n.t('company_account.tax_number')}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.tfnNumber)
                }
                value={value.tfnNumber}
                parentStyle={styles.inputContainer}
                keyboardType="number-pad"
              />

              <Text style={[styles.titleQuestion]}>
                {i18n.t('identification.tax_exemption')}
              </Text>
              <View style={styles.optionView}>
                <RadioButton
                  title={i18n.t('onboarding.yes')}
                  isChecked={value.isTaxExemptionForCompany}
                  darkMode
                  onPress={() =>
                    onChangeValue(true, inputFeilds.isTaxExemptionForCompany)
                  }
                />
                <RadioButton
                  title={i18n.t('onboarding.no')}
                  isChecked={!value.isTaxExemptionForCompany}
                  darkMode
                  onPress={() =>
                    onChangeValue(false, inputFeilds.isTaxExemptionForCompany)
                  }
                />
              </View>

              {/* Registered Office Address */}
              <View style={styles.separatorLine} />
              <Text style={styles.titleSmall}>
                {i18n.t('company_account.office_dddress')}
              </Text>
              <AddressComponent
                darkMode
                unitNumber={value.registeredOfficeUnitNumber}
                unitRef={unitNumberRef}
                onChangeUnitNumber={text =>
                  onChangeValue(text, inputFeilds.registeredOfficeUnitNumber)
                }
                streetNumber={value.registeredOfficeStreetNumber}
                streetNumberRef={streetNumberRef}
                onChangeStreetNumber={text =>
                  onChangeValue(text, inputFeilds.registeredOfficeStreetNumber)
                }
                streetName={value.registeredOfficeStreetNameOne}
                streetNameRef={streetNameRef}
                onChangeStreetName={text =>
                  onChangeValue(text, inputFeilds.registeredOfficeStreetNameOne)
                }
                suburb={value.registeredOfficeSuburb}
                onChangeSuburb={text =>
                  onChangeValue(text, inputFeilds.registeredOfficeSuburb)
                }
                suburbRef={suburbRef}
                postCode={value.registeredOfficePostcode}
                onChangePostcode={text =>
                  onChangeValue(text, inputFeilds.registeredOfficePostcode)
                }
                postCodeRef={postCodeRef}
                state={value.registeredOfficeState}
                onChangeState={item =>
                  onChangeValue(item, inputFeilds.registeredOfficeState)
                }
                onValidate={onValidateFeild}
              />

              {/* Principle Place of Business */}
              <View style={styles.separatorLine} />
              <Text style={styles.titleSmall}>
                {i18n.t('company_account.place_business')}
              </Text>
              <CheckBox
                title={i18n.t('company_account.same_office_address')}
                isChecked={value.isSameOfficeAddress}
                darkMode
                containerStyle={styles.checkBoxAddress}
                onPress={onPressCheckBox}
              />

              <AddressComponent
                darkMode
                unitNumber={value.businessUnitNumber}
                unitRef={mailingUnitNumberRef}
                onChangeUnitNumber={text =>
                  onChangeValue(text, inputFeilds.businessUnitNumber)
                }
                streetNumber={value.businessStreetNumber}
                streetNumberRef={mailingStreetNumberRef}
                onChangeStreetNumber={text =>
                  onChangeValue(text, inputFeilds.businessStreetNumber)
                }
                streetName={value.businessStreetNameOne}
                streetNameRef={mailingStreetNameRef}
                onChangeStreetName={text =>
                  onChangeValue(text, inputFeilds.businessStreetNameOne)
                }
                suburb={value.businessSuburb}
                onChangeSuburb={text =>
                  onChangeValue(text, inputFeilds.businessSuburb)
                }
                suburbRef={mailingSuburbRef}
                postCode={value.businessPostcode}
                onChangePostcode={text =>
                  onChangeValue(text, inputFeilds.businessPostcode)
                }
                postCodeRef={mailingPostCodeRef}
                state={value.businessState}
                onChangeState={item =>
                  onChangeValue(item, inputFeilds.businessState)
                }
                isEditable={!value.isSameOfficeAddress}
                onValidate={onValidateFeild}
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

export default CompanyDetails;
