import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  body: {flex: 1},
  titleText: {
    fontSize: 26,
    fontFamily: Fonts.bold,
    color: Colors.greyDark,
  },
  subContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  noAccount: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.primary,
  },
  inputStyle: {
    marginTop: 15,
  },
  forgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 45,
    justifyContent: 'space-between',
  },
  largeText: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: Fonts.bold,
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
});

export default styles;
