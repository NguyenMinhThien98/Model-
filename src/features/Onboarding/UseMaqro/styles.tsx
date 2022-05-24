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
    fontSize: 26,
    fontFamily: Fonts.bold,
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.darkModeText,
    marginVertical: 15,
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: Colors.bgColor,
    paddingTop: 10,
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
  choiceCard: {
    marginTop: 15,
  },
});

export default styles;
