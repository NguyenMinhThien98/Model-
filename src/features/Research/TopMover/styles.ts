import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {Colors} from '../../../assets/colors';

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  viewAllTxt: {
    fontFamily: Fonts.medium,
    color: Colors.grey600,
    fontSize: 14,
  },
  recommendationsView: {
    padding: 8,
  },
});

export default styles;
