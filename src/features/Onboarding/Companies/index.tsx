import React from 'react';
import useStocksFacade from './hooks';
import Screen from 'components/Screen';
import AccountHeader from 'components/AccountHeader';
import BottomView from 'components/BottomView';
import Button from 'components/Button';
import i18n from 'utils/LocalizedStrings';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './styles';
import {Stock} from 'models/Stock';
import StockItem from './StockItem';
import {CompanyScreenProps} from 'navigation/NavigationTypes';
import {Colors} from 'assets/colors';
import {BUTTON_STATE} from 'config/constants';

const HeaderList = () => {
  return (
    <View>
      <Text style={styles.title}>{i18n.t('onboarding.stock_question')}</Text>
      <Text style={styles.description}>
        {i18n.t('onboarding.stock_description')}
      </Text>
    </View>
  );
};

const Companies = ({route}: CompanyScreenProps) => {
  const {
    onSkip,
    stocks,
    onSelectItem,
    stocksSelected,
    onContinue,
    onRefreshList,
    onLoadMoreList,
    loadingScreen,
  } = useStocksFacade({route});

  const renderItem = ({item, index}) => {
    const isChecked =
      stocksSelected.findIndex((element: Stock) => element?.id === item?.id) !==
      -1;
    return (
      <StockItem
        stock={item}
        isChecked={isChecked}
        onSelect={onSelectItem}
        index={index}
      />
    );
  };

  return (
    <Screen loading={loadingScreen} loadingColor={Colors.white}>
      <>
        <AccountHeader onPressRight={onSkip} />
        <FlatList
          data={stocks}
          renderItem={renderItem}
          keyExtractor={item => `stock${item?.id}`}
          numColumns={3}
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
              stocksSelected?.length > 0
                ? BUTTON_STATE.ACTIVE
                : BUTTON_STATE.DISABLE
            }
          />
        </BottomView>
      </>
    </Screen>
  );
};

export default Companies;
