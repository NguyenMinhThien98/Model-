import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    padding: 15,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    paddingBottom: 15,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  section: {
    paddingBottom: 15,
  },
  fieldRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.centerBorder,
    minHeight: 40,
    alignItems: 'center',
  },
  fieldName: {
    fontFamily: Fonts.regular,
    width: 135,
  },
  fieldValue: {
    fontFamily: Fonts.regular,
    flex: 1,
  },
  residentialFieldValue: {
    fontFamily: Fonts.regular,
    flex: 1,
    paddingVertical: 6,
    width: '50%',
  },
  borderTop: {
    borderTopWidth: 0.5,
    borderColor: Colors.centerBorder,
  },
  editIcon: {
    height: 18,
    width: 18,
  },
});
export default styles;
