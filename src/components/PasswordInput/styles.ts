import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

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
    fontSize: 12,
  },
  showInput: {
    fontSize: 16,
  },
  eyeHitSlop: {
    left: 20,
    right: 20,
    top: 10,
    bottom: 10,
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
  },
  errorText: {
    color: Colors.error,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
