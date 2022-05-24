import {useCallback, useState} from 'react';

const useMatchingViewFacade = () => {
  const [isListFilter, setIsListFilter] = useState(false);
  const [isVisibleSort, setIsVisibleSort] = useState(false);
  const [filterKeySelected, setFilterKeySelected] = useState('All');

  const onChangeVisibleSort = () => {
    setIsVisibleSort(value => !value);
  };

  const handlePressFilterTypeBtn = useCallback(() => {
    setIsListFilter(!isListFilter);
  }, [isListFilter]);

  const handlePressFilterKey = useCallback(item => {
    setFilterKeySelected(item);
  }, []);

  return {
    isListFilter,
    handlePressFilterTypeBtn,
    filterKeySelected,
    handlePressFilterKey,
    isVisibleSort,
    onChangeVisibleSort,
  };
};
export default useMatchingViewFacade;
