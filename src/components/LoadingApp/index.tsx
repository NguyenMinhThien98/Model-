import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from 'assets/colors';

interface LoadingProps {
  loadingColor?: string;
}
const LoadingApp = ({loadingColor = Colors.greyDark}: LoadingProps) => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator color={loadingColor} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingApp;
