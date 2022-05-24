import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
});

export const noResultStyles = StyleSheet.create({
  noResultContainer: {
    alignItems: 'center',
  },
  backgroundNoResult: {
    width: 375,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMatchTxt: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  keywordTxt: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  tryInsteadView: {
    borderTopWidth: 1,
    borderTopColor: Colors.centerBorder,
    marginBottom: 35,
    paddingTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  tryInsteadTxt: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
});
