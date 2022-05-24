import {
  ViewStyle,
  View,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'assets/colors';

interface ChoiceCardProps {
  title?: string;
  content?: string;
  containerStyle?: ViewStyle;
  isChecked: boolean;
  onSelect: () => void;
  activeIcon?: ImageSourcePropType;
  inActiveIcon?: ImageSourcePropType;
}

const ChoiceCard = ({
  title,
  content,
  containerStyle,
  isChecked,
  onSelect,
  activeIcon,
  inActiveIcon,
}: ChoiceCardProps) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <LinearGradient
        style={[styles.container, isChecked && styles.checked, containerStyle]}
        useAngle={true}
        angle={304.39}
        colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]}>
        <View style={styles.contentStyle}>
          {activeIcon && inActiveIcon && (
            <Image
              source={isChecked ? activeIcon : inActiveIcon}
              style={styles.leftIcon}
            />
          )}
          <View style={styles.textView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
          <Image
            source={
              isChecked ? Images.ic_radio_checked : Images.ic_radio_unchecked
            }
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ChoiceCard;
