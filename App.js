/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import './shim.js';
import crypto from 'crypto';
import RootNavigator from './src/navigation/index';

const App = () => {
  return <RootNavigator />;
};

export default App;
