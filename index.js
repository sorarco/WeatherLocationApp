/**
 * @format
 */
import {ThemeProvider} from '@emotion/react';
import {store} from '@store/index';
import {theme} from '@themes/index';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './App';
import {name as appName} from './app.json';

const ReduxProvider = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
