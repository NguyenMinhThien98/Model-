import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  timeOption: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  timeOptionText: {
    color: Colors.grey400,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  isSelected: {
    color: Colors.greyDark,
    fontSize: 16,
    fontfamily: Fonts.regular,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  underLine: {
    width: 10,
    height: 3,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default styles;
