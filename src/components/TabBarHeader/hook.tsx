import {useCallback, useEffect, useState} from 'react';
import {TabBarHeaderContainer, dataItemProps} from './index';
const useTabBarHeader = (props: TabBarHeaderContainer) => {
  const {onChangedTab, selectedTabValue} = props;
  const [selectedTab, setSelectedTab] = useState<dataItemProps | undefined>();

  const selectedTabHandle = useCallback(
    (item: dataItemProps) => {
      onChangedTab?.({oldTab: selectedTab, newTab: item});
      setSelectedTab(item);
    },
    [onChangedTab, selectedTab],
  );

  useEffect(() => {
    selectedTabValue && selectedTabHandle(selectedTabValue);
  }, [selectedTabValue]);

  return {
    selectedTab,
    selectedTabHandle,
  };
};

export default useTabBarHeader;
