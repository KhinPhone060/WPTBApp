/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import MyProvider from './src/context';

const provider = () => (
    <MyProvider>
        <App />
    </MyProvider>
)

AppRegistry.registerComponent(appName, () => provider);
