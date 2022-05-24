import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyLight,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.greyDark,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: Colors.greyDark,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  error: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.error,
    marginTop: 5,
    marginLeft: 5,
  },
  errorInput: {
    borderColor: Colors.error,
    borderWidth: 1,
  },
  errorText: {
    color: Colors.error,
  },
  leftIconView: {
    marginRight: 12,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.greyDark,
  },
  darkContainer: {
    backgroundColor: Colors.darkMode20,
    borderWidth: 0,
  },
  labelDark: {
    color: Colors.white,
    marginBottom: 4,
  },
  inputDark: {
    color: Colors.darkMode70,
  },
  errorIcon: {
    marginLeft: 7,
  },
});

export default styles;
