import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {MainRoot} from './MainRoot';
import useGlobalState from 'redux/useGlobalState';
import SplashScreen from 'react-native-splash-screen';

export const AppNavigation: FC = () => {
  const userInfo = useGlobalState(state => state.app.userInfo);
  const isSignUpAccount = useGlobalState(state => state.app.isSignUpAccount);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {/* <MainRoot /> */}
      {userInfo && !isSignUpAccount ? <MainRoot /> : <AuthStack />}
    </NavigationContainer>
  );
};
