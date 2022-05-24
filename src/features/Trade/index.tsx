import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import styles from './styles';

const Trade: FC = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Research</Text>
      </View>
    </Screen>
  );
};

export default Trade;
