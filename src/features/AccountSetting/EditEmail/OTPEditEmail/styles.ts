import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
    backgroundColor: Colors.border,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: Fonts.bold,
  },
  otpCell: {
    height: 50,
    width: 48,
  },
  otpContainer: {
    marginTop: 30,
  },
  resendOtp: {
    marginTop: 30,
    flexDirection: 'row',
  },
  didntReceiveTxt: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.greyMedium,
  },
  resendTxt: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.primary600,
    marginLeft: 4,
  },
  focusCell: {
    borderColor: Colors.primary600,
  },
  bottomArea: {
    backgroundColor: Colors.border,
  },
});
export default styles;
