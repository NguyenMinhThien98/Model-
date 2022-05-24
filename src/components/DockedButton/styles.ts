import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  dockedButtonContainer: {
    marginTop: 37,
  },
  buttonWithoutBorder: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonWithoutBorderText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonWithBorder: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonWithBorderText: {
    color: Colors.primary600,
    fontFamily: Fonts.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  bottomHeight: {
    height: 50,
  },
});

export default styles;
