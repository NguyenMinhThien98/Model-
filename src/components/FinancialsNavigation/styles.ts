import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 4,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 35,
  },
});

export const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 13,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.grey600,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginBottom: 10,
  },
  titleSelected: {
    color: Colors.greyDark,
    marginBottom: 4,
  },
  selected: {
    backgroundColor: Colors.greyDark,
    borderRadius: 10,
    width: 14,
    height: 5,
  },
});
