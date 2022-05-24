import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  barChartContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.border,
    paddingTop: 10,
    paddingBottom: 27,
  },
  timeOptionContainer: {
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  timeOption: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  timeOptionText: {
    color: Colors.grey400,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  flatListRow: {
    flexDirection: 'row',
  },
});

export default styles;
