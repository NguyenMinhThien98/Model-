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
  title: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  emailInput: {
    paddingHorizontal: 14,
    backgroundColor: Colors.white,
    minHeight: 43,
  },
  emailInputContainer: {
    maxHeight: 45,
    marginTop: 4,
  },
  emailInputErrorContainer: {
    maxHeight: 3,
    marginTop: 4,
  },
  inputFocus: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 5,
  },
  bottomContainer: {
    height: 70,
    backgroundColor: Colors.white,
  },
  updateButton: {
    flex: 1,
    margin: 15,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
});
export default styles;
