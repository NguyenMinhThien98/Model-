import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    ...ifIphoneX(
      {
        paddingBottom: 34,
      },
      {
        paddingBottom: 10,
      },
    ),
  },
  accountType: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.darkModeText,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.white,
    marginTop: 15,
  },
  note: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.darkMode70,
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  titleContainer: {alignSelf: 'flex-start', width: 110},
  separatorLine: {
    height: 1,
    backgroundColor: Colors.borderDark,
    marginVertical: 30,
  },
  titleSmall: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.white,
    marginTop: -5,
    flex: 1,
  },
  nextButton: {
    marginTop: 15,
  },
  scrolView: {
    paddingBottom: 40,
  },
  spaceTop: {
    marginTop: 30,
  },
  titleQuestion: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.white,
    marginTop: 20,
  },
  optionView: {
    paddingTop: 7,
  },
  row: {
    flexDirection: 'row',
  },
  expiryDate: {
    marginRight: 15,
    flex: 1,
  },
  lineNoBottom: {
    marginBottom: 0,
  },
  checkBoxAddress: {
    marginTop: 20,
  },
  smallText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.darkMode70,
  },
  editText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.darkMode70,
    textDecorationLine: 'underline',
  },
  leftTable: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.darkMode70,
    flex: 1,
    marginLeft: 12,
    marginRight: 20,
  },
  leftCell: {
    flex: 2,
    marginVertical: 12,
    justifyContent: 'center',
  },
  rightTable: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.white,
    marginRight: 12,
  },
  rightCell: {
    flex: 3,
    marginVertical: 12,
    justifyContent: 'center',
  },
  dataInfoContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: Colors.darkMode20,
    borderWidth: 1,
  },
  infoNameContainer: {
    marginBottom: 20,
  },
  successModal: {
    paddingTop: 30,
  },
  successTitle: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: Colors.greyDark,
    marginTop: 15,
    textAlign: 'center',
  },
  successContent: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.grey600,
    marginTop: 15,
    textAlign: 'center',
  },
  successIcon: {
    alignSelf: 'center',
  },
  whiteBg: {
    backgroundColor: Colors.white,
  },
  overlaySuccess: {
    backgroundColor: Colors.overlayWhite,
  },
  body: {flex: 1},
  trustRoleCheckBox: {
    marginTop: 12,
  },
  stateInput: {
    flex: 1,
  },
});

export default styles;
