import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  tableContainer: {
    height: '100%',
    marginTop: 21,
    marginLeft: 15,
    marginRight: 15,
  },
  tableHeader: {
    marginBottom: 6,
  },
  table_text: {
    color: Colors.greyMedium,
    marginRight: 36,
  },
  divider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    backgroundColor: Colors.zircon,
  },
  tableDataWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
  tableDataText: {
    color: Colors.greyDark,
    fontSize: 14,
  },
  code_date_text: {
    fontFamily: Fonts.regular,
    marginRight: 40,
  },
  code_text: {
    fontFamily: Fonts.bold,
    textTransform: 'uppercase',
    marginRight: 35,
  },
  typeTagGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: 76,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12,
  },
  chevronPrimaryRight: {
    marginTop: 4,
  },
  openTag: {
    backgroundColor: Colors.zircon,
  },
  openTagText: {
    color: Colors.primary600,
  },
  sellTag: {
    backgroundColor: Colors.error200,
  },
  sellTagText: {
    color: Colors.error600,
  },
  closedTag: {
    backgroundColor: Colors.border,
  },
  closedTagText: {
    color: Colors.grey600,
  },
  buyTag: {
    backgroundColor: Colors.success200,
  },
  buyTagText: {
    color: Colors.success800,
  },
  tagCover: {
    borderRadius: 10,
    width: 48,
  },
  tagTextStyle: {
    textTransform: 'uppercase',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 10,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
});

export default styles;
