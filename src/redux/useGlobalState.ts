import {useSelector} from 'react-redux';
import {GlobalState} from './store';

const useGlobalState = <T>(selector: (state: GlobalState) => T): T => {
  return useSelector<GlobalState, T>(selector);
};

export default useGlobalState;
