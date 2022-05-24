import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Images} from 'assets/images';
import i18n from 'utils/LocalizedStrings';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';
import Button from 'components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';

const DashBoardEmpty: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={Images.dashboard_empty} style={styles.image} />
      <Text style={styles.title}>{i18n.t('dashboard.first_portfolio')}</Text>
      <Text style={styles.description}>
        {i18n.t('dashboard.description_simulation')}
      </Text>
      <Button
        title={i18n.t('onboarding.start')}
        onPress={() => {
          navigation.navigate(SCREENS.COMPANY);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 35,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 37,
    marginBottom: 28,
    paddingHorizontal: 35,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    marginTop: -40,
    marginLeft: -30,
  },
});

export default DashBoardEmpty;
