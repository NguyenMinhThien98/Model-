import {
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Images} from 'assets/images';
import React, {useCallback} from 'react';
import {Colors} from 'assets/colors';
import {Fonts} from 'assets/fonts';

type Props = {
  isChecked: boolean;
  onSelect: (value: boolean) => void;
  title?: string;
  titleStyles?: TextStyle;
};

const Radio = (props: Props) => {
  const onSelect = useCallback(() => {
    props.onSelect && props.onSelect(!props.isChecked);
  }, [props]);

  const labelStyles: TextStyle = {
    ...props.titleStyles,
    ...styles.textLabel,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <Image
          source={
            props.isChecked
              ? Images.ic_radio_checked
              : Images.ic_radio_unchecked
          }
        />
      </TouchableOpacity>
      <Text style={labelStyles}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLabel: {
    color: Colors.greyDark,
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginLeft: 10,
  },
});

export default Radio;
