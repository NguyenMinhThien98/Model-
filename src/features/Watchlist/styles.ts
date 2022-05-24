import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import globalStyles from 'assets/globalStyles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootTab: {
    ...globalStyles.rootMargin,
  },
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.white,
  },
});

export default styles;
