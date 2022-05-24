import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
  recommendationContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAllRecommendationsContainer: {
    backgroundColor: Colors.white,
  },
  tabHeaderContainer: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  filterSearchContainer: {
    marginTop: 20,
  },
  sortFilterGroup: {
    marginRight: 15,
  },
  filterKeyListContainer: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  filterItemContainer: {
    height: 24,
    paddingHorizontal: 12,
    backgroundColor: Colors.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterItemContainerFirstItem: {
    marginLeft: 15,
  },
  filterItemContainerActive: {
    backgroundColor: Colors.primary,
  },
  filterItemTxt: {
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  filterItemTxtActive: {
    color: Colors.white,
  },
});

export default styles;
