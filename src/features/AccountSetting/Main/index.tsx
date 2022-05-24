import {Images} from 'assets/images';
import Header from 'components/SimpleHeader';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import useAccountSettingFacade from './hook';

const AccountSetting = () => {
  const {sections} = useAccountSettingFacade();
  const _renderSection = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => item.handlePress?.()}>
        <Image
          source={item.icon}
          style={styles.sectionIcon}
          resizeMode="contain"
        />
        <Text style={styles.sectionTxt}>{item.title}</Text>
        <Image
          source={Images.ic_chevron_right_gradient}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header leftIcon={Images.ic_arrow_back_header} headerText="Account" />
      <FlatList
        style={styles.sectionList}
        contentContainerStyle={styles.contentList}
        data={sections}
        renderItem={_renderSection}
        extraData={sections}
        keyExtractor={item => item.id?.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default AccountSetting;
