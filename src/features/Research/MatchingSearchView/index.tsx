import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {Images} from 'assets/images';
import {styles} from './styles';
import useMatchingSearchViewFacade from './hook';
import ItemSearch from 'components/ItemSearch';
import {ItemResultSearch} from 'models/ItemResultSearch';
import ResultListSearchItem from '../ResultListSearchItem';
import globalStyles from '../../../assets/globalStyles';

// Mockup data
const SORT_FIELD_KEY = [
  'All',
  'Energy',
  'Materials',
  'Industrials',
  'Consumer Discretionary',
];

type Props = {
  onPressFilter: () => void;
  isShowClearSearchBtn: boolean;
  resultSearches: Array<ItemResultSearch>;
  inputSearch: string;
};

const MatchingSearchView = (props: Props) => {
  const {
    isListFilter,
    handlePressFilterTypeBtn,
    handlePressFilterKey,
    filterKeySelected,
    isVisibleSort,
    onChangeVisibleSort,
  } = useMatchingSearchViewFacade();

  const SortLayout = useCallback(
    () => (
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.sortBtnGroup}
          onPress={onChangeVisibleSort}>
          <Text style={styles.sortText}>Sort</Text>
          {isVisibleSort ? (
            <Image source={Images.keyboard_arrow_down} />
          ) : (
            <Image
              style={styles.rotateImage}
              source={Images.keyboard_arrow_down}
            />
          )}
        </TouchableOpacity>
        <View style={styles.filterBtnGroup}>
          <TouchableOpacity
            onPress={props.onPressFilter}
            style={styles.sortBtnView}>
            <Image style={styles.sortBtnImg} source={Images.filter} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortBtnView}
            onPress={handlePressFilterTypeBtn}>
            <Image
              style={styles.sortBtnImg}
              source={isListFilter ? Images.list : Images.dashboard}
            />
          </TouchableOpacity>
        </View>
      </View>
    ),
    [
      handlePressFilterTypeBtn,
      isListFilter,
      isVisibleSort,
      onChangeVisibleSort,
      props.onPressFilter,
    ],
  );

  const ListFilterKeyItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      const isSelected = item === filterKeySelected;
      const handlePress = () => handlePressFilterKey(item);
      return (
        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.filterItemContainer,
            !index && styles.filterItemContainerFirstItem,
            isSelected && styles.filterItemContainerActive,
          ]}>
          <Text
            style={[
              styles.filterItemTxt,
              isSelected && styles.filterItemTxtActive,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [filterKeySelected, handlePressFilterKey],
  );

  const FilterKeyList = useCallback(() => {
    return isVisibleSort ? (
      <View style={styles.filterKeyListContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SORT_FIELD_KEY}
          renderItem={ListFilterKeyItem}
        />
      </View>
    ) : null;
  }, [ListFilterKeyItem, isVisibleSort]);

  const ResultTypeCard = useCallback(
    () => (
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        numColumns={2}
        data={props.resultSearches}
        renderItem={({item}: {item: ItemResultSearch}) => (
          <ItemSearch
            containerStyle={styles.resultListSearchItemContainer}
            item={item}
          />
        )}
      />
    ),
    [props.resultSearches],
  );

  const ResultTypeList = useCallback(
    () => (
      <View style={globalStyles.rootPadding}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          numColumns={1}
          data={props.resultSearches}
          renderItem={({
            item,
            index,
          }: {
            item: ItemResultSearch;
            index: number;
          }) => (
            <ResultListSearchItem
              index={index}
              containerStyle={styles.resultCardSearchItemContainer}
              item={item}
            />
          )}
        />
      </View>
    ),
    [props.resultSearches],
  );

  return (
    <View style={globalStyles.flexOne}>
      <Text style={styles.titleHeader}>
        <Text style={styles.allResultTxt}>All Results for </Text>
        <Text style={styles.keywordTxt}>{`"${props.inputSearch}"`}</Text>
      </Text>
      <SortLayout />
      <FilterKeyList />
      {isListFilter ? <ResultTypeList /> : <ResultTypeCard />}
    </View>
  );
};

export default MatchingSearchView;
