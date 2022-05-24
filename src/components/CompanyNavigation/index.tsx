import {View, TouchableOpacity, Text, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import {useNavigation} from '@react-navigation/native';
import i18n from 'utils/LocalizedStrings';

const CompanyNavigation = (props: {navigationValue: string[]}) => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.companyNavigationContainer}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={Images.ic_arrow_back} />
      </TouchableOpacity>
      <View style={styles.verticleLine} />
      <Text style={styles.companyName}>
        {i18n.t(props.navigationValue[0])} {i18n.t(props.navigationValue[1])}
      </Text>
    </View>
  );
};

export default CompanyNavigation;
