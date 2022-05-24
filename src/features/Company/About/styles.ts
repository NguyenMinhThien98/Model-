import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  generalInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  sectionText: {
    colors: Colors.greyDark,
    fontSize: 16,
    fontFamily: Fonts.bold,
    marginTop: 30,
  },
  generalTitle: {
    color: Colors.grey600,
    marginTop: 8,
    marginRight: 24,
    width: 90,
  },
  generalDescription: {
    color: Colors.grey600,
    marginTop: 8,
    width: 230,
  },
  aboutCompanyWrapper: {
    marginTop: 24,
  },
  aboutCompanyText: {
    color: Colors.greyMedium,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  aboutImage: {
    marginTop: 24,
  },
  sharesContainer: {
    flexDirection: 'row',
    marginTop: 18,
  },
  sharesWrapper: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  textCenter: {
    textAlign: 'center',
  },
  sharesTitle: {
    color: Colors.greyDark,
    fontSize: 22,
    fontFamily: Fonts.bold,
  },
  sharesDescription: {
    color: Colors.grey600,
    marginTop: 10,
    fontSize: 14,
  },
  divider: {
    borderBottomColor: Colors.centerBorder,
    borderBottomWidth: 1,
    marginTop: 24,
  },
  websiteLink: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginTop: 8,
  },
});

export default styles;
