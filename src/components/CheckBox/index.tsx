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

interface CheckBoxProps {
  isChecked: boolean;
  title: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  titleStyle?: ViewStyle;
  darkMode?: boolean;
}
const CheckBox = ({
  isChecked,
  title,
  containerStyle,
  onPress,
  titleStyle,
  darkMode,
}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={onPress ? 0.5 : 1}>
      <Image
        source={isChecked ? Images.ic_cb_checked : Images.ic_cb_unchecked}
        style={styles.icon}
      />
      <Text style={[styles.title, darkMode && styles.darkText, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.greyDark,
    marginLeft: 10,
  },
  icon: {
    marginTop: 2,
    width: 17,
    height: 17,
    resizeMode: 'stretch',
  },
  darkText: {
    color: Colors.darkModeText,
  },
});

export default CheckBox;
