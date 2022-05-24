import {Text, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const OutLineButton = ({title, containerStyle, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutLineButton;
