import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 130,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  radioView: {
    width: '70%',
    alignItems: 'center',
  },
  actionButton: {
    width: '15%',
  },
  rightText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
  rightButton: {
    borderBottomWidth: 1,
    borderColor: Colors.white,
  },
  actionHitSlop: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  rightIconButton: {
    right: 0,
    width: '15%',
    alignItems: 'flex-end',
  },
});

export default styles;
