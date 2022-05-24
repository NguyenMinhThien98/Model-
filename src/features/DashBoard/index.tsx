import React, {FC} from 'react';
import Screen from 'components/Screen';
import DashBoardHeader from '../../components/DashboardHeader';
import DashBoardEmpty from './EmptyDashboard';
import SetupModal from './SetupModal';
import useDashboardFacade from './hook';
import {t} from 'i18next';
const DashBoard: FC = () => {
  const {isVisibleModal, onHideModal, isUsingTrade} = useDashboardFacade();
  return (
    <Screen>
      <>
        <DashBoardHeader title={t('dashboard.dashboard')} />
        <DashBoardEmpty />
        <SetupModal
          isVisible={isVisibleModal}
          onBackdropPress={onHideModal}
          isUsingTrade={isUsingTrade}
        />
      </>
    </Screen>
  );
};

export default DashBoard;
