import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  recommendationsContainer: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 9,
    marginLeft: 15,
  },
  tableHeaderText: {
    color: Colors.greyMedium,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginRight: 58,
  },
  divider: {
    borderBottomColor: Colors.centerBorder,
    borderBottomWidth: 1,
    marginTop: 6,
    marginLeft: 15,
    marginRight: 15,
  },
  recommedationsList: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: Colors.centerBorder,
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  pubDate: {
    color: Colors.greyDark,
    fontSize: 14,
    fontFamily: Fonts.regular,
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 54,
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
  sellButton: {
    backgroundColor: Colors.error200,
    borderRadius: 50,
  },
  sellButtonText: {
    color: Colors.error700,
    fontSize: 10,
    height: 22,
    width: 48,
    textAlign: 'center',
    paddingTop: 5,
    textDecoration: 'upperCase',
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
  closeButton: {
    backgroundColor: Colors.border,
    borderRadius: 50,
  },
  closeButtonText: {
    color: Colors.grey600,
    fontSize: 10,
    height: 22,
    width: 48,
    textAlign: 'center',
    paddingTop: 5,
    textDecoration: 'upperCase',
  },
  chevronPrimaryRight: {
    marginTop: 4,
  },
});

export default styles;
