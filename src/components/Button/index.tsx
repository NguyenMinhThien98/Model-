import {
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors} from 'assets/colors';
import {BUTTON_STATE} from 'config/constants';

interface ButtonProps {
  title?: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  titleStyle?: TextStyle;
  loading?: boolean;
  state?: string;
}

const Button = ({
  title,
  containerStyle,
  onPress,
  titleStyle,
  loading,
  state = BUTTON_STATE.ACTIVE,
}: ButtonProps) => {
  const getStyle = () => {
    let style = [styles.container, containerStyle];
    if (state === BUTTON_STATE.DISABLE) {
      style = [...style, styles.disableButton];
    }
    return style;
  };

  return (
    <TouchableOpacity
      style={getStyle()}
      activeOpacity={loading ? 1 : 0.5}
      onPress={loading && state !== BUTTON_STATE.DISABLE ? undefined : onPress}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
