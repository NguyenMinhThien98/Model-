import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/NavigationTypes';
import {useCallback} from 'react';

const useSimulationViewFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goBackHandle = useCallback(() => {
    return navigation.goBack();
  }, [navigation]);

  return {
    goBackHandle,
  };
};

export default useSimulationViewFacade;
