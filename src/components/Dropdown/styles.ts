import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StatusBar, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  content: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.greyDark,
    flex: 1,
    paddingHorizontal: 10,
  },
  darkContent: {
    color: Colors.darkMode70,
  },
  itemContainer: {
    paddingVertical: 5,
    marginVertical: 3,
    flexDirection: 'row',
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.white,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  textLightMode: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.darkMode20,
    marginHorizontal: -10,
    marginBottom: 10,
  },
  separatorLightMode: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: -10,
    marginBottom: 10,
  },
  selectedContainer: {
    backgroundColor: Colors.darkMode20,
    justifyContent: 'center',
    borderRadius: 5,
    paddingRight: 10,
  },
  selectedLightModeContainer: {
    backgroundColor: Colors.border,
    justifyContent: 'center',
    borderRadius: 5,
    paddingRight: 10,
  },
  modalStyle: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
  selectButton: {
    marginTop: 10,
    marginHorizontal: 15,
    ...ifIphoneX(
      {
        marginBottom: 34,
      },
      {
        marginBottom: 15,
      },
    ),
  },
  backdropStyle: {
    justifyContent: 'flex-end',
    paddingTop: StatusBar.currentHeight ?? 44,
  },
  modalContainerStyle: {
    paddingHorizontal: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginHorizontal: 0,
  },
  buttonView: {
    backgroundColor: Colors.white,
  },
  buttonViewDark: {
    backgroundColor: Colors.darkMode10,
  },
  modalParent: {
    // paddingTop: StatusBar.currentHeight ?? 44,
  },
});

export default styles;
