import React from 'react';
import {Text, View} from 'react-native';
import Switch from 'components/Switch';
import Radio from 'components/Radio';
import styles from './styles';
import i18n from 'utils/LocalizedStrings';

type Props = {
  isVisibleContent: boolean;
  title: string;
  valueSwitch: boolean;
  setValueSwitch: (value: boolean) => void;
  valueAll: boolean;
  setValueAll: (value: boolean) => void;
  valueShare: boolean;
  setValueShare: (value: boolean) => void;
  valueETFs: boolean;
  setValueETFs: (value: boolean) => void;
};

const ItemType = (props: Props) => {
  return (
    <View>
      <View style={styles.viewSwitch}>
        <Switch
          value={props.valueSwitch}
          onChangeValue={props.setValueSwitch}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
      {props.isVisibleContent && (
        <View style={styles.viewOption}>
          <Radio
            isChecked={props.valueAll}
            onSelect={props.setValueAll}
            title={i18n.t('search.filter.all')}
          />
          <Radio
            isChecked={props.valueShare}
            onSelect={props.setValueShare}
            title={i18n.t('search.filter.shares_only')}
          />
          <Radio
            isChecked={props.valueETFs}
            onSelect={props.setValueETFs}
            title={i18n.t('search.filter.etfs_only')}
          />
        </View>
      )}
    </View>
  );
};

export default ItemType;
