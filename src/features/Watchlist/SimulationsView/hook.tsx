import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback} from 'react';

const useSimulationViewFacade = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const pressSimulationCardHandle = useCallback(() => {
    return navigation.navigate(SCREENS.SIMULATION_DETAIL);
  }, [navigation]);

  return {
    pressSimulationCardHandle,
  };
};

export default useSimulationViewFacade;
