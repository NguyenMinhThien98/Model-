import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 5,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
});

export default styles;
