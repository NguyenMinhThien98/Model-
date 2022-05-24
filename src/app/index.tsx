import {View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {AppNavigation} from '../navigation';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {initialApp} from './slice';
import useGlobalState from 'redux/useGlobalState';
import FlashMessage from 'react-native-flash-message';
import FlashMessageCustom from 'components/FlashMessageCustom';

export const AppInit: FC = () => {
  const dispatch = useDispatch();
  const disableMessage = useGlobalState(state => state.app.disableMessage);

  useEffect(() => {
    dispatch(initialApp());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <AppNavigation />
      {!disableMessage && (
        <FlashMessage
          position="top"
          autoHide={true}
          MessageComponent={props => {
            return (
              <FlashMessageCustom
                message={props?.message?.message}
                type={props?.message?.type}
              />
            );
          }}
        />
      )}
    </View>
  );
};
