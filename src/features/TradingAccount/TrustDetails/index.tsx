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

import useConstants from 'utils/constantsHooks';
import AddressComponent from '../Components/AddressComponent';
import useTrustDetialFacade from './hooks';

const inputFeilds = {
  trustRoles: 'trustRoles',
  trustType: 'trustType',
  trustFullname: 'trustFullname',
  trustMailingStreetName: 'trustMailingStreetName',
  trustMailingUnitNumber: 'trustMailingUnitNumber',
  trustMailingStreetNumber: 'trustMailingStreetNumber',
  trustMailingStreetNameOne: 'trustMailingStreetNameOne',
  trustMailingSuburb: 'trustMailingSuburb',
  trustMailingPostcode: 'trustMailingPostcode',
  trustMailingState: 'trustMailingState',
  trustFullName: 'trustFullName',
  isTaxExemptionForTrust: 'isTaxExemptionForTrust',
  trustABNNumber: 'trustABNNumber',
  trustTFNNumber: 'trustTFNNumber',
};

const TrustDetails = () => {
  const {
    onPressNext,
    value,
    onChangeValue,
    onPressCheckBox,
    mailingUnitNumberRef,
    mailingStreetNumberRef,
    mailingStreetNameRef,
    mailingSuburbRef,
    mailingPostCodeRef,
    accountType,
    onValidateFeild,
    trustRoles,
    trustFullNameRef,
    isCheckedItem,
  } = useTrustDetialFacade();

  const {getTitleAccount, trustTypes} = useConstants();

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
                {i18n.t('corporate_trust.trust_details')}
              </Text>
              <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>

              {/* Company Info */}
              <Text style={[styles.titleSmall, styles.spaceTop]}>
                {i18n.t('corporate_trust.trust_info')}
              </Text>

              <Text style={[styles.titleQuestion]}>
                {i18n.t('company_account.company_role_question')}
              </Text>
              {trustRoles.map(item => {
                const isChecked = isCheckedItem(item);
                const onPress = () => onPressCheckBox(item, isChecked);
                return (
                  <CheckBox
                    isChecked={isChecked}
                    title={item}
                    key={item}
                    darkMode
                    containerStyle={styles.trustRoleCheckBox}
                    onPress={onPress}
                  />
                );
              })}
              <Input
                placeholder={i18n.t('company_account.enter_company')}
                label={`${i18n.t('corporate_trust.trust_full_name')} *`}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.trustFullName)
                }
                value={value.trustFullName}
                parentStyle={styles.inputContainer}
                onValidate={onValidateFeild}
                ref={trustFullNameRef}
              />
              <DropDown
                title={i18n.t('trust_type.title')}
                label={`${i18n.t('corporate_trust.trust_type')} *`}
                darkMode
                parentStyle={styles.inputContainer}
                onSelect={item => onChangeValue(item, inputFeilds.trustType)}
                data={trustTypes}
                itemSelected={value.trustType}
              />
              <Input
                placeholder={i18n.t('company_account.enter_abn')}
                label={i18n.t('company_account.abn')}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.trustABNNumber)
                }
                value={value.trustABNNumber}
                parentStyle={styles.inputContainer}
                keyboardType="number-pad"
              />
              <Input
                placeholder={i18n.t('company_account.enter_tfn')}
                label={i18n.t('company_account.tax_number')}
                darkMode
                onChangeText={text =>
                  onChangeValue(text, inputFeilds.trustTFNNumber)
                }
                value={value.trustTFNNumber}
                parentStyle={styles.inputContainer}
                keyboardType="number-pad"
              />
              <Text style={[styles.titleQuestion]}>
                {i18n.t('identification.tax_exemption')}
              </Text>
              <View style={styles.optionView}>
                <RadioButton
                  title={i18n.t('onboarding.yes')}
                  isChecked={value.isTaxExemptionForTrust}
                  darkMode
                  onPress={() =>
                    onChangeValue(true, inputFeilds.isTaxExemptionForTrust)
                  }
                />
                <RadioButton
                  title={i18n.t('onboarding.no')}
                  isChecked={!value.isTaxExemptionForTrust}
                  darkMode
                  onPress={() =>
                    onChangeValue(false, inputFeilds.isTaxExemptionForTrust)
                  }
                />
              </View>

              <View style={styles.separatorLine} />
              <Text style={styles.titleSmall}>
                {i18n.t('corporate_trust.trust_address')}
              </Text>
              <AddressComponent
                darkMode
                unitNumber={value.trustMailingUnitNumber}
                unitRef={mailingUnitNumberRef}
                onChangeUnitNumber={text =>
                  onChangeValue(text, inputFeilds.trustMailingUnitNumber)
                }
                streetNumber={value.trustMailingStreetNumber}
                streetNumberRef={mailingStreetNumberRef}
                onChangeStreetNumber={text =>
                  onChangeValue(text, inputFeilds.trustMailingStreetNumber)
                }
                streetName={value.trustMailingStreetNameOne}
                streetNameRef={mailingStreetNameRef}
                onChangeStreetName={text =>
                  onChangeValue(text, inputFeilds.trustMailingStreetNameOne)
                }
                suburb={value.trustMailingSuburb}
                onChangeSuburb={text =>
                  onChangeValue(text, inputFeilds.trustMailingSuburb)
                }
                suburbRef={mailingSuburbRef}
                postCode={value.trustMailingPostcode}
                onChangePostcode={text =>
                  onChangeValue(text, inputFeilds.trustMailingPostcode)
                }
                postCodeRef={mailingPostCodeRef}
                state={value.trustMailingState}
                onChangeState={item =>
                  onChangeValue(item, inputFeilds.trustMailingState)
                }
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

export default TrustDetails;
