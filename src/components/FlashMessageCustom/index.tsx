import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactChild} from 'react';
import {isIos} from 'utils/commonHelpers';
import {Colors} from 'assets/colors';
import {Images} from 'assets/images';
import {Fonts} from 'assets/fonts';
import {hideMessage} from 'react-native-flash-message';

interface FlashProps {
  message: string | ReactChild;
  type?: string;
  containerSytle?: ViewStyle;
}

const FlashMessageCustom = ({message, containerSytle, type}: FlashProps) => {
  const renderContent = () => {
    switch (type) {
      case 'success':
        return (
          <View style={[styles.successContainer, containerSytle]}>
            <Text style={styles.successMess}>{message}</Text>
          </View>
        );

      default:
        return (
          <View style={[styles.container, containerSytle]}>
            <Image source={Images.ic_cancel} />
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity
              onPress={hideMessage}
              hitSlop={styles.closeHitSlop}>
              <Image source={Images.ic_close} />
            </TouchableOpacity>
          </View>
        );
    }
  };
  return <View>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: isIos
      ? 56
      : StatusBar.currentHeight && StatusBar.currentHeight + 18,
    backgroundColor: Colors.errorLight,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: 'row',
  },
  message: {
    fontFamily: Fonts.regular,
    color: Colors.error,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  closeHitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  successContainer: {
    paddingTop: isIos
      ? 56
      : StatusBar.currentHeight && StatusBar.currentHeight + 18,
    backgroundColor: Colors.success,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: 'row',
  },
  successMess: {
    color: Colors.white,
    textAlign: 'center',
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
});

export default FlashMessageCustom;
