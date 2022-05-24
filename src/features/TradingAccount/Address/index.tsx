import {Text, ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import TradingHeader from 'features/TradingAccount/Components/TradingHeader';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Button from 'components/Button';
import RadioButton from 'components/RadioButton';
import useAddressFacade from './hooks';
import CheckBox from 'components/CheckBox';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import useConstants from 'utils/constantsHooks';
import AddressComponent from '../Components/AddressComponent';

const inputFeilds = {
  state: 'state',
  unitNumber: 'unitNumber',
  streetNumber: 'streetNumber',
  streetNameOne: 'streetNameOne',
  suburb: 'suburb',
  postcode: 'postcode',
  mailingState: 'mailingState',
  mailingUnitNumber: 'mailingUnitNumber',
  mailingStreetNumber: 'mailingStreetNumber',
  mailingStreetNameOne: 'mailingStreetNameOne',
  mailingSuburb: 'mailingSuburb',
  mailingPostcode: 'mailingPostcode',
  isHaveMoveAddress: 'isHaveMoveAddress',
  isSameResidentialAddress: 'isSameResidentialAddress',
};

const Address: FC = () => {
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
  } = useAddressFacade();

  const {getTitleAccount} = useConstants();

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
              <Text style={styles.title}>{i18n.t('address.address')}</Text>
              <Text style={styles.note}>{i18n.t('personal_account.note')}</Text>

              <Text style={[styles.titleSmall, styles.spaceTop]}>
                {i18n.t('address.residential_address')}
              </Text>
              <AddressComponent
                darkMode
                onValidate={onValidateFeild}
                unitNumber={value.unitNumber}
                unitRef={unitNumberRef}
                onChangeUnitNumber={text =>
                  onChangeValue(text, inputFeilds.unitNumber)
                }
                streetNumber={value.streetNumber}
                streetNumberRef={streetNumberRef}
                onChangeStreetNumber={text =>
                  onChangeValue(text, inputFeilds.streetNumber)
                }
                streetName={value.streetNameOne}
                streetNameRef={streetNameRef}
                onChangeStreetName={text =>
                  onChangeValue(text, inputFeilds.streetNameOne)
                }
                suburb={value.suburb}
                onChangeSuburb={text => onChangeValue(text, inputFeilds.suburb)}
                suburbRef={suburbRef}
                postCode={value.postcode}
                onChangePostcode={text =>
                  onChangeValue(text, inputFeilds.postcode)
                }
                postCodeRef={postCodeRef}
                state={value.state}
                onChangeState={item => onChangeValue(item, inputFeilds.state)}
              />

              <View style={[styles.separatorLine, styles.lineNoBottom]} />
              <Text style={[styles.titleQuestion]}>
                {i18n.t('address.moved_question')}
              </Text>
              <View style={styles.optionView}>
                <RadioButton
                  title={i18n.t('onboarding.yes')}
                  isChecked={value.isHaveMoveAddress}
                  darkMode
                  onPress={() =>
                    onChangeValue(true, inputFeilds.isHaveMoveAddress)
                  }
                />
                <RadioButton
                  title={i18n.t('onboarding.no')}
                  isChecked={!value.isHaveMoveAddress}
                  darkMode
                  onPress={() =>
                    onChangeValue(false, inputFeilds.isHaveMoveAddress)
                  }
                />
              </View>
              <View style={styles.separatorLine} />

              <Text style={styles.titleSmall}>
                {i18n.t('address.mailing_address')}
              </Text>
              <CheckBox
                title={i18n.t('address.same_address')}
                isChecked={value.isSameResidentialAddress}
                darkMode
                containerStyle={styles.checkBoxAddress}
                onPress={onPressCheckBox}
              />

              <AddressComponent
                darkMode
                unitNumber={value.mailingUnitNumber}
                unitRef={mailingUnitNumberRef}
                onChangeUnitNumber={text =>
                  onChangeValue(text, inputFeilds.mailingUnitNumber)
                }
                streetNumber={value.mailingStreetNumber}
                streetNumberRef={mailingStreetNumberRef}
                onChangeStreetNumber={text =>
                  onChangeValue(text, inputFeilds.mailingStreetNumber)
                }
                streetName={value.mailingStreetNameOne}
                streetNameRef={mailingStreetNameRef}
                onChangeStreetName={text =>
                  onChangeValue(text, inputFeilds.mailingStreetNameOne)
                }
                suburb={value.mailingSuburb}
                onChangeSuburb={text =>
                  onChangeValue(text, inputFeilds.mailingSuburb)
                }
                suburbRef={mailingSuburbRef}
                postCode={value.mailingPostcode}
                onChangePostcode={text =>
                  onChangeValue(text, inputFeilds.mailingPostcode)
                }
                postCodeRef={mailingPostCodeRef}
                state={value.mailingState}
                onChangeState={item =>
                  onChangeValue(item, inputFeilds.mailingState)
                }
                isEditable={!value.isSameResidentialAddress}
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

export default Address;
