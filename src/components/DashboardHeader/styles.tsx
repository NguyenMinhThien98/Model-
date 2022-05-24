import {Fonts} from 'assets/fonts';
import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.white,
    flex: 1,
  },
  container: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 64,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    tintColor: Colors.icon_dark,
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonLast: {
    paddingLeft: 10,
  },
  buttonHitSlop: {
    top: 15,
    bottom: 15,
  },
});
export default styles;
