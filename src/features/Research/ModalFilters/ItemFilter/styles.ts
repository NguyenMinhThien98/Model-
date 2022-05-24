import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: Colors.greyDark,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  textInfinity: {
    fontSize: 12,
    marginLeft: 10,
    color: Colors.primary600,
    fontFamily: Fonts.medium,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
  },
  toTextContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  toTextStyle: {
    color: Colors.greyDark,
    fontSize: 18,
    fontFamily: Fonts.regular,
  },
});

export default styles;
