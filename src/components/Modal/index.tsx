import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactChild, useCallback} from 'react';
import styles from './styles';
import {ReactElement} from 'react';
import Modal from 'react-native-modal';
import {isIos} from 'utils/commonHelpers';
import LoadingApp from 'components/LoadingApp';
import FlashMessage from 'react-native-flash-message';
import FlashMessageCustom from 'components/FlashMessageCustom';
import {useDispatch} from 'react-redux';
import {updateShowMessage} from 'app/slice';
import useGlobalState from 'redux/useGlobalState';

interface ModalProps {
  containerStyle?: ViewStyle;
  children?: ReactElement;
  modalVisible: boolean;
  onBackdropPress?: () => void;
  loading?: boolean;
  darkMode?: boolean;
  backdropStyle?: ViewStyle;
  modalStyle?: ViewStyle;
  parentStyle?: ViewStyle;
  renderBottomComponent?: () => ReactChild;
  isTransparentBackdrop?: boolean;
}

const AppModal = ({
  containerStyle,
  children,
  modalVisible,
  onBackdropPress,
  loading,
  darkMode,
  backdropStyle,
  modalStyle,
  parentStyle,
  renderBottomComponent = () => <View />,
  isTransparentBackdrop = false,
}: ModalProps) => {
  const dispatch = useDispatch();
  const disableMessage = useGlobalState(state => state.app.disableMessage);

  const onShowModal = useCallback(() => {
    dispatch(updateShowMessage(true));
  }, [dispatch]);

  const onHideModal = useCallback(() => {
    dispatch(updateShowMessage(false));
  }, [dispatch]);

  return (
    <Modal
      isVisible={modalVisible}
      style={[
        styles.modal,
        isTransparentBackdrop && styles.transparent,
        modalStyle,
      ]}
      statusBarTranslucent
      onBackdropPress={onBackdropPress}
      onModalWillHide={onHideModal}
      onModalWillShow={onShowModal}>
      {disableMessage && (
        <FlashMessage
          position="top"
          autoHide={false}
          MessageComponent={props => {
            return (
              <FlashMessageCustom
                message={props?.message?.message}
                type={props?.message?.type}
                containerSytle={styles.message}
              />
            );
          }}
        />
      )}

      <KeyboardAvoidingView
        // keyboardVerticalOffset={isIos ? 20 : 0}
        behavior={isIos ? 'padding' : undefined}
        style={styles.body}>
        <TouchableOpacity
          style={[styles.body, parentStyle]}
          onPress={onBackdropPress}
          activeOpacity={1}>
          <ScrollView
            bounces={false}
            contentContainerStyle={[
              styles.scrollView,
              isTransparentBackdrop && styles.transparent,
              darkMode && styles.darkModeBackdrop,
              backdropStyle,
            ]}>
            <TouchableOpacity
              style={[
                styles.container,
                darkMode && styles.darkContainer,
                containerStyle,
              ]}
              activeOpacity={1}>
              {children}
            </TouchableOpacity>
          </ScrollView>
          {renderBottomComponent()}
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {loading && <LoadingApp />}
    </Modal>
  );
};

export default AppModal;
