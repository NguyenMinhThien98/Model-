import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import useSignUpFacade from './hooks';
import {Colors} from 'assets/colors';
import OutLineButton from 'components/OutLineButton';
import i18n from 'utils/LocalizedStrings';
import {Images} from 'assets/images';
import Screen from 'components/Screen';

const Splash: FC = () => {
  const {onPressSignUp, onPressSignIn, onForgotPassword} = useSignUpFacade();

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image source={Images.app_logo} />
          <Text style={styles.titleText}>{i18n.t('splash.invest')}</Text>
        </View>
        <TouchableOpacity onPress={onPressSignUp}>
          <LinearGradient
            style={styles.signUp}
            useAngle={true}
            angle={304.39}
            colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]}>
            <Text style={styles.normalText}>{i18n.t('splash.sign_up')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <OutLineButton
          title={i18n.t('splash.log_in')}
          onPress={onPressSignIn}
        />
        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.forgotText}>{i18n.t('splash.forgot_pass')}</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Splash;
