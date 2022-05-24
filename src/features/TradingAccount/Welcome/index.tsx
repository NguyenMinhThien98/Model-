import {ScrollView, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import Screen from 'components/Screen';
import i18n from 'utils/LocalizedStrings';
import {Colors} from 'assets/colors';
import styles from './styles';
import AccountHeader from 'components/AccountHeader';
import {Images} from 'assets/images';
import Button from 'components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';

export const AccountWelcome: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressNext = useCallback(() => {
    navigation.navigate(SCREENS.ACCOUNT_TYPE);
  }, [navigation]);
  return (
    <Screen loadingColor={Colors.white}>
      <>
        <AccountHeader
          leftIcon={Images.close}
          leftIconStyle={styles.closeIcon}
        />
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titleText}>
              {i18n.t('personal_account.welcome')}
            </Text>
            <Text style={styles.content}>
              {i18n.t('personal_account.welcome_content')}
            </Text>
          </ScrollView>
          <Button title={i18n.t('login.next')} onPress={onPressNext} />
        </View>
      </>
    </Screen>
  );
};
