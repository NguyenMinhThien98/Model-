import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DropDownItem} from 'components/Dropdown';
import {InputRef} from 'components/Input';
import {ISSUE_STATE} from 'config/constants';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useEffect, useRef, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from 'redux/store';
import i18n from 'utils/LocalizedStrings';
import {updateResidentialAddressAction} from '../action';
import {resetUpdateResidentialAddress} from '../slice';

const useEditResidentialFacade = () => {
  const [unitNumber, setUnitNumber] = useState<string>('');
  const [streetNumber, setStreetNumber] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [state, setState] = useState<DropDownItem>({
    label: i18n.t('issue_state.new_south_wales'),
    value: ISSUE_STATE.NEW_SOUTH_WALES,
    resultDisplay: ISSUE_STATE.NSW,
  });

  const unitRef = useRef<InputRef>(null);
  const streetNumberRef = useRef<InputRef>(null);
  const streetNameRef = useRef<InputRef>(null);
  const suburbRef = useRef<InputRef>(null);
  const postCodeRef = useRef<InputRef>(null);

  const dispatch = useDispatch();
  const {isUpdateResidentialAddressSuccess} = useSelector(
    (state: GlobalState) => state.account,
  );
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onValidateValue = (value: string) => {
    return value?.trim().length > 0;
  };
  const onUpdateAddress = () => {
    if (
      unitNumber &&
      streetName &&
      streetNumber &&
      suburb &&
      postCode &&
      state
    ) {
      const data = {
        typeAddress: 'MAILING',
        unitNumber,
        streetNumber,
        streetNameOne: streetName,
        suburb,
        postCode,
        state: state.value,
      };
      dispatch(updateResidentialAddressAction(data));
    } else {
      unitRef.current?.onValidateValue(unitNumber);
      streetNameRef.current?.onValidateValue(streetName);
      streetNumberRef.current?.onValidateValue(streetNumber);
      suburbRef.current?.onValidateValue(suburb);
      postCodeRef.current?.onValidateValue(postCode);
    }
  };

  useEffect(() => {
    if (isUpdateResidentialAddressSuccess) {
      navigation.navigate(SCREENS.MY_PROFILE);
      showMessage({
        message: i18n.t('editResidential.updateSuccess'),
        type: 'success',
      });
      dispatch(resetUpdateResidentialAddress());
    }
  }, [isUpdateResidentialAddressSuccess]);

  return {
    unitNumber,
    streetNumber,
    streetName,
    suburb,
    postCode,
    state,
    unitRef,
    streetNameRef,
    streetNumberRef,
    suburbRef,
    postCodeRef,
    setUnitNumber,
    setStreetName,
    setStreetNumber,
    setPostCode,
    setState,
    setSuburb,
    onUpdateAddress,
    onValidateValue,
  };
};
export default useEditResidentialFacade;
