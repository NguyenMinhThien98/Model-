import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeViewContainer: {
    height: '100%',
  },
  recommendationDetailsContainer: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  recommendationCompanyContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  recommendationDetailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 19,
  },
  companyInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  companyImage: {
    marginTop: 5,
    marginRight: 10,
  },
  companyShortName: {
    color: Colors.greyDark,
    fontsize: 16,
    fontFamily: Fonts.regular,
  },
  companyFullName: {
    color: Colors.greyMedium,
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 54,
  },
  openButton: {
    backgroundColor: Colors.zircon,
    borderRadius: 50,
  },
  openButtonText: {
    color: Colors.primary600,
    fontSize: 10,
    height: 22,
    width: 48,
    textAlign: 'center',
    paddingTop: 5,
    textDecoration: 'upperCase',
  },
  buyButton: {
    backgroundColor: Colors.success200,
    borderRadius: 50,
  },
  buyButtonText: {
    color: Colors.success800,
    fontSize: 10,
    height: 22,
    width: 48,
    textAlign: 'center',
    paddingTop: 5,
    textDecoration: 'upperCase',
  },
  divider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  dateContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  spaceBetweenRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  dateStyle: {
    color: Colors.greyMedium,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
  },
  priceWrapper: {
    paddingLeft: 7,
    paddingRight: 26,
  },
  priceTitle: {
    color: Colors.success700,
    fontSize: 12,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  priceValue: {
    color: Colors.success900,
    fontSize: 18,
    fontFamily: Fonts.regular,
    marginTop: 5,
    textAlign: 'center',
  },
  verticalDivider: {
    backgroundColor: Colors.success700,
    borderRadius: 10,
    marginRight: 19,
    opacity: 0.1,
    width: 3,
    height: '70%',
    marginTop: 5,
  },
  recommendationsBlocks: {
    marginTop: 15,
  },
  blockTitle: {
    color: Colors.greyDark,
    fontsize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 9,
  },
});

export default styles;
