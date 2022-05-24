import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import React, {useCallback} from 'react';
import CheckCard from 'components/CheckCard';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

interface SectorProps {
  sector: any;
  onSelect: (sector: any) => void;
  isChecked: boolean;
}

const SectorItem = ({sector, onSelect, isChecked}: SectorProps) => {
  const onSelectItem = useCallback(() => {
    onSelect(sector);
  }, [onSelect, sector]);

  return (
    <CheckCard
      isChecked={isChecked}
      onSelect={onSelectItem}
      containerStyle={styles.container}>
      <View style={styles.child}>
        <Image source={{uri: sector?.logo}} style={styles.bgImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {sector?.name}
          </Text>
        </View>

        <View style={styles.stockContainer}>
          {sector?.companies?.map((item, index) => {
            if (index < 5) {
              return (
                <View style={styles.stockView} key={`stock${item?.id}`}>
                  <Image
                    source={{uri: item?.logo_url}}
                    resizeMode="contain"
                    style={styles.stockImage}
                  />
                </View>
              );
            }
          })}
        </View>
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
  },
  container: {
    width: (Dimensions.get('window').width - 46) / 2,
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 13,
  },
  stockView: {
    backgroundColor: Colors.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -5,
    overflow: 'hidden',
  },
  stockImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
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
    height: 100,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SectorItem;
