import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Images} from 'assets/images';
import {Fonts} from 'assets/fonts';
import {Colors} from 'assets/colors';

interface RaidoProps {
  isChecked: boolean;
  title: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  titleStyle?: ViewStyle;
  darkMode?: boolean;
}
const RadioButton = ({
  isChecked,
  title,
  containerStyle,
  onPress,
  titleStyle,
  darkMode,
}: RaidoProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={onPress ? 0.5 : 1}>
      <Image
        source={isChecked ? Images.ic_radio_checked : Images.ic_radio_unchecked}
      />
      <Text style={[styles.title, darkMode && styles.titleDark, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.greyDark,
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginTop: 2,
    width: 17,
    height: 17,
    resizeMode: 'stretch',
  },
  titleDark: {
    color: Colors.darkModeText,
  },
});

export default RadioButton;
