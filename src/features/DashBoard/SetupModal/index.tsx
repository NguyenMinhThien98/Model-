import {Image, StyleSheet, Text} from 'react-native';
import React, {FC, useCallback} from 'react';
import AppModal from 'components/Modal';
import {Images} from 'assets/images';
import i18n from 'utils/LocalizedStrings';
import Button from 'components/Button';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';

const SetupModal: FC<{
  isVisible: boolean;
  onBackdropPress: () => void;
  isUsingTrade: boolean;
}> = ({isVisible, onBackdropPress, isUsingTrade}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressSetup = useCallback(() => {
    navigation.navigate(SCREENS.ACCOUNT_WELCOME);
    onBackdropPress();
  }, [navigation, onBackdropPress]);

  return (
    <AppModal
      modalVisible={isVisible}
      onBackdropPress={onBackdropPress}
      isTransparentBackdrop>
      <>
        <Image source={Images.ic_question} style={styles.questionIcon} />
        <Text style={styles.title}>
          {i18n.t(
            isUsingTrade
              ? 'dashboard.setup_question_yes'
              : 'dashboard.setup_question_no',
          )}
        </Text>
        <Text style={styles.note}>
          {i18n.t(
            isUsingTrade
              ? 'dashboard.setup_note_yes'
              : 'dashboard.setup_note_no',
          )}
        </Text>
        <Button
          title={i18n.t('dashboard.setup_account')}
          onPress={onPressSetup}
        />
        <Button
          title={i18n.t(
            isUsingTrade ? 'dashboard.setup_later' : 'dashboard.good_for_now',
          )}
          containerStyle={styles.laterButton}
          titleStyle={styles.laterTitle}
          onPress={onBackdropPress}
        />
      </>
    </AppModal>
  );
};

export default SetupModal;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.greyDark,
    textAlign: 'center',
    marginTop: 15,
  },
  note: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.greyMedium,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 35,
  },
  questionIcon: {
    alignSelf: 'center',
    marginTop: 15,
  },
  laterButton: {
    backgroundColor: Colors.border,
    marginTop: 10,
  },
  laterTitle: {
    color: Colors.greyDark,
  },
});
