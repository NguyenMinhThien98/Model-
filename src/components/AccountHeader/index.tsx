import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import i18next from 'i18next';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  rightText?: string;
  onPressRight?: () => void;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  onPressLeft?: () => void;
  leftIconStyle?: ImageStyle;
  rightIconStyle?: ImageStyle;
}

const AccountHeader = ({
  rightText = i18next.t('onboarding.skip'),
  onPressRight,
  rightIcon,
  leftIcon = Images.ic_arrow_back,
  onPressLeft,
  leftIconStyle,
  rightIconStyle,
}: HeaderProps) => {
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onPressLeft ?? onPressBack}
          hitSlop={styles.actionHitSlop}>
          <Image source={leftIcon} style={leftIconStyle} />
        </TouchableOpacity>
        <View style={styles.radioView}>
          <Image source={Images.radio_line} />
        </View>
        {onPressRight && !rightIcon && (
          <TouchableOpacity
            onPress={onPressRight}
            style={styles.rightButton}
            hitSlop={styles.actionHitSlop}>
            <Text style={styles.rightText}>{rightText}</Text>
          </TouchableOpacity>
        )}
        {onPressRight && rightIcon && (
          <TouchableOpacity
            style={styles.rightIconButton}
            onPress={onPressRight}
            hitSlop={styles.actionHitSlop}>
            <Image source={rightIcon} style={rightIconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AccountHeader;
