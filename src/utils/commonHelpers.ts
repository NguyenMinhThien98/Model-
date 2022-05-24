import {Platform} from 'react-native';
import i18n from './LocalizedStrings';

export const isIos: Boolean = Platform.OS === 'ios';

export const validEmail = (email: string): boolean => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validPassword = (password: string): boolean => {
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const validLetterAndNumber = (password: string): boolean => {
  var re = /(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/;
  return re.test(password);
};

export const validUppercaseAndLowercase = (password: string): boolean => {
  var re = /(?=.*[a-z])(?=.*[A-Z])/;
  return re.test(password);
};

export const validSpecial = (password: string): boolean => {
  var re = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return re.test(password);
};

export const getNumber = (value: string) => value.replace(/[^0-9]/g, '');

export const formatAddress = (
  unit,
  streetNumber,
  streetName,
  suburb,
  postcode,
  state,
  country = i18n.t('address.australia'),
  prevAddress = '',
) => {
  return `${prevAddress ? `${prevAddress}\n` : ''}${i18n.t(
    'address.unit',
  )} ${unit}, ${streetNumber} ${streetName} ${i18n.t(
    'address.st',
  )},\n${suburb}, ${postcode},\n${state}, ${country}`;
};
