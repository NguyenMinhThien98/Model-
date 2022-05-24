/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {AppInit} from './src/app';
import {Provider} from 'react-redux';
import store from 'redux/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <AppInit />
    </Provider>
  );
};

export default App;
