import CircularProgress from 'react-native-circular-progress-indicator/index';
import {Text, View} from 'react-native';
import React from 'react';
import styles from 'components/CircularProgressGradient/styles';
import {Colors} from '../../assets/colors';

type Props = {
  value: number;
};

const CircularProgressGradient = (props: Props) => {
  return (
    <View>
      <CircularProgress
        value={props.value}
        showProgressValue={false}
        inActiveStrokeColor={Colors.border}
        activeStrokeColor={Colors.gradient4}
        activeStrokeSecondaryColor={Colors.gradient5}
        radius={16}
        activeStrokeWidth={4}
        inActiveStrokeWidth={4}
      />
      <View style={styles.containerValue}>
        <Text style={styles.txtValue}>{props.value}</Text>
      </View>
    </View>
  );
};

export default CircularProgressGradient;
