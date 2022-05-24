import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
  disableButton: {
    backgroundColor: Colors.greyMedium,
  },
});

export default styles;
