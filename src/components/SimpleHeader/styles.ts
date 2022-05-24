import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  leftIconContainer: {
    width: 60,
  },
  leftIcon: {
    height: 16,
    width: 20,
  },
  headerTxt: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
});
export default styles;
