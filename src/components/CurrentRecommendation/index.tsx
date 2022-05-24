import {View, Text, Image} from 'react-native';
import React, {useCallback} from 'react';
import {Images} from 'assets/images';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';
import CurrentRecommendationDropdown from 'components/CurrentRecommendationDropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, SCREENS} from 'navigation/NavigationTypes';

const dummyData = [
  {
    contentTitle: 'Forecast to grow over one year',
    contentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh et eget dignissim.',
    iconPath: Images.thumbUps,
  },
  {
    contentTitle: 'Slow profit',
    contentDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh et eget dignissim.',
    iconPath: Images.thumbDown,
  },
];

const CurrentRecommendationBtn = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goRecommendations = useCallback(() => {
    navigation.navigate(SCREENS.RECOMMENDATION);
  }, [navigation]);

  return (
    <View>
      <CurrentRecommendationDropdown />
      <View>
        <TouchableOpacity onPress={goRecommendations}>
          <Text style={styles.recommendationsDescription}>
            {i18n.t('company_overview.view_all_previous_recommendations')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View>
        {dummyData.map(item => (
          <View style={styles.recommendationsContent}>
            <Image style={styles.recommendationsIcon} source={item.iconPath} />
            <View>
              <Text style={styles.contentTitle}>{item.contentTitle}</Text>
              <Text style={styles.contentDescription}>
                {item.contentDescription}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CurrentRecommendationBtn;
