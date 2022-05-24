import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import styles from './styles';

const Portfolio: FC = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Portfolio</Text>
      </View>
    </Screen>
  );
};

export default Portfolio;
