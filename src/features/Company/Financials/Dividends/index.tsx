import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import BarChart, {ItemBarChart} from 'components/BarChart';
import useFinancialsDividends from './hooks';
import styles from './styles';
import {Colors} from 'assets/colors';
import SeletedYear from 'components/SelectedYear';

const Dividends = () => {
  const {data2018, yearList} = useFinancialsDividends();
  const [selectedYear, setSelectedYear] = useState(null);
  const [isYear, setYear] = useState<ItemBarChart[]>(data2018);

  const renderItem = ({item}) => {
    const color = item.year === selectedYear ? Colors.greyDark : Colors.grey400;
    const fontSize = item.year === selectedYear ? 16 : 14;
    const backgroundColor =
      item.year === selectedYear ? Colors.greyDark : Colors.white;

    const onPressChangeYear = () => {
      setSelectedYear(item.year), setYear(item.data);
    };

    return (
      <View style={styles.timeOptionContainer}>
        <SeletedYear
          item={item}
          onPress={onPressChangeYear}
          textColor={{color}}
          fontSize={{fontSize}}
          backgroundColor={{backgroundColor}}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.barChartContainer}>
        <BarChart data={isYear} />
      </View>
      <FlatList
        contentContainerStyle={styles.flatListRow}
        data={yearList}
        renderItem={renderItem}
        keyExtractor={item => item.year}
        extraData={selectedYear}
      />
    </View>
  );
};

export default Dividends;
