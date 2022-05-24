import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../features/Splash';
import {SignUp} from '../features/SignUp';
import Onboarding from 'features/Onboarding';
import UseMaqro from 'features/Onboarding/UseMaqro';
import Sectors from 'features/Onboarding/Sectors';
import Companies from 'features/Onboarding/Companies';
import {SignIn} from 'features/SignIn';
import {SCREENS} from './NavigationTypes';
import ForgotPassword from 'features/SignIn/ForgotPassword';

const Stack = createStackNavigator();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
      <Stack.Screen name={SCREENS.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={SCREENS.USE_MAQRO} component={UseMaqro} />
      <Stack.Screen name={SCREENS.SECTORS} component={Sectors} />
      <Stack.Screen name={SCREENS.COMPANIES} component={Companies} />
      <Stack.Screen name={SCREENS.LOGIN} component={SignIn} />
      <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
};
