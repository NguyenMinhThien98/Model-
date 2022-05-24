import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles, noResultStyles} from './styles';
import MatchingSearchView from 'features/Research/MatchingSearchView';
import Recommendation from 'features/Research/Recommendation';
import TopMover from 'features/Research/TopMover';
import {t} from 'i18next';
import useResultViewFacade from 'features/Research/ResultSearchView/hooks';
import {Images} from 'assets/images';
import globalStyles from 'assets/globalStyles';

type Props = {
  onPressFilter: () => void;
  isShowClearSearchBtn: boolean;
  inputSearch: string;
};

const ResultSearchView = (props: Props) => {
  const {
    recentSearches,
    topSearches,
    resultSearches,
    onPressRecentItem,
    onDeleteRecentSearch,
    onDeleteTopSearchHandle,
    recommendations,
    topMovers,
  } = useResultViewFacade();
  return (
    <View style={styles.rootContainer}>
      {resultSearches.length === 0 ? (
        <View>
          <ScrollView>
            <NoResultContainer keyword={props.inputSearch} />
            <Recommendation data={recommendations} />
            <TopMover data={recommendations} />
          </ScrollView>
        </View>
      ) : (
        <View style={globalStyles.flexOne}>
          <MatchingSearchView
            inputSearch={props.inputSearch}
            resultSearches={resultSearches}
            isShowClearSearchBtn={props.isShowClearSearchBtn}
            onPressFilter={props.onPressFilter}
          />
        </View>
      )}
    </View>
  );
};

const NoResultContainer = ({keyword}: {keyword: string}) => {
  return (
    <View style={noResultStyles.noResultContainer}>
      <ImageBackground
        style={noResultStyles.backgroundNoResult}
        resizeMode="cover"
        source={Images.no_result_search}>
        <Text>
          <Text style={noResultStyles.noMatchTxt}>{t('search.noMatch')}</Text>
          <Text style={noResultStyles.keywordTxt}>{`'${keyword}'`}</Text>
        </Text>
      </ImageBackground>
      <View style={noResultStyles.tryInsteadView}>
        <Text style={noResultStyles.tryInsteadTxt}>
          {t('search.tryInstead')}
        </Text>
      </View>
    </View>
  );
};

export default ResultSearchView;
