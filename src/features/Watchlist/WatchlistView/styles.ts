import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 27,
  },
  sortBtnContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
  sortTxt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
    marginRight: 9,
  },
});
export default styles;
