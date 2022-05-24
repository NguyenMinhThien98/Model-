import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import React, {useCallback} from 'react';
import CheckCard from 'components/CheckCard';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';
import {Stock} from 'models/Stock';

interface StockProps {
  stock: Stock;
  onSelect: (stock: any) => void;
  isChecked: boolean;
  index: number;
}

const StockItem = ({stock, onSelect, isChecked, index}: StockProps) => {
  const onSelectItem = useCallback(() => {
    onSelect(stock);
  }, [onSelect, stock]);

  const containerStyle = {
    ...styles.container,
    marginHorizontal: index % 3 === 1 ? 6 : 0,
  };

  return (
    <CheckCard
      isChecked={isChecked}
      onSelect={onSelectItem}
      containerStyle={containerStyle}>
      <View style={styles.child}>
        <Image
          source={{uri: stock?.logo_url}}
          resizeMode="contain"
          style={styles.stockImage}
        />
        <Text style={styles.title}>{stock?.name}</Text>
      </View>
    </CheckCard>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  container: {
    width: (Dimensions.get('window').width - 58) / 3,
    borderRadius: 10,
    flex: 1,
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  stockView: {
    backgroundColor: Colors.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -5,
  },
  stockImage: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
  },
  child: {
    flex: 1,
    backgroundColor: Colors.darkMode10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    height: '100%',
  },
  centerItem: {
    marginHorizontal: 6,
  },
});

export default StockItem;
