import {View, Text, ScrollView} from 'react-native';
import React, {FC, useCallback} from 'react';
import styles from './styles';
import {t} from 'i18next';
import useSearchViewFacade from './hook';
import SuggestSearchItem from '../SuggestSearchItem';
import {ItemRecent} from '../../../models/ItemResultSearch';
import ResultSearchItem from '../ResultListSearchItem';
import {Images} from 'assets/images';

const SearchView: FC = () => {
  const {
    recentSearchData,
    topSearchData,
    resultSearchData,
    onPressRecentItem,
    onDeleteRecentSearch,
    onDeleteTopSearchHandle,
  } = useSearchViewFacade();

  const renderRecentSearchItem = useCallback(
    (item: ItemRecent, index: number) => (
      <SuggestSearchItem
        key={index}
        item={item}
        index={index}
        onPressItem={onPressRecentItem}
        onPressRightIcon={onDeleteRecentSearch}
      />
    ),
    [onDeleteRecentSearch, onPressRecentItem],
  );
  const renderTopSearchItem = useCallback(
    (item, index) => (
      <SuggestSearchItem
        key={index}
        item={item}
        index={index}
        {...(!resultSearchData && {
          leftIcon: Images.ic_search,
          rightIcon: Images.close,
        })}
        onPressItem={onPressRecentItem}
        onPressRightIcon={onDeleteTopSearchHandle}
      />
    ),
    [onDeleteTopSearchHandle, onPressRecentItem, resultSearchData],
  );
  const renderResultSearchItem = useCallback(
    (item, index) => <ResultSearchItem key={index} index={index} item={item} />,
    [],
  );

  return (
    <View style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.titleView}>
          {recentSearchData.length > 0 && (
            <>
              <Text style={styles.titleSearch}>
                {t('search.recentSearches')}
              </Text>
              {recentSearchData.slice(0, 3).map(renderRecentSearchItem)}
            </>
          )}
          {resultSearchData.length > 0 && (
            <>{resultSearchData.map(renderResultSearchItem)}</>
          )}
          {topSearchData.length > 0 && (
            <>
              <Text style={styles.titleSearch}>{t('search.topSearches')}</Text>
              {topSearchData.slice(0, 3).map(renderTopSearchItem)}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchView;
