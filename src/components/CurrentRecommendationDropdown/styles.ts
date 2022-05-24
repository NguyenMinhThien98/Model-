import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 25,
    marginBottom: 15,
  },
  currentRecommendationContainer: {
    backgroundColor: 'white',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 13,
    paddingBottom: 13,
  },
  currentRecommendationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  currentRecommendationRow: {
    flexDirection: 'row',
  },
  currentRecommendationMaqro: {
    marginRight: 13,
  },
  currentRecommendationText: {
    color: Colors.greyDark,
    paddingTop: 3,
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  buyButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  buyButton: {
    backgroundColor: Colors.success200,
    borderRadius: 50,
  },
  buyButtonText: {
    color: Colors.success800,
    fontSize: 10,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 14,
    paddingRight: 14,
    textDecoration: 'upperCase',
  },
  caretDown: {
    marginTop: 7,
    marginBottom: 5,
    marginLeft: 14,
  },
  topDivider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 2,
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 0,
    marginLeft: 0,
  },
  bottomDivider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 2,
    marginTop: 28,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 0,
    marginLeft: 0,
  },
  dropDownContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  recommendations: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  recommendationsTitle: {
    color: Colors.greyDark,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  recommendationsDescription: {
    color: Colors.greyMedium,
    fontsize: 14,
    fontFamily: Fonts.regular,
    marginTop: 5,
  },
  recommendationsDate: {
    color: Colors.greyMedium,
    fontsize: 14,
    fontFamily: Fonts.regular,
    marginTop: 19,
    marginBottom: 5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
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
    width: 2,
    height: '100%',
  },
});

export default styles;
