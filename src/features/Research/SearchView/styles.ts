import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  titleSearch: {
    fontSize: 16,
    color: Colors.greyDark,
    fontWeight: '700',
    paddingBottom: 15,
    paddingTop: 10,
  },
  titleView: {
    justifyContent: 'space-between',
  },
  viewAllTxt: {
    fontFamily: Fonts.medium,
    color: Colors.grey600,
    fontSize: 14,
  },
  recommendationsView: {
    padding: 8,
    marginTop: 16,
  },
});

export default styles;
