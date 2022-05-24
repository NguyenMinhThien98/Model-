import {View} from 'react-native';
import React, {Ref} from 'react';
import i18n from 'utils/LocalizedStrings';
import styles from '../styles';
import Input, {InputRef} from 'components/Input';
import DropDown, {DropDownItem} from 'components/Dropdown';
import useConstants from 'utils/constantsHooks';

interface AddressProps {
  unitNumber: string;
  unitRef: Ref<InputRef>;
  onChangeUnitNumber: (text: string) => void;
  streetNumber: string;
  streetNumberRef: Ref<InputRef>;
  onChangeStreetNumber: (text: string) => void;
  streetName: string;
  streetNameRef: Ref<InputRef>;
  onChangeStreetName: (text: string) => void;
  suburb: string;
  suburbRef: Ref<InputRef>;
  onChangeSuburb: (text: string) => void;
  postCode: string;
  postCodeRef: Ref<InputRef>;
  onChangePostcode: (text: string) => void;
  state: DropDownItem;
  onChangeState: (text: DropDownItem) => void;
  isEditable?: boolean;
  onValidate?: (text: string) => boolean;
  darkMode?: boolean;
}
const AddressComponent = ({
  unitNumber,
  unitRef,
  onChangeUnitNumber,
  streetNumber,
  streetNumberRef,
  onChangeStreetNumber,
  streetName,
  streetNameRef,
  onChangeStreetName,
  suburb,
  suburbRef,
  onChangeSuburb,
  postCode,
  postCodeRef,
  onChangePostcode,
  state,
  onChangeState,
  isEditable,
  onValidate,
  darkMode = false,
}: AddressProps) => {
  const {stateList} = useConstants();
  return (
    <View>
      <View style={styles.row}>
        <Input
          placeholder={i18n.t('address.enter_unit_no')}
          label={i18n.t('address.unit_no')}
          darkMode={darkMode}
          onChangeText={onChangeUnitNumber}
          value={unitNumber}
          parentStyle={{...styles.expiryDate, ...styles.inputContainer}}
          ref={unitRef}
          keyboardType="number-pad"
          editable={isEditable}
          onValidate={onValidate}
        />
        <Input
          placeholder={i18n.t('address.enter_street_no')}
          label={i18n.t('address.street_no')}
          darkMode={darkMode}
          parentStyle={{...styles.body, ...styles.inputContainer}}
          onChangeText={onChangeStreetNumber}
          value={streetNumber}
          ref={streetNumberRef}
          keyboardType="number-pad"
          editable={isEditable}
          onValidate={onValidate}
        />
      </View>

      <Input
        placeholder={i18n.t('address.enter_street_name')}
        label={i18n.t('address.street_name')}
        darkMode={darkMode}
        parentStyle={styles.inputContainer}
        onChangeText={onChangeStreetName}
        value={streetName}
        ref={streetNameRef}
        editable={isEditable}
        onValidate={onValidate}
      />
      <Input
        placeholder={i18n.t('address.enter_suburb')}
        label={i18n.t('address.suburb')}
        darkMode={darkMode}
        parentStyle={styles.inputContainer}
        onChangeText={onChangeSuburb}
        value={suburb}
        ref={suburbRef}
        editable={isEditable}
        onValidate={onValidate}
      />
      <View style={styles.row}>
        <Input
          placeholder={i18n.t('address.postcode_ex')}
          label={i18n.t('address.postcode')}
          darkMode={darkMode}
          onChangeText={onChangePostcode}
          value={postCode}
          parentStyle={{...styles.expiryDate, ...styles.inputContainer}}
          keyboardType="number-pad"
          ref={postCodeRef}
          editable={isEditable}
          onValidate={onValidate}
        />
        <DropDown
          title={i18n.t('issue_state.title')}
          label={i18n.t('address.state')}
          darkMode={darkMode}
          parentStyle={styles.inputContainer}
          onSelect={onChangeState}
          data={stateList}
          itemSelected={state}
          editable={isEditable}
          dropdownStyle={styles.body}
        />
      </View>
    </View>
  );
};

export default AddressComponent;
