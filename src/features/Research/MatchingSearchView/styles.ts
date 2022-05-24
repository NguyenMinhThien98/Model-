import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';
import {windowWidth} from 'config/constants';

export const styles = StyleSheet.create({
  sortBtnImg: {
    width: 20,
    height: 20,
  },
  sortBtnView: {
    width: 36,
    height: 36,
    backgroundColor: Colors.grey50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 5,
    marginLeft: 15,
  },
  navigationContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 12,
  },
  filterBtnGroup: {
    flexDirection: 'row',
    marginRight: 12,
  },
  sortBtnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 14,
    color: Colors.greyMedium,
    fontFamily: Fonts.medium,
    marginRight: 10,
  },
  rotateImage: {
    transform: [{rotate: '180deg'}],
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
  resultListSearchItemContainer: {
    width: (windowWidth - 45) / 2,
    marginLeft: 15,
    marginRight: 0,
  },
  resultCardSearchItemContainer: {
    paddingHorizontal: 15,
  },
  allResultTxt: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  keywordTxt: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  titleHeader: {
    height: 24,
    alignSelf: 'center',
  },
});
