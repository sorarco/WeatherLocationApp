import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

const globalAny: any = global;
const isHermes = () => String(!!globalAny.HermesInternal);
const App = () => (
	<SafeAreaView>
		<Text>Weather Location App</Text>
		<Text>- Hermes is in use: {isHermes()}</Text>
		<Text>- Env {Config.ENV}</Text>
	</SafeAreaView>
);

export default App;
