import {useCallback} from 'react';
import useGlobalState from '../../../redux/useGlobalState';
import {ItemRecent} from '../../../models/ItemResultSearch';
import {useDispatch} from 'react-redux';
import {deleteRecent, getRecentAction} from 'features/Research/action';

const useSearchViewFacade = () => {
  const researchStates = useGlobalState(state => state.research);
  const resultSearches = researchStates.resultSearches;
  const recentSearches = researchStates.recentSearches;
  const topSearches = researchStates.topSearches;

  const dispatch = useDispatch();

  const onPressRecentItem = (item: ItemRecent) => {};

  const onDeleteRecentSearch = (item: ItemRecent) => {
    dispatch(deleteRecent(item.id));
    dispatch(getRecentAction());
  };

  const onDeleteTopSearchHandle = useCallback(item => {
    return item;
  }, []);

  return {
    recentSearchData: recentSearches,
    topSearchData: topSearches,
    resultSearchData: resultSearches,
    onPressRecentItem,
    onDeleteRecentSearch,
    onDeleteTopSearchHandle,
    recentSearches,
  };
};

export default useSearchViewFacade;
