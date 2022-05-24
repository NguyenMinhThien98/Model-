import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.greyDark,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.greyMedium,
    marginTop: 15,
    marginBottom: 40,
  },
  normalText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.greyMedium,
  },
  highlightText: {
    color: Colors.primary,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  resendView: {
    marginBottom: 65,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendHitSlop: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  },
});

export default styles;
