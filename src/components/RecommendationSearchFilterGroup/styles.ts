import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  input: {
    backgroundColor: Colors.border,
    borderColor: Colors.border,
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sortBtnContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  sortTxt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
    marginRight: 9,
  },
  filterBtnGroup: {
    flexDirection: 'row',
    marginRight: 12,
  },
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
    marginTop: 14,
    marginLeft: 15,
  },
  hideSortContainer: {
    display: 'none',
  },
  inputHalfWidth: {
    width: 250,
  },
  inputFullWidth: {
    minWidth: '98%',
  },
});

export default styles;
