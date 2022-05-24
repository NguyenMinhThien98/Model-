import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    width: 140,
    margin: 8,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  rowHeader: {
    width: 18,
    height: 18,
    backgroundColor: Colors.primary,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  txtCode: {
    marginLeft: 6,
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.greyMedium,
  },
  txtDesc: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: Fonts.medium,
    color: Colors.greyDark,
  },
  txtReturn: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
  },
  rowBuy: {
    marginTop: 16,
    flexDirection: 'row',
  },
  viewBuy: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.success200,
  },
  txtBuy: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Colors.success800,
  },
  viewSell: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.error200,
  },
  txtSell: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Colors.error600,
  },
  viewCircularProgress: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
});

export default styles;
