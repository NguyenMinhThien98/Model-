import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.white,
  },
});

export default styles;
