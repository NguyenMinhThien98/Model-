import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 30,
  },
  statsWrapper: {
    flexDirection: 'row',
  },
  statsTitle: {
    color: Colors.greyDark,
    fontSize: 22,
    fontFamily: Fonts.bold,
  },
  statsDescription: {
    color: Colors.grey600,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  stats: {
    marginRight: 54,
  },
  statsInfoWrapper: {
    marginTop: 30,
  },
  statsInfo: {
    color: Colors.grey600,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});

export default styles;
