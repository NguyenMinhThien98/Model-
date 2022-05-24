import {ScrollView, Text, View} from 'react-native';
import React, {FC} from 'react';
import Screen from 'components/Screen';
import i18n from 'utils/LocalizedStrings';
import {Colors} from 'assets/colors';
import styles from './styles';
import Button from 'components/Button';
import TradingHeader from '../Components/TradingHeader';
import useAccountTypeFacade from './hooks';
import ChoiceCard from 'components/ChoiceCard';

export const AccountType: FC = () => {
  const {typeSelected, onSelectType, accountTypeList, onPressNext} =
    useAccountTypeFacade();
  return (
    <Screen loadingColor={Colors.white}>
      <>
        <TradingHeader />
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titleText}>
              {i18n.t('personal_account.accout_using')}
            </Text>
            {accountTypeList.map(item => (
              <ChoiceCard
                key={item.title}
                title={item.title}
                content={item.description}
                isChecked={typeSelected === item.type}
                onSelect={() => onSelectType(item.type)}
                activeIcon={item.activeIcon}
                inActiveIcon={item.inActiveIcon}
                containerStyle={styles.cardStyle}
              />
            ))}
          </ScrollView>
          <Button title={i18n.t('login.next')} onPress={onPressNext} />
        </View>
      </>
    </Screen>
  );
};
