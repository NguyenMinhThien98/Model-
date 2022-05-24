import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  leftIconView: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconView: {
    marginRight: 0,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: Colors.greyMedium,
  },
  picture: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  descriptionView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockNameView: {
    flex: 1,
  },
  graphView: {
    backgroundColor: Colors.success200,
    flex: 2,
    alignItems: 'center',
  },
  stockNameTxt: {
    color: Colors.greyDark,
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
  companyName: {
    color: Colors.greyMedium,
    fontWeight: '400',
    fontSize: 12,
  },
  lineTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignBottomView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  numberView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceTxt: {
    fontSize: 14,
    color: Colors.greyMedium,
  },
  percentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
