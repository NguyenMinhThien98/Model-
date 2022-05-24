import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 15,
  },
  topDescContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 19,
    marginBottom: 36,
  },
  topDescItemContainer: {},
  topDescItemTitle: {
    color: Colors.greyMedium,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginBottom: 9,
  },
  separateView: {
    height: 30,
    width: 3,
    backgroundColor: Colors.greyMedium,
  },
  todayInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTxt: {
    color: Colors.greyDark,
    fontFamily: Fonts.medium,
    fontSize: 18,
  },
  upDownImage: {
    width: 14,
    height: 14,
    marginLeft: 4,
  },
});

export default styles;
