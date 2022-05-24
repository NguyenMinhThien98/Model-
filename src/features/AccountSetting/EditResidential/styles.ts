import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.orange,
    flex: 1,
    marginTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  addressContainer: {
    paddingHorizontal: 15,
    backgroundColor: Colors.border,
  },
  bottomContainer: {
    height: 70,
    backgroundColor: Colors.white,
  },
  updateButton: {
    flex: 1,
    margin: 15,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
});

export default styles;
