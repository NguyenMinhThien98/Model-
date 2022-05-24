import {Colors} from 'assets/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  checked: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.success,
    overflow: 'hidden',
  },
  checkIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  unchecked: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default styles;
