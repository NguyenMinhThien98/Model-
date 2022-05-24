import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  safeViewContainer: {
    height: '100%',
  },
  newsContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  newsTitle: {
    color: Colors.greyDark,
    fontSize: 22,
    fontFamily: Fonts.bold,
  },
  newsPublishedDate: {
    color: Colors.greyMedium,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginTop: 17,
  },
  newsTagContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  defaultNewsTag: {
    marginTop: 12,
    marginLeft: 20,
  },
  newsDescription: {
    color: Colors.grey700,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  divider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  otherNews: {
    color: Colors.greyDark,
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  bottomHeight: {
    height: 200,
  },
});
export default styles;
