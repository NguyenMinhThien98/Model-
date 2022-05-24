import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Images} from '../../../assets/images';
import {ItemRecent} from '../../../models/ItemResultSearch';

type Props = {
  item: ItemRecent;
  index: number;
  onPressItem: (item: ItemRecent) => void;
  onPressRightIcon: (item: ItemRecent) => void;
};
const ResultSearchItem = ({item, onPressItem, onPressRightIcon}: Props) => {
  const onPressItemHandle = useCallback(
    () => onPressItem && onPressItem(item),
    [item, onPressItem],
  );

  const pressRightIconHandle = useCallback(
    () => onPressRightIcon?.(item),
    [item, onPressRightIcon],
  );

  return (
    <TouchableOpacity onPress={onPressItemHandle} style={styles.container}>
      <View style={styles.leftIconView}>
        <Image source={Images.vector} />
      </View>
      <Text style={styles.description}>{item?.key_search}</Text>
      <TouchableOpacity
        style={styles.rightIconView}
        disabled={!onPressRightIcon}
        onPress={pressRightIconHandle}>
        <Image source={Images.close} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ResultSearchItem;
