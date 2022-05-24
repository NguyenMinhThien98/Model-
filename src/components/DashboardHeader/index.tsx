import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {Images} from 'assets/images';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import styles from './styles';

interface headerDashboardProps {
  title: string;
}

const DashBoardHeader = ({title}: headerDashboardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goSetupAccount = useCallback(() => {
    navigation.navigate(SCREENS.ACCOUNT_WELCOME);
  }, [navigation]);

  const goToAccountSetting = () => {
    navigation.navigate(SCREENS.ACCOUNT_SETTING);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} hitSlop={styles.buttonHitSlop}>
        <Image source={Images.ic_search} style={styles.searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        hitSlop={styles.buttonHitSlop}
        onPress={goSetupAccount}>
        <Image source={Images.ic_notification} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToAccountSetting}
        style={styles.buttonLast}
        hitSlop={styles.buttonHitSlop}>
        <Image source={Images.ic_profile} />
      </TouchableOpacity>
    </View>
  );
};

export default DashBoardHeader;
