import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {updateSignUpData} from 'app/slice';
import {Sector} from 'models/Sector';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';
import {useCallback, useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import useGlobalState from 'redux/useGlobalState';
import i18n from 'utils/LocalizedStrings';
import {getSectorListAction} from './action';

const useSectorsFacade = () => {
  const [sectorsSelected, setSectorsSelected] = useState([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const {isEndList, sectors, loading, error} = useGlobalState(
    state => state.sectors,
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
      dispatch(getSectorListAction(params));
    },
    [dispatch],
  );

  useEffect(() => {
    onLoadSector(null);
  }, [onLoadSector]);

  const onContinue = useCallback(() => {
    navigation.navigate(SCREENS.COMPANIES, {
      industryIds: sectorsSelected.map((item: Sector) => item.id),
    });
  }, [navigation, sectorsSelected]);

  const onSelectItem = useCallback(
    item => {
      const isExist =
        sectorsSelected.findIndex(
          (element: Sector) => element?.id === item?.id,
        ) !== -1;
      if (isExist) {
        setSectorsSelected(list =>
          list.filter((element: Sector) => element?.id !== item?.id),
        );
      } else {
        setSectorsSelected(list => [...list, item] as never[]);
      }
    },
    [sectorsSelected],
  );

  const onLoadMoreList = useCallback(() => {
    if (!isEndList && !loading) {
      onLoadSector(null);
    }
  }, [isEndList, loading, onLoadSector]);

  const onRefreshList = useCallback(() => {
    onLoadSector({isRefresh: true});
  }, [onLoadSector]);

  const onSkip = useCallback(() => {
    dispatch(updateSignUpData(false));
  }, [dispatch]);

  return {
    onSkip,
    sectors,
    onSelectItem,
    sectorsSelected,
    onContinue,
    onLoadMoreList,
    onRefreshList,
    loadingScreen: loading && sectors === null,
  };
};
export default useSectorsFacade;
