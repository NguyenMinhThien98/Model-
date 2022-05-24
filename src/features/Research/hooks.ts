import {useEffect, useState} from 'react';
import {debounce} from 'throttle-debounce';
import {useDispatch} from 'react-redux';
import {searchAction, getRecentAction, getTopAction} from './action';
import useGlobalState from '../../redux/useGlobalState';
import {Keyboard} from 'react-native';
import {Filters} from 'models/Filters';

const useSearchFacade = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [isShowClearSearchBtn, setIsShowClearSearchBtn] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [filters, setFilters] = useState<Filters | undefined>(undefined);
  const researchStates = useGlobalState(state => state.research);
  const isUpdate = researchStates.isUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentAction());
    dispatch(getTopAction());
  }, [dispatch]);

  useEffect(() => {
    isUpdate && dispatch(getRecentAction());
  }, [dispatch, isUpdate]);

  const onChangeValueSearch = (text: string) => {
    setInputSearch(text);
    setIsShowClearSearchBtn(false);
    onSearch(text, filters);
  };

  const onFocusInput = () => {
    setIsFocusInput(true);
  };

  const onBlurInput = () => {
    setIsFocusInput(false);
  };

  const onSearch = debounce(500, false, (text, filter) => {
    dispatch(searchAction({text, filters: filter || filters}));
  });

  const onPressSearch = () => {
    setInputSearch('');
    setIsFocusInput(false);
    Keyboard.dismiss();
  };

  const onPressClearSearchHandle = () => {
    setInputSearch('');
    setIsShowClearSearchBtn(false);
  };

  const onSubmitEditingHandle = () => {
    if (!inputSearch) {
      return;
    }
    setIsShowClearSearchBtn(true);
  };

  const onToggleFilters = () => {
    setIsVisibleFilter(value => !value);
  };

  const updateFilters = (filter: Filters) => {
    setFilters(filter);
    onSearch(inputSearch, filter);
  };

  return {
    inputSearch,
    onChangeValueSearch,
    setInputSearch,
    onPressSearch,
    onPressClearSearchHandle,
    isShowClearSearchBtn,
    onSubmitEditingHandle,
    isVisibleFilter,
    onToggleFilters,
    isFocusInput,
    onFocusInput,
    onBlurInput,
    updateFilters,
  };
};

export default useSearchFacade;
