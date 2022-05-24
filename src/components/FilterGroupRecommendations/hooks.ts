import {dataItemProps, onChangedTabProps} from 'components/TabBarHeader';
import {useCallback, useState} from 'react';

const useViewAllRecommendations = () => {
  const [selectedTab, setSelectedTab] = useState<dataItemProps | undefined>();
  const [inputSearch, setInputSearch] = useState<string>('');
  const [isShowClearSearchBtn, setIsShowClearSearchBtn] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const [filterKeySelected, setFilterKeySelected] = useState('All');

  const changedTabHandle = ({newTab}: onChangedTabProps) => {
    setSelectedTab(newTab);
  };

  const onPressSearch = useCallback(() => {
    onToggleFilters();
  }, [onToggleFilters]);

  const onPressClearSearchHandle = useCallback(() => {
    setInputSearch('');
    setIsShowClearSearchBtn(false);
  }, []);

  const onSubmitEditingHandle = useCallback(() => {
    if (!inputSearch) {
      return;
    }
    setIsShowClearSearchBtn(true);
  }, [inputSearch]);

  const onToggleFilters = useCallback(() => {
    setIsVisibleFilter(!isVisibleFilter);
  }, [isVisibleFilter]);

  const handlePressFilterKey = useCallback(item => {
    setFilterKeySelected(item);
  }, []);

  return {
    selectedTab,
    changedTabHandle,
    inputSearch,
    setInputSearch,
    onPressSearch,
    onPressClearSearchHandle,
    isShowClearSearchBtn,
    onSubmitEditingHandle,
    isVisibleFilter,
    onToggleFilters,
    filterKeySelected,
    handlePressFilterKey,
  };
};

export default useViewAllRecommendations;
