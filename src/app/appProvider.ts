import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORE_KEYS} from '../config/constants';
let _auth: string | null = null;

class AppProvider {
  static setAuth(token: string | null = null) {
    try {
      if (token) {
        AsyncStorage.setItem(STORE_KEYS.TOKEN, token);
        _auth = token;
      } else {
        AsyncStorage.removeItem(STORE_KEYS.TOKEN);
        _auth = null;
      }
    } catch (error) {}
  }

  static getAuth = async () => {
    if (!_auth) {
      try {
        const token = await AsyncStorage.getItem(STORE_KEYS.TOKEN);
        _auth = token ?? null;
      } catch (error) {}
    }
    return _auth;
  };

  static getUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem(STORE_KEYS.CURRENT_USER);
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {}
    return null;
  };

  static setUserInfo = userInfo => {
    try {
      if (!userInfo) {
        AsyncStorage.removeItem(STORE_KEYS.CURRENT_USER);
        return;
      }

      AsyncStorage.setItem(STORE_KEYS.CURRENT_USER, JSON.stringify(userInfo));
    } catch (error) {}
  };
}

export {AppProvider};
