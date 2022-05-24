import React from 'react';
import {
  Image,
  // LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import {Images} from 'assets/images';

type Props = {
  value: boolean;
  onChangeValue: (value: boolean) => void;
};

const Switch = (props: Props) => {
  const onToggle = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    props.onChangeValue(!props.value);
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      {!props.value && <Image source={Images.ic_switch_off} />}
      {props.value && <Image source={Images.ic_switch_on} />}
    </TouchableOpacity>
  );
};

export default Switch;
