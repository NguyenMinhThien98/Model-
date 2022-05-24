import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {updatePurPoseUsingApp} from 'app/slice';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

const useMaqroFacade = () => {
  const [isAgree, setIsAgree] = useState(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onSelectYes = useCallback(() => {
    setIsAgree(true);
  }, []);

  const onSelectNo = useCallback(() => {
    setIsAgree(false);
  }, []);

  const onContinue = useCallback(() => {
    dispatch(updatePurPoseUsingApp(isAgree));
    navigation.navigate(SCREENS.SECTORS);
  }, [navigation, isAgree, dispatch]);

  return {
    isAgree,
    onSelectNo,
    onSelectYes,
    onContinue,
  };
};

export default useMaqroFacade;
