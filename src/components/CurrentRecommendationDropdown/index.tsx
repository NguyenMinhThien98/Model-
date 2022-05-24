import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';
import {Images} from 'assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../assets/colors';
import useCurrentRecommendationDropdown from './hooks';

const CurrentRecommendationDropdown = () => {
  const {
    isActive,
    isBuyPrice,
    isSellPrice,
    isStopLoss,
    setIsActive,
    dummyData,
  } = useCurrentRecommendationDropdown();

  return (
    <LinearGradient
      angle={304.39}
      colors={[Colors.gradient3, Colors.gradient1, Colors.gradient2]}
      style={styles.gradientContainer}>
      <View style={styles.currentRecommendationContainer}>
        <TouchableOpacity onPress={() => setIsActive(!isActive)}>
          <View style={styles.currentRecommendationWrapper}>
            <View style={styles.currentRecommendationRow}>
              <Image
                style={styles.currentRecommendationMaqro}
                source={Images.maqro}
              />
              <Text style={styles.currentRecommendationText}>
                {i18n.t('company_overview.current_recommendation')}
              </Text>
            </View>
            <View style={styles.buyButtonWrapper}>
              <TouchableOpacity>
                <View style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>
                    {i18n.t('search.buy')}
                  </Text>
                </View>
              </TouchableOpacity>
              <Image style={styles.caretDown} source={Images.caretDown} />
            </View>
          </View>
        </TouchableOpacity>
        {isActive && (
          <View>
            <View style={styles.topDivider} />
            <View style={styles.dropDownContainer}>
              <View style={styles.priceContainer}>
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.buy_price')}
                  </Text>
                  <Text style={styles.priceValue}>${isBuyPrice}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.target_price')}
                  </Text>
                  <Text style={styles.priceValue}>${isSellPrice}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.priceWrapper}>
                  <Text style={styles.priceTitle}>
                    {i18n.t('company_overview.stop_loss')}
                  </Text>
                  <Text style={styles.priceValue}>${isStopLoss}</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomDivider} />
            {dummyData.map((item, index) => (
              <View key={index.toString()} style={styles.recommendations}>
                <Text style={styles.recommendationsTitle}>{item.title}</Text>
                <Text style={styles.recommendationsDescription}>
                  {item.description}
                </Text>
                <Text style={styles.recommendationsDate}>{item.date}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default CurrentRecommendationDropdown;
