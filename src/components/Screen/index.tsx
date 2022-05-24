import LoadingApp from 'components/LoadingApp';
import React, {ReactElement} from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets/colors';
import styles from './styles';

interface ScreenProps {
  statusBarColor?: string;
  barBackgroundColor?: string;
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  children: ReactElement;
  loading?: boolean;
  loadingColor?: string;
}
const Screen = ({
  statusBarColor = 'transparent',
  backgroundColor = Colors.bgColor,
  children,
  barStyle = 'light-content',
  loading = false,
  loadingColor = Colors.greyDark,
}: ScreenProps) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SafeAreaView style={styles.subContainer} edges={['right', 'left']}>
        <StatusBar
          translucent
          backgroundColor={statusBarColor}
          barStyle={barStyle}
        />
        <View style={styles.subContainer}>{children}</View>
      </SafeAreaView>
      {loading && <LoadingApp loadingColor={loadingColor} />}
    </View>
  );
};

export default Screen;
