import {StyleSheet} from 'react-native';
import {Fonts} from './fonts';
import {Colors} from './colors';

const globalStyles = StyleSheet.create({
  //container
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  rootPadding: {
    paddingHorizontal: 16,
  },
  rootMargin: {
    marginHorizontal: 16,
  },
  fdr: {
    flexDirection: 'row',
  },
  aic: {
    alignItems: 'center',
  },

  //backgroundColor
  bgWhite: {
    backgroundColor: Colors.white,
  },

  //text
  title: {
    fontFamily: Fonts.bold,
    color: Colors.greyDark,
    fontSize: 16,
  },
});

export default globalStyles;
