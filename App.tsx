import {Button} from '@components/Button/index';
import {Layout} from '@components/Layout/index';
import {Text} from '@components/Text/index';
import createLogger from '@services/log.service';
import React, {useState} from 'react';
import {
	SafeAreaView,
	Alert,
	Linking,
	PermissionsAndroid,
	Platform,
	// Button,
	ToastAndroid,
} from 'react-native';
import Config from 'react-native-config';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

const globalAny: any = global;
const isHermes = () => String(!!globalAny.HermesInternal);

const App = () => {
	const [location, setLocation] = useState<GeoPosition>();
	const hasPermissionIOS = async () => {
		const openSetting = () => {
			Linking.openSettings().catch(() => {
				Alert.alert('Unable to open settings');
			});
		};
		const status = await Geolocation.requestAuthorization('whenInUse');

		if (status === 'granted') {
			return true;
		}

		if (status === 'denied') {
			Alert.alert('Location permission denied');
		}

		if (status === 'disabled') {
			Alert.alert(
				`Turn on Location Services to allow determine your location.`,
				'',
				[
					{text: 'Go to Settings', onPress: openSetting},
					{text: "Don't Use Location", onPress: () => {}},
				],
			);
		}

		return false;
	};

	const hasLocationPermission = async () => {
		if (Platform.OS === 'ios') {
			const hasPermission = await hasPermissionIOS();
			return hasPermission;
		}

		if (Platform.OS === 'android' && Platform.Version < 23) {
			return true;
		}

		const hasPermission = await PermissionsAndroid.check(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		);

		if (hasPermission) {
			return true;
		}

		const status = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		);

		if (status === PermissionsAndroid.RESULTS.GRANTED) {
			return true;
		}

		if (status === PermissionsAndroid.RESULTS.DENIED) {
			ToastAndroid.show(
				'Location permission denied by user.',
				ToastAndroid.LONG,
			);
		} else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
			ToastAndroid.show(
				'Location permission revoked by user.',
				ToastAndroid.LONG,
			);
		}

		return false;
	};

	const getLocation = async () => {
		const hasPermission = await hasLocationPermission();

		if (!hasPermission) {
			return;
		}

		Geolocation.getCurrentPosition(
			position => {
				setLocation(position);
				const log = createLogger('log');
				log(`${JSON.stringify(position)}`);
			},
			error => {
				Alert.alert(`Code ${error.code}`, error.message);
				setLocation(undefined);
				const log = createLogger('error');

				log(`${error}`);
			},
			{
				accuracy: {
					android: 'high',
					ios: 'best',
				},
				enableHighAccuracy: true,
				timeout: 15000,
				maximumAge: 10000,
				distanceFilter: 0,
			},
		);
	};

	return (
		<Layout>
			<SafeAreaView>
				<Text bold color='#2E3151'>
					Weather Location App
				</Text>
				<Text color='#2E3151'>- Hermes is in use: {isHermes()}</Text>
				<Text color='#2E3151'>- Env {Config.ENV}</Text>
				<Text color='#2E3151'>- Text </Text>
				<Button title='Get Location' primary onPress={getLocation} />
			</SafeAreaView>
		</Layout>
	);
};

export default App;
