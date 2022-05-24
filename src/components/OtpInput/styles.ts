import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: Dimensions.get('window').width - 30,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  cell: {
    backgroundColor: Colors.greyLight,
    width: 40,
    height: 52,
    borderRadius: 5,
    borderColor: Colors.border,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.greyMedium,
  },
  focusCell: {
    borderColor: Colors.greyDark,
  },
  focusText: {
    color: Colors.greyDark,
  },
  separator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
