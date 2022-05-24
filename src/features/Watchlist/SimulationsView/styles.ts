import {StyleSheet} from 'react-native';
import {windowWidth} from 'config/constants';

const styles = StyleSheet.create({
  itemContainer: {
    width: (windowWidth - 45) / 2,
    marginLeft: 15,
    marginBottom: 13,
    height: 170,
  },
  rootContainer: {
    marginTop: 30,
  },
});

export default styles;
