import {Colors} from 'assets/colors';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginHorizontal: 15,
  },
  body: {
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: Colors.overlayWhite,
  },
  message: {
    marginTop: 0,
    marginHorizontal: 0,
    paddingTop: Platform.OS === 'android' ? 20 : 56,
  },
  darkContainer: {
    backgroundColor: Colors.darkMode10,
  },
  modal: {
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: Colors.white,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  darkModeBackdrop: {
    backgroundColor: 'rgba(18, 22, 32, 0.7)',
  },
});

export default styles;
