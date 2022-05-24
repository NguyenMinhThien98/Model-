import {StyleSheet} from 'react-native';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black50,
  },
  safeViewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewMain: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  viewHeader: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.zircon,
    paddingHorizontal: 16,
  },
  textTitle: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  padding16: {
    padding: 16,
  },
});
export default styles;
