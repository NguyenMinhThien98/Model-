import CircularProgress from 'react-native-circular-progress-indicator/index';
import {Text, View} from 'react-native';
import React from 'react';
import styles from 'components/CompanyCircularProgressGradient/styles';
import {Colors} from '../../assets/colors';

type Props = {
  value: number;
};

const CompanyCircularProgressGradient = (props: Props) => {
  return (
    <View style={styles.circularProgressContainer}>
      <CircularProgress
        value={props.value}
        showProgressValue={false}
        inActiveStrokeColor={Colors.border}
        activeStrokeColor={Colors.gradient4}
        activeStrokeSecondaryColor={Colors.gradient5}
        radius={30}
        activeStrokeWidth={5}
        inActiveStrokeWidth={5}
      />
      <View style={styles.containerValue}>
        <Text style={styles.txtValue}>{props.value}</Text>
      </View>
    </View>
  );
};

export default CompanyCircularProgressGradient;
