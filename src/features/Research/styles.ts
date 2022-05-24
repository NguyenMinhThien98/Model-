import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  titleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewAllTxt: {
    fontFamily: Fonts.medium,
    color: Colors.grey600,
    fontSize: 14,
  },
  recommendationsView: {
    padding: 8,
    marginTop: 16,
  },
  inputStyle: {
    height: 40,
    flex: 0,
  },
});

export default styles;
