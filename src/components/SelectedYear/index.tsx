import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const SeletedYear = ({item, onPress, textColor, fontSize, backgroundColor}) => {
  return (
    <View style={styles.timeOption}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.timeOptionText, textColor, fontSize]}>
          {item.year}
        </Text>
        <View style={[styles.underLine, backgroundColor]} />
      </TouchableOpacity>
    </View>
  );
};
export default SeletedYear;
