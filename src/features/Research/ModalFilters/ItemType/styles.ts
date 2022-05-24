import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  viewSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: Colors.greyDark,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  viewOption: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
