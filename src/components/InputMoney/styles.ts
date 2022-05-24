import {StyleSheet} from 'react-native';
import {Colors} from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyLight,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  suffixesContainerStyle: {
    height: '100%',
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  suffixesSubContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
