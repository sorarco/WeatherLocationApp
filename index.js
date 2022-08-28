/**
 * @format
 */
import {store} from '@store/index';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './App';
import {name as appName} from './app.json';

const ReduxProvider = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
