import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  titleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  viewAllTxt: {
    fontFamily: Fonts.medium,
    color: Colors.grey600,
    fontSize: 14,
  },
  recommendationsView: {
    padding: 8,
  },
  viewItemSelector: {
    borderRadius: 20,
    backgroundColor: Colors.border,
    marginHorizontal: 5,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
  },
  txtItemSelector: {
    fontSize: 14,
    color: Colors.greyDark,
    fontFamily: Fonts.medium,
  },
  viewSelector: {
    paddingHorizontal: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
