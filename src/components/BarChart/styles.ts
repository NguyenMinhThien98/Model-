import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  progressItem: {
    height: 16,
    borderRadius: 10,
    width: '80%',
    backgroundColor: Colors.white,
  },
  activeProgress: {
    height: 16,
    borderRadius: 10,
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
    marginBottom: 4,
    marginTop: 11,
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
  containerRight: {
    width: '30%',
  },
  item: {flexDirection: 'row'},
});

export default styles;
