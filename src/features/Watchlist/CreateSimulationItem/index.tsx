import {
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'assets/colors';
import {Images} from 'assets/images';
import {t} from 'i18next';
import {Fonts} from 'assets/fonts';
interface createSimulationItemProps {
  onPressItem?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CreateSimulationItem = ({
  onPressItem,
  containerStyle,
}: createSimulationItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[styles.container, containerStyle]}>
      <Image source={Images.add_circle} />
      <Text style={styles.text} numberOfLines={2}>
        {t('watchlist.createSimulation')}
      </Text>
    </TouchableOpacity>
  );
};

export default CreateSimulationItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.greyBorder,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 15,
    color: Colors.greyDark,
    fontFamily: Fonts.regular,
    fontSize: 14,
    width: 80,
    textAlign: 'center',
  },
});
