import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  progressItem: {
    height: 4,
    borderRadius: 2,
    width: '100%',
    backgroundColor: Colors.grey,
  },
  activeProgress: {
    height: 4,
    borderRadius: 2,
  },
  container: {marginHorizontal: 15},
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    color: Colors.greyMedium,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
  containerHeaderRight: {
    flexDirection: 'row',
    height: 26,
    borderRadius: 32,
    marginTop: 15,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  image: {
    marginLeft: 8,
  },
  value: {
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
});

export default styles;
