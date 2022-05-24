import AccountHeader from 'components/AccountHeader';
import Button from 'components/Button';
import Screen from 'components/Screen';
import React, {FC} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';
import useSectorsFacade from './hooks';
import BottomView from 'components/BottomView';
import SectorItem from './SectorItem';
import {Sector} from 'models/Sector';
import {Colors} from 'assets/colors';
import {BUTTON_STATE} from 'config/constants';

const HeaderList = () => {
  return (
    <View>
      <Text style={styles.title}>{i18n.t('onboarding.sector_question')}</Text>
      <Text style={styles.description}>
        {i18n.t('onboarding.sector_description')}
      </Text>
    </View>
  );
};

const Sectors: FC = () => {
  const {
    onSkip,
    sectors,
    onSelectItem,
    sectorsSelected,
    onContinue,
    onLoadMoreList,
    onRefreshList,
    loadingScreen,
  } = useSectorsFacade();

  const renderItem = ({item}) => {
    const isChecked =
      sectorsSelected.findIndex(
        (element: Sector) => element?.id === item?.id,
      ) !== -1;
    return (
      <SectorItem sector={item} isChecked={isChecked} onSelect={onSelectItem} />
    );
  };

  return (
    <Screen loading={loadingScreen} loadingColor={Colors.white}>
      <>
        <AccountHeader onPressRight={onSkip} />
        <FlatList
          data={sectors}
          renderItem={renderItem}
          keyExtractor={item => `sector${item?.id}`}
          numColumns={2}
          style={styles.listStyle}
          columnWrapperStyle={styles.columnWrapper}
          ListHeaderComponent={<HeaderList />}
          onEndReachedThreshold={0.5}
          onEndReached={onLoadMoreList}
          refreshing={true}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onRefreshList}
              tintColor={Colors.white}
            />
          }
        />
        <BottomView>
          <Button
            title={i18n.t('sign_up.continue')}
            onPress={onContinue}
            state={
              sectorsSelected?.length > 0
                ? BUTTON_STATE.ACTIVE
                : BUTTON_STATE.DISABLE
            }
          />
        </BottomView>
      </>
    </Screen>
  );
};

export default Sectors;
