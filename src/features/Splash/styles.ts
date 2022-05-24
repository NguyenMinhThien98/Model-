import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleText: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: Fonts.bold,
  },
  normalText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  signUp: {
    paddingVertical: 12,
    marginBottom: 15,
    borderRadius: 5,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
    fontFamily: Fonts.regular,
  },
});

export default styles;
