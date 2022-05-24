import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Images} from 'assets/images';
import Button from 'components/Button';
import Screen from 'components/Screen';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import React, {FC, useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';

const Onboarding: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onStartPress = useCallback(() => {
    navigation.navigate(SCREENS.USE_MAQRO);
  }, [navigation]);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.onboarding} resizeMode="contain" />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.title}>{i18n.t('onboarding.welcome')}</Text>
          <Text style={styles.greeting}>{i18n.t('onboarding.greeting')}</Text>
          <Button title={i18n.t('onboarding.start')} onPress={onStartPress} />
        </View>
      </View>
    </Screen>
  );
};

export default Onboarding;
