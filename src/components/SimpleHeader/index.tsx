import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import styles from './styles';

interface CProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  headerText?: string;
  customLeftPress?: () => void;
  leftIconStyle?: ImageStyle;
}

const Header = ({
  leftIcon,
  rightIcon,
  headerText,
  customLeftPress,
  leftIconStyle = {},
}: CProps) => {
  const navigation = useNavigation();

  const onLeftPress = () => {
    if (customLeftPress) {
      customLeftPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftPress}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.leftIcon, leftIconStyle]}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      <Text style={styles.headerTxt}>{headerText}</Text>
      <TouchableOpacity style={styles.leftIconContainer}>
        {rightIcon && <Image source={rightIcon} style={styles.leftIcon} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
