import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkEmpty: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ruleContent: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
    marginLeft: 10,
  },
  ruleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default styles;
