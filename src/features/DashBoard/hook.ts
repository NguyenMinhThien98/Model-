import {useCallback, useState} from 'react';
import useGlobalState from 'redux/useGlobalState';

const useDashboardFacade = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(true);
  const isUsingTrade = useGlobalState(state => state.app.isUsingTrade);

  const onHideModal = useCallback(() => {
    setIsVisibleModal(false);
  }, []);

  return {
    isVisibleModal,
    onHideModal,
    isUsingTrade,
  };
};

export default useDashboardFacade;
