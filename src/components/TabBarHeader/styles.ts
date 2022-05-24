import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.border,
    padding: 4,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
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
  },
  titleSelected: {
    color: Colors.greyDark,
  },
  selectedItem: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
