import {Images} from 'assets/images';
import MaqroKeyboardAvoidingView from 'components/MaqroKeyboardAvoidingView';
import Screen from 'components/Screen';
import SimpleHeader from 'components/SimpleHeader';
import AddressComponent from 'features/TradingAccount/Components/AddressComponent';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'utils/LocalizedStrings';
import useEditResidentialFacade from './hook';
import styles from './styles';

const EditResidential = () => {
  const {
    unitNumber,
    streetNumber,
    streetName,
    suburb,
    postCode,
    state,
    unitRef,
    streetNameRef,
    streetNumberRef,
    postCodeRef,
    setUnitNumber,
    setStreetName,
    setStreetNumber,
    setPostCode,
    setState,
    setSuburb,
    suburbRef,
    onUpdateAddress,
    onValidateValue,
  } = useEditResidentialFacade();
  return (
    <Screen>
      <>
        <MaqroKeyboardAvoidingView>
          <SafeAreaView style={styles.container}>
            <SimpleHeader
              headerText={i18n.t('editResidential.header')}
              leftIcon={Images.ic_close_header_24px}
            />
            <ScrollView style={styles.addressContainer}>
              <AddressComponent
                unitNumber={unitNumber}
                streetNumber={streetNumber}
                streetName={streetName}
                suburb={suburb}
                postCode={postCode}
                state={state!}
                unitRef={unitRef}
                streetNameRef={streetNameRef}
                streetNumberRef={streetNumberRef}
                postCodeRef={postCodeRef}
                suburbRef={suburbRef}
                onChangeUnitNumber={setUnitNumber}
                onChangeStreetNumber={setStreetNumber}
                onChangeState={setState}
                onChangeSuburb={setSuburb}
                onChangePostcode={setPostCode}
                onChangeStreetName={setStreetName}
                onValidate={onValidateValue}
              />
            </ScrollView>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={onUpdateAddress}>
                <Text style={styles.buttonText}>
                  {i18n.t('editResidential.header')}
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </MaqroKeyboardAvoidingView>
      </>
    </Screen>
  );
};
export default EditResidential;
