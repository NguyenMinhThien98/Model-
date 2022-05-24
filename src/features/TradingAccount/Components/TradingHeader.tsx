import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import AccountHeader from 'components/AccountHeader';
import {Images} from 'assets/images';
import {Colors} from 'assets/colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {updateAccountData} from '../slide';

const TradingHeader = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(updateAccountData({data: null}));
    navigation.navigate(SCREENS.MAIN_TAB);
  }, [navigation, dispatch]);

  return (
    <AccountHeader
      rightIcon={Images.close}
      rightIconStyle={styles.closeIcon}
      onPressRight={onClose}
    />
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.darkMode70,
  },
});

export default TradingHeader;
