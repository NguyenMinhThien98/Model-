import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  companyTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  boldText: {
    color: Colors.black,
    fontSize: 26,
    fontFamily: Fonts.bold,
  },
  priceValueWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  percentageChange: {
    color: Colors.success700,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginTop: 8,
    marginLeft: 8,
  },
  arrow_upward: {
    marginTop: 12,
  },
  companyTitleLeft: {
    width: 300,
  },
  companyTitleRight: {
    width: 50,
  },
  viewCircularProgress: {
    position: 'absolute',
    top: 5,
    bottom: 12,
    right: 10,
  },
});

export default styles;
