import {Text, ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import TradingHeader from 'features/TradingAccount/Components/TradingHeader';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Button from 'components/Button';
import Input from 'components/Input';
import DropDown from 'components/Dropdown';
import useIdentificationFacade from './hooks';
import RadioButton from 'components/RadioButton';
import DatePicker from 'components/DatePicker';
import AppCountryPicker from 'components/AppCountryPicker';
import {ID_TYPE} from 'config/constants';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import useConstants from 'utils/constantsHooks';

const inputFeilds = {
  isTaxResident: 'isTaxResident',
  tfn: 'tfn',
  isTaxExemption: 'isTaxExemption',
  identificationType: 'identificationType',
  licenseNumber: 'licenseNumber',
  passportNumber: 'passportNumber',
  expiryDate: 'expiryDate',
  stateOfIssue: 'stateOfIssue',
  country: 'country',
  countryOfBirth: 'countryOfBirth',
  townOfBirth: 'townOfBirth',
  isHaveTin: 'isHaveTin',
  tin: 'tin',
  reasonEmptyTaxId: 'reasonEmptyTaxId',
  reasonFullTaxId: 'reasonFullTaxId',
  tinExemptionCode: 'tinExemptionCode',
  tfnExemptionCode: 'tfnExemptionCode',
};

const ExternalTaxCountry = ({
  onChangeValue,
  value,
  tinReasons,
  TFNRef,
  birthTownRef,
  TINRef,
  onValidateFeild,
}) => {
  if (value.isTaxResident) {
    return (
      <Input
        placeholder={i18n.t('identification.enter_tfn')}
        label={i18n.t('identification.tax_number')}
        darkMode
        parentStyle={styles.inputContainer}
        onChangeText={text => onChangeValue(text, inputFeilds.tfn)}
        value={value.tfn}
        ref={TFNRef}
        keyboardType="number-pad"
        onValidate={onValidateFeild}
      />
    );
  }
  return (
    <>
      <AppCountryPicker
        label={i18n.t('identification.country_tax')}
        darkMode
        parentStyle={styles.inputContainer}
        onSelect={country => onChangeValue(country, inputFeilds.country)}
        countrySelected={value.country}
      />
      <AppCountryPicker
        label={i18n.t('identification.country_birth')}
        darkMode
        parentStyle={styles.inputContainer}
        onSelect={country => onChangeValue(country, inputFeilds.countryOfBirth)}
        countrySelected={value.countryOfBirth}
      />
      <Input
        placeholder={i18n.t('identification.enter_town')}
        label={i18n.t('identification.town_birth')}
        darkMode
        parentStyle={styles.inputContainer}
        onChangeText={text => onChangeValue(text, inputFeilds.townOfBirth)}
        value={value.townOfBirth}
        ref={birthTownRef}
        onValidate={onValidateFeild}
      />
      <Text style={styles.titleQuestion}>
        {i18n.t('identification.have_identification')}
      </Text>
      <View style={styles.optionView}>
        <RadioButton
          title={i18n.t('onboarding.yes')}
          isChecked={value.isHaveTin}
          darkMode
          onPress={() => onChangeValue(true, inputFeilds.isHaveTin)}
        />
        <RadioButton
          title={i18n.t('onboarding.no')}
          isChecked={!value.isHaveTin}
          darkMode
          onPress={() => onChangeValue(false, inputFeilds.isHaveTin)}
        />
      </View>
      {!value.isHaveTin ? (
        <View>
          <Text style={styles.titleQuestion}>{i18n.t('tin_reason.title')}</Text>
          <View style={styles.optionView}>
            {tinReasons.map(item => {
              return (
                <RadioButton
                  title={item.label}
                  key={item.value}
                  isChecked={item.value === value.tinExemptionCode.value}
                  darkMode
                  onPress={() =>
                    onChangeValue(item, inputFeilds.tinExemptionCode)
                  }
                />
              );
            })}
          </View>
        </View>
      ) : (
        <Input
          placeholder={i18n.t('identification.enter_tin')}
          label={i18n.t('identification.tax_identification_number')}
          darkMode
          parentStyle={styles.inputContainer}
          onChangeText={text => onChangeValue(text, inputFeilds.tin)}
          value={value.tin}
          ref={TINRef}
          keyboardType="number-pad"
          onValidate={onValidateFeild}
        />
      )}
    </>
  );
};

const Identification: FC = () => {
  const {
    onPressNext,
    value,
    onChangeValue,
    TFNRef,
    birthTownRef,
    TINRef,
    licenseRef,
    passportRef,
    expiryDateRef,
    accountType,
    onValidateFeild,
  } = useIdentificationFacade();

  const {
    identificationList,
    stateList,
    tinReasons,
    taxExemptionReasons,
    getTitleAccount,
  } = useConstants();

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
                {i18n.t('identification.identification')}
              </Text>
              <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>
              <Text style={[styles.titleSmall, styles.spaceTop]}>
                {i18n.t('identification.tax_information')}
              </Text>

              <Text style={styles.titleQuestion}>
                {i18n.t('identification.resident_australia')}
              </Text>
              <View style={styles.optionView}>
                <RadioButton
                  title={i18n.t('onboarding.yes')}
                  isChecked={value.isTaxResident}
                  darkMode
                  onPress={() => onChangeValue(true, inputFeilds.isTaxResident)}
                />
                <RadioButton
                  title={i18n.t('onboarding.no')}
                  isChecked={!value.isTaxResident}
                  darkMode
                  onPress={() =>
                    onChangeValue(false, inputFeilds.isTaxResident)
                  }
                />
              </View>
              <ExternalTaxCountry
                value={value}
                onChangeValue={onChangeValue}
                tinReasons={tinReasons}
                TFNRef={TFNRef}
                birthTownRef={birthTownRef}
                TINRef={TINRef}
                onValidateFeild={onValidateFeild}
              />
              {value.isTaxResident && (
                <>
                  <Text style={styles.titleQuestion}>
                    {i18n.t('identification.tax_exemption')}
                  </Text>
                  <View style={styles.optionView}>
                    <RadioButton
                      title={i18n.t('onboarding.yes')}
                      isChecked={value.isTaxExemption}
                      darkMode
                      onPress={() =>
                        onChangeValue(true, inputFeilds.isTaxExemption)
                      }
                    />
                    <RadioButton
                      title={i18n.t('onboarding.no')}
                      isChecked={!value.isTaxExemption}
                      darkMode
                      onPress={() =>
                        onChangeValue(false, inputFeilds.isTaxExemption)
                      }
                    />
                  </View>
                  {value.isTaxExemption && (
                    <>
                      <Text style={styles.titleQuestion}>
                        {i18n.t('tax_exemption_reason.title')}
                      </Text>
                      <View style={styles.optionView}>
                        {taxExemptionReasons.map(item => (
                          <RadioButton
                            title={item.label}
                            key={item.value}
                            isChecked={
                              item.value === value.tfnExemptionCode.value
                            }
                            darkMode
                            onPress={() =>
                              onChangeValue(item, inputFeilds.tfnExemptionCode)
                            }
                          />
                        ))}
                      </View>
                    </>
                  )}
                </>
              )}
              <View style={styles.separatorLine} />
              <Text style={styles.titleSmall}>
                {i18n.t('identification.identification_doc')}
              </Text>
              <Text style={styles.note}>
                {i18n.t('personal_account.funds_question')}
              </Text>

              <DropDown
                title={i18n.t('identification.select_id_type')}
                label={i18n.t('identification.type_id')}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={text =>
                  onChangeValue(text, inputFeilds.identificationType)
                }
                data={identificationList}
                itemSelected={value.identificationType}
              />
              {value.identificationType.value === ID_TYPE.DRIVERS_LICENSE && (
                <Input
                  placeholder={i18n.t('identification.enter_license')}
                  label={i18n.t('identification.license_number')}
                  darkMode
                  parentStyle={styles.inputContainer}
                  onChangeText={text =>
                    onChangeValue(text, inputFeilds.licenseNumber)
                  }
                  value={value.licenseNumber}
                  ref={licenseRef}
                  onValidate={onValidateFeild}
                />
              )}
              {value.identificationType.value === ID_TYPE.PASSPORT && (
                <Input
                  placeholder={i18n.t('identification.enter_passport')}
                  label={i18n.t('identification.passport_number')}
                  darkMode
                  parentStyle={styles.inputContainer}
                  onChangeText={text =>
                    onChangeValue(text, inputFeilds.passportNumber)
                  }
                  value={value.passportNumber}
                  keyboardType="number-pad"
                  ref={passportRef}
                  onValidate={onValidateFeild}
                />
              )}
              {value.identificationType.value === ID_TYPE.DRIVERS_LICENSE && (
                <View style={styles.row}>
                  <DatePicker
                    label={i18n.t('identification.expiry_date')}
                    darkMode
                    parentStyle={styles.inputContainer}
                    onSelect={date =>
                      onChangeValue(date, inputFeilds.expiryDate)
                    }
                    dateSelected={value.expiryDate}
                    pickerContainerStyle={styles.expiryDate}
                    inputRef={expiryDateRef}
                    keyboardType="number-pad"
                    onValidate={onValidateFeild}
                  />
                  <DropDown
                    title={i18n.t('issue_state.title')}
                    label={i18n.t('identification.state_issue')}
                    darkMode
                    parentStyle={styles.inputContainer}
                    onSelect={text =>
                      onChangeValue(text, inputFeilds.stateOfIssue)
                    }
                    itemSelected={value.stateOfIssue}
                    data={stateList}
                    dropdownStyle={styles.body}
                  />
                </View>
              )}
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

export default Identification;
