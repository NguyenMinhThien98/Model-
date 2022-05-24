import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  companyNavigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 7,
    paddingBottom: 10,
    paddingRight: 7,
  },
  companyName: {
    color: Colors.greyDark,
    fontFamily: Fonts.bold,
    fontSize: 16,
    paddingTop: 7,
  },
  verticleLine: {
    backgroundColor: Colors.zircon,
    marginTop: 5,
    marginLeft: 17,
    marginRight: 17,
    height: 24,
    width: 1,
  },
});

export default styles;
