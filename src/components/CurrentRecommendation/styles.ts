import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {Fonts} from '../../assets/fonts';

const styles = StyleSheet.create({
  recommendationsDescription: {
    color: Colors.greyMedium,
    paddingBottom: 15,
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
  },
  recommendationsContent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    width: 308,
  },
  contentTitle: {
    color: Colors.greyDark,
    fontfamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 16,
    paddingTop: 3,
    paddingBottom: 3,
  },
  contentDescription: {
    color: Colors.greyDark,
    fontfamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  recommendationsIcon: {
    marginTop: 5,
    marginRight: 16,
  },
});

export default styles;
