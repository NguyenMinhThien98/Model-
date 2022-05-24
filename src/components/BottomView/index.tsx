import {StyleSheet, View} from 'react-native';
import React, {ReactElement} from 'react';
import {Colors} from 'assets/colors';
import {ifIphoneX} from 'react-native-iphone-x-helper';

interface ViewProps {
  children: ReactElement;
}
const BottomView = ({children}: ViewProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    paddingTop: 10,
    paddingHorizontal: 15,
    ...ifIphoneX(
      {
        paddingBottom: 34,
      },
      {
        paddingBottom: 10,
      },
    ),
  },
});

export default BottomView;
