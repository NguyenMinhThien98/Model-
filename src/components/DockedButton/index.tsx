import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';

const DockedButton = () => {
  return (
    <View style={styles.dockedButtonContainer}>
      <View>
        <TouchableOpacity>
          <View style={styles.buttonWithoutBorder}>
            <Text style={styles.buttonWithoutBorderText}>
              {i18n.t('search.buy')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.buttonWithBorder}>
            <Text style={styles.buttonWithBorderText}>
              {i18n.t('watchlist.watchlist')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHeight} />
    </View>
  );
};

export default DockedButton;
