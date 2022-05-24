import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Images} from 'assets/images';
import CompanyCircularProgressGradient from 'components/CompanyCircularProgressGradient';

const CompanyTitle = () => {
  const [isShowCompanyName, setIshowCompanyName] = useState<string | undefined>(
    'Commonwealth Bank',
  );
  const [isShowPercentageChange, setIsShowPercentageChange] = useState('+12.2');
  const [isShowPriceValue, setIsShowPriceValue] = useState('123.45');

  return (
    <View style={styles.companyTitleContainer}>
      <View style={styles.companyTitleLeft}>
        <Text style={styles.boldText}>{isShowCompanyName}</Text>
        <View style={styles.priceValueWrapper}>
          <Text style={styles.boldText}>${isShowPriceValue}</Text>
          <Text style={styles.percentageChange}>{isShowPercentageChange}%</Text>
          <Image source={Images.arrow_upward} style={styles.arrow_upward} />
        </View>
      </View>
      <View style={styles.companyTitleRight}>
        <View style={styles.viewCircularProgress}>
          <CompanyCircularProgressGradient value={96} />
        </View>
      </View>
    </View>
  );
};

export default CompanyTitle;
