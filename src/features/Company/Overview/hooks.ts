import {updateSignUpData} from 'app/slice';
import {Stock} from 'models/Stock';
import {useCallback, useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import i18n from 'utils/LocalizedStrings';

const useOverviewFacade = () => {
  const [stocksSelected, setStocksSelected] = useState([]);
  const dispatch = useDispatch();

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

  const onContinue = useCallback(() => {}, []);

  const onLoadMoreList = useCallback(() => {
    if (!isEndList && !loading) {
    }
  }, [isEndList, loading]);

  const fakeData = [
    {
      value: 100,
      label: '',
    },
    {
      value: 120,
      label: '1D',
    },
    {
      value: 210,
      label: '',
    },
    {
      value: 250,
      label: '',
    },
    {
      value: 320,
      label: '1W',
    },
    {
      value: 310,
      label: '',
    },
    {
      value: 270,
      label: '',
    },
    {
      value: 240,
      label: '1M',
    },
    {
      value: 130,
      label: '',
    },
    {
      value: 120,
      label: '',
    },
    {
      value: 100,
      label: '1Y',
    },
    {
      value: 210,
      label: '',
    },
    {
      value: 270,
      label: '',
    },
    {
      value: 240,
      hideDataPoint: true,
      label: '3Y',
    },
    {
      value: 120,
      label: '',
    },
    {
      value: 100,
      label: '',
    },
    {
      value: 210,
      label: '5Y',
    },
    {
      value: 20,
      label: '',
    },
    {
      value: 100,
      label: '',
    },
  ];

  return {
    onSkip,
    stocks,
    onSelectItem,
    stocksSelected,
    onContinue,
    onLoadMoreList,
    loadingScreen: loading && stocks === null,
    fakeData,
  };
};
export default useOverviewFacade;
