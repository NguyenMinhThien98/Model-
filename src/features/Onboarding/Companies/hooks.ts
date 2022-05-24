import {updateSignUpData} from 'app/slice';
import {Stock} from 'models/Stock';
import {useCallback, useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import i18n from 'utils/LocalizedStrings';
import {createWatchListAction, getStockListAction} from './action';

const useStocksFacade = ({route}) => {
  const [stocksSelected, setStocksSelected] = useState([]);
  const dispatch = useDispatch();
  const industryIds = route?.params?.industryIds;

  const {loading, error, isEndList, stocks} = useGlobalState(
    state => state.stocks,
  );

  useEffect(() => {
    if (error) {
      showMessage({
        message: error?.message ?? i18n.t('app.default_message'),
      });
    }
  }, [error]);

  const onLoadSector = useCallback(
    params => {
      dispatch(getStockListAction({...params, industryIds}));
    },
    [dispatch, industryIds],
  );

  useEffect(() => {
    onLoadSector({isRefresh: true});
  }, [onLoadSector]);

  const onSelectItem = useCallback(
    item => {
      const isExist =
        stocksSelected.findIndex(
          (element: Stock) => element?.id === item?.id,
        ) !== -1;
      if (isExist) {
        setStocksSelected(list =>
          list.filter((element: Stock) => element?.id !== item?.id),
        );
      } else {
        setStocksSelected(list => [...list, item] as never[]);
      }
    },
    [stocksSelected],
  );

  const onSkip = useCallback(() => {
    dispatch(updateSignUpData(false));
  }, [dispatch]);

  const onContinue = useCallback(() => {
    dispatch(
      createWatchListAction(stocksSelected?.map((item: Stock) => item.id)),
    );
  }, [dispatch, stocksSelected]);

  const onLoadMoreList = useCallback(() => {
    if (!isEndList && !loading) {
      onLoadSector(null);
    }
  }, [isEndList, loading, onLoadSector]);

  const onRefreshList = useCallback(() => {
    onLoadSector({isRefresh: true});
  }, [onLoadSector]);

  return {
    onSkip,
    stocks,
    onSelectItem,
    stocksSelected,
    onContinue,
    onRefreshList,
    onLoadMoreList,
    loadingScreen: loading && stocks === null,
  };
};
export default useStocksFacade;
