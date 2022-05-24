import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.white,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.darkModeText,
    marginTop: 16,
    marginBottom: 50,
    textAlign: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    justifyContent: 'center',
    ...ifIphoneX(
      {
        marginBottom: 34,
      },
      {
        marginBottom: 15,
      },
    ),
  },
});

export default styles;
