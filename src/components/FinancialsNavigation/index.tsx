import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {styles, itemStyles} from './styles';
import useTabBarHeaderFacade from './hook';

export interface dataItemProps {
  key: string | number;
  title: string | number;
}

export interface onChangedTabProps {
  oldTab: dataItemProps | undefined;
  newTab: dataItemProps;
}

export interface TabBarHeaderContainer {
  listItem: dataItemProps[];
  styleContainer?: ViewStyle;
  onChangedTab?: ({oldTab, newTab}: onChangedTabProps) => any;
  selectedTabValue?: dataItemProps;
}

interface TabBarItemInterface {
  isSelected: boolean;
  item: dataItemProps;
  onPress: (item: dataItemProps) => any;
}

const TabBarItem = ({isSelected, item, onPress}: TabBarItemInterface) => {
  return (
    <TouchableOpacity
      onPress={onPress.bind(this, item)}
      style={itemStyles.container}>
      <Text style={[itemStyles.title, isSelected && itemStyles.titleSelected]}>
        {item.title}
      </Text>
      <View style={isSelected && itemStyles.selected} />
    </TouchableOpacity>
  );
};

const FinancialsNavigation = (props: TabBarHeaderContainer) => {
  const {listItem, styleContainer} = props;
  const {selectedTab, selectedTabHandle} = useTabBarHeaderFacade(props);
  return (
    <View style={[styles.container, styleContainer]}>
      {listItem.map(item => (
        <TabBarItem
          isSelected={selectedTab?.key === item.key}
          item={item}
          key={item.key}
          onPress={selectedTabHandle}
        />
      ))}
    </View>
  );
};

export default FinancialsNavigation;
