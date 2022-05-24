import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    height: 60,
  },
  headerLeftGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleContainer: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.zircon,
    paddingLeft: 15,
    marginLeft: 15,
  },
  headerTitleTxt: {
    fontSize: 16,
    color: Colors.greyDark,
    fontFamily: Fonts.bold,
  },
  goBackIcon: {
    tintColor: Colors.greyMedium,
    width: 20,
    height: 20,
  },
});

export default styles;
