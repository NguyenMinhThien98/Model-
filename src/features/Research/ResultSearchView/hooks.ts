import {useCallback, useState} from 'react';
import useGlobalState from '../../../redux/useGlobalState';
import {ItemRecent} from '../../../models/ItemResultSearch';
import {useDispatch} from 'react-redux';
import {deleteRecent, getRecentAction} from 'features/Research/action';
import {_mockupData} from 'features/Research/MainResearchView/hook';

const useResultViewFacade = () => {
  const researchStates = useGlobalState(state => state.research);
  const resultSearches = researchStates.resultSearches;
  const recentSearches = researchStates.recentSearches;
  const topSearches = researchStates.topSearches;
  const [recommendations, setRecommendations] = useState(_mockupData);
  const [topMovers, setTopMovers] = useState(_mockupData);

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
    recentSearches,
    topSearches,
    resultSearches,
    onPressRecentItem,
    onDeleteRecentSearch,
    onDeleteTopSearchHandle,
    recommendations,
    topMovers,
  };
};

export default useResultViewFacade;
