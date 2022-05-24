import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import globalStyles from '../../../assets/globalStyles';
import {t} from 'i18next';
import {ItemSearchInterface} from '../../../models/ItemResultSearch';
import ItemSearch from 'components/ItemSearch';
import React from 'react';

type Props = {
  data: Array<any>;
};

const TopMover = (props: Props) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={globalStyles.title}>{t('search.topMovers')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllTxt}>{t('search.viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendationsView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={props.data}
          renderItem={({item}: {item: ItemSearchInterface}) => (
            <ItemSearch item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default TopMover;
