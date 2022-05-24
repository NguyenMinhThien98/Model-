import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import useViewAllRecommendations from './hooks';
import i18n from 'utils/LocalizedStrings';
import styles from './styles';

const SORT_FIELD_KEY = [
  i18n.t('company_sector.all'),
  i18n.t('company_sector.energy'),
  i18n.t('company_sector.materials'),
  i18n.t('company_sector.industrials'),
  i18n.t('company_sector.consumer_discretionary'),
];

const FilterGroupRecommendations = () => {
  const {filterKeySelected, handlePressFilterKey} = useViewAllRecommendations();

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
    return (
      <View style={styles.filterKeyListContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={SORT_FIELD_KEY}
          renderItem={ListFilterKeyItem}
          keyExtractor={item => item}
        />
      </View>
    );
  }, [ListFilterKeyItem]);

  return <FilterKeyList />;
};

export default FilterGroupRecommendations;
