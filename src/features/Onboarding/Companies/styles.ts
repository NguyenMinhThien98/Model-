import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

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
    paddingHorizontal: 15,
  },
  columnWrapper: {
    marginTop: 10,
    paddingHorizontal: 12,
  },
});

export default styles;
