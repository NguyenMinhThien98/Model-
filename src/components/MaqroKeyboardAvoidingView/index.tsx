import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import globalStyles from 'assets/globalStyles';
import {isIos} from 'utils/commonHelpers';

interface Props {
  keyboardVerticalOffset?: number;
  children: React.ReactNode;
}

const MaqroKeyboardAvoidingView = (props: Props) => {
  return (
    <KeyboardAvoidingView
      style={globalStyles.flexOne}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={props.keyboardVerticalOffset || 0}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default MaqroKeyboardAvoidingView;
