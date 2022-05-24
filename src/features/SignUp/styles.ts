import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  body: {flex: 1},
  titleText: {
    fontSize: 26,
    fontFamily: Fonts.bold,
    color: Colors.greyDark,
  },
  subContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  haveAccount: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputStyle: {
    marginTop: 15,
  },
  agreeTerm: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
    marginTop: 23,
    marginBottom: 30,
  },
  primaryText: {
    color: Colors.primary,
  },
  checkEmpty: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ruleContent: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.greyMedium,
    marginLeft: 10,
  },
  ruleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  validateContainer: {
    marginTop: 15,
  },
  highlightText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.primary,
    textDecorationLine: 'underline',
    lineHeight: 24,
  },
});

export default styles;
