import {useState} from 'react';
import {onChangedTabProps, dataItemProps} from 'components/TabBarHeader';
import {useCallback} from 'react';
import {updateSignUpData} from 'app/slice';
import {useDispatch} from 'react-redux';

const useCompanyFacade = () => {
  const [selectedTab, setSelectedTab] = useState<dataItemProps | undefined>();
  const dispatch = useDispatch();

  const changedTabHandle = ({newTab}: onChangedTabProps) => {
    setSelectedTab(newTab);
  };

  const onSkip = useCallback(() => {
    dispatch(updateSignUpData(false));
  }, [dispatch]);

  return {
    selectedTab,
    changedTabHandle,
    onSkip,
  };
};

export default useCompanyFacade;
