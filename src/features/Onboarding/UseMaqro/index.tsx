import AccountHeader from 'components/AccountHeader';
import Button from 'components/Button';
import ChoiceCard from 'components/ChoiceCard';
import Screen from 'components/Screen';
import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import i18n from 'utils/LocalizedStrings';
import useMaqroFacade from './hooks';
import styles from './styles';

const UseMaqro: FC = () => {
  const {isAgree, onSelectNo, onSelectYes, onContinue} = useMaqroFacade();

  return (
    <Screen>
      <>
        <AccountHeader />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{i18n.t('onboarding.plan_question')}</Text>
          <Text style={styles.description}>
            {i18n.t('onboarding.description')}
          </Text>
          <ChoiceCard
            title={i18n.t('onboarding.yes')}
            content={i18n.t('onboarding.yes_option')}
            isChecked={isAgree}
            containerStyle={styles.choiceCard}
            onSelect={onSelectYes}
          />
          <ChoiceCard
            title={i18n.t('onboarding.no')}
            content={i18n.t('onboarding.no_option')}
            isChecked={!isAgree}
            containerStyle={styles.choiceCard}
            onSelect={onSelectNo}
          />
        </ScrollView>
        <View style={styles.bottom}>
          <Button title={i18n.t('sign_up.continue')} onPress={onContinue} />
        </View>
      </>
    </Screen>
  );
};

export default UseMaqro;
