import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const marginConst = 12;
export const personStyles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: marginConst,
  },
  colorGreyTxt: {
    color: Colors.grey400,
  },
  colorGreenTxt: {
    color: Colors.success700,
  },
  colorRedTxt: {
    color: Colors.error700,
  },
});

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.white,
    position: 'relative',
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

    paddingTop: 14,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    ...personStyles.marginContainer,
  },
  titleTxt: {
    fontFamily: Fonts.bold,
    fontSize: 14,
  },
  descriptionTxt: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    ...personStyles.marginContainer,
    height: 24,
  },
  stockCounter: {
    color: Colors.grey600,
    fontSize: 14,
    fontFamily: Fonts.regular,
    ...personStyles.marginContainer,
  },
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upDownIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    bottom: 7,
  },
  stockContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btnAddHoldingContainer: {
    ...personStyles.marginContainer,
    backgroundColor: Colors.border,
    borderRadius: 5,
    height: 32,
    paddingVertical: 6,
  },
  btnAddHoldingTxt: {
    color: Colors.greyDark,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});

export default styles;
