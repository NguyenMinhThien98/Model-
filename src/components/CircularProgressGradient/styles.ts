import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  containerValue: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtValue: {
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
});

export default styles;
