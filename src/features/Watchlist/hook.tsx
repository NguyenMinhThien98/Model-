import {useState} from 'react';
import {onChangedTabProps, dataItemProps} from 'components/TabBarHeader';

const useWatchlistFacade = () => {
  const [selectedTab, setSelectedTab] = useState<dataItemProps | undefined>();
  const changedTabHandle = ({newTab}: onChangedTabProps) => {
    setSelectedTab(newTab);
  };
  return {
    selectedTab,
    changedTabHandle,
  };
};

export default useWatchlistFacade;
