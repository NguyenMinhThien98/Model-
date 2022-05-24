import {ViewStyle, View, TouchableOpacity, Image} from 'react-native';
import React, {ReactElement} from 'react';
import {Images} from 'assets/images';
import styles from './styles';

interface ChoiceCardProps {
  containerStyle?: ViewStyle;
  isChecked: boolean;
  onSelect: () => void;
  children: ReactElement;
}

const CheckCard = ({
  children,
  isChecked,
  onSelect,
  containerStyle,
}: ChoiceCardProps) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View
        style={[isChecked ? styles.checked : styles.unchecked, containerStyle]}>
        {children}
      </View>
      {isChecked && <Image source={Images.ic_check} style={styles.checkIcon} />}
    </TouchableOpacity>
  );
};

export default CheckCard;
