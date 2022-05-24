import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import styles from './styles';
import Input from 'components/Input';
import useSearchFacade from 'features/Research/hooks';
import {Images} from 'assets/images';
import globalStyles from 'assets/globalStyles';
import SearchView from './SearchView';
import MainSearchView from './MainResearchView';
import ModalFilters from 'features/Research/ModalFilters';
import ResultSearchView from 'features/Research/ResultSearchView';

const Research: FC = () => {
  const {
    inputSearch,
    onChangeValueSearch,
    onPressSearch,
    onPressClearSearchHandle,
    isShowClearSearchBtn,
    onSubmitEditingHandle,
    isVisibleFilter,
    onToggleFilters,
    onFocusInput,
    onBlurInput,
    updateFilters,
  } = useSearchFacade();
  return (
    <Screen>
      <SafeAreaView style={styles.container}>
        <View style={globalStyles.rootPadding}>
          <Input
            value={inputSearch}
            onChangeText={onChangeValueSearch}
            leftIcon={
              inputSearch ? Images.ic_arrow_back_grey : Images.ic_search
            }
            onPressLeftIcon={onPressSearch}
            rightIcon={isShowClearSearchBtn ? Images.close : undefined}
            onPressRightIcon={onPressClearSearchHandle}
            onSubmitEditing={onSubmitEditingHandle}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            parentStyle={styles.inputStyle}
          />
        </View>
        {inputSearch ? (
          isShowClearSearchBtn ? (
            <ResultSearchView
              inputSearch={inputSearch}
              onPressFilter={onToggleFilters}
              isShowClearSearchBtn={isShowClearSearchBtn}
            />
          ) : (
            <SearchView />
          )
        ) : (
          <MainSearchView
            onPressFilter={onToggleFilters}
            isShowClearSearchBtn={isShowClearSearchBtn}
          />
        )}
        <ModalFilters
          visible={isVisibleFilter}
          onClose={onToggleFilters}
          updateFilters={updateFilters}
        />
      </SafeAreaView>
    </Screen>
  );
};

export default Research;
