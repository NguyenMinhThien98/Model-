// import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  leftIconView: {
    marginRight: 12,
  },
  rightIconView: {
    marginRight: 0,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: Colors.greyMedium,
  },
});

export default styles;
