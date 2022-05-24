import {Text, TouchableOpacity, View} from 'react-native';
import Switch from 'components/Switch';
import React from 'react';
import {Fonts} from 'assets/fonts';
import InputMoney from 'components/InputMoney';
import {Colors} from 'assets/colors';
import globalStyles from 'assets/globalStyles';
import styles from './styles';
import {t} from 'i18next';

type Props = {
  isVisibleContent?: boolean;
  isVisibleInfinity?: boolean;
  onPressInfinity?: () => void;
  title: string;
  valueSwitch: boolean;
  setValueSwitch: (value: boolean) => void;
  minValue: string;
  setMinValue: (value: string) => void;
  maxValue: string;
  setMaxValue: (value: string) => void;
  suffixesText: string;
};

const ItemFilter = (props: Props) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.switchContainer}>
          <Switch
            value={props.valueSwitch}
            onChangeValue={props.setValueSwitch}
          />
          <Text style={styles.text}>{props.title}</Text>
        </View>
        {props.isVisibleInfinity && (
          <TouchableOpacity>
            <Text style={styles.textInfinity}>
              {t('search.filter.select_infinity')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {props.isVisibleContent && (
        <View style={styles.inputContainer}>
          <View style={globalStyles.flexGrowOne}>
            <InputMoney
              value={props.minValue}
              onChangeText={props.setMinValue}
              keyboardType="numeric"
              suffixesText={props.suffixesText}
              suffixesContainerStyle={{
                backgroundColor: Colors.errorLight,
              }}
              suffixesTextStyle={{
                color: Colors.error,
                fontFamily: Fonts.regular,
              }}
            />
          </View>
          <View style={styles.toTextContainer}>
            <Text style={styles.toTextStyle}>to</Text>
          </View>
          <View style={globalStyles.flexGrowOne}>
            <InputMoney
              value={props.maxValue}
              onChangeText={props.setMaxValue}
              keyboardType="numeric"
              suffixesText={props.suffixesText}
              suffixesContainerStyle={{
                backgroundColor: Colors.success200,
              }}
              suffixesTextStyle={{
                color: Colors.success700,
                fontFamily: Fonts.regular,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemFilter;
