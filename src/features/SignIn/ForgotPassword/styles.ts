import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    tintColor: Colors.greyMedium,
    marginBottom: 16,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  otpStyle: {
    paddingTop: 0,
  },
  container: {
    paddingTop: 20,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.greyDark,
    marginTop: 15,
    marginBottom: 25,
    textAlign: 'center',
  },
  successIcon: {
    alignSelf: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  contentScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default styles;
