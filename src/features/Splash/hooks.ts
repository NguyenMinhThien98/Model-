import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from 'navigation/NavigationTypes';

const useSignUpFacade = () => {
  const navigation = useNavigation<any>();

  const onPressSignUp = useCallback(() => {
    navigation.navigate(SCREENS.SIGN_UP);
  }, [navigation]);

  const onPressSignIn = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
  }, [navigation]);

  const onForgotPassword = useCallback(() => {
    navigation.navigate(SCREENS.FORGOT_PASSWORD);
  }, [navigation]);

  return {
    onPressSignUp,
    onPressSignIn,
    onForgotPassword,
  };
};

export default useSignUpFacade;
