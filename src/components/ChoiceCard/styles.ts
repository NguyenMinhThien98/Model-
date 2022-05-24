import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderDark,
  },
  contentStyle: {
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
  },
  content: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.darkModeText,
  },
  textView: {
    flex: 1,
    marginRight: 10,
  },
  checked: {
    padding: 1,
    borderWidth: 0,
  },
  leftIcon: {
    marginRight: 10,
  },
});

export default styles;
