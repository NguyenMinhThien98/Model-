import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    ...ifIphoneX(
      {
        paddingBottom: 34,
      },
      {
        paddingBottom: 10,
      },
    ),
  },
  titleText: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.white,
    marginBottom: 15,
  },
  content: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.darkModeText,
  },
  closeIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.darkMode70,
  },
  cardStyle: {
    marginTop: 15,
  },
});

export default styles;
