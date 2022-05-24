import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionList: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  contentList: {
    paddingBottom: 30,
  },
  sectionItem: {
    backgroundColor: Colors.grey50,
    height: 52,
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 9,
  },
  sectionTxt: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    flex: 1,
  },
  sectionIcon: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  rightIcon: {
    height: 14,
    width: 8,
  },
});

export default styles;
