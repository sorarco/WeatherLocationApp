import {Button} from '@components/Button/index';
import {Layout} from '@components/Layout/index';
import {Text} from '@components/Text/index';
import {ViewRow} from '@components/ViewRow/index';
import React from 'react';
import {SafeAreaView, Image, View} from 'react-native';

import {useWeatherHook} from './hooks/index.hook';

const IndexScreen = () => {
	const [weatherResult, {onPressSend}] = useWeatherHook();
	const {data, isError, isLoading} = weatherResult;
	const weather = data?.weather[0];
	const main = data?.main;
	const title = () => (isLoading ? 'Atualizando...' : 'Atualizar');

	return (
		<SafeAreaView>
			<Text bold color='#2E3151' align='center' size={20}>
				Weather Location App
			</Text>
			{data && (
				<Layout>
					<View>
						<Text color='#2E3151' align='center' size={30}>
							{data?.name}
						</Text>
						<Layout>
							<Image
								style={{width: 100, height: 100}}
								resizeMode='cover'
								source={{
									uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
								}}
							/>
						</Layout>

						<Text color='#2E3151' align='center' size={30} bold>
							{main?.temp}
						</Text>
						<Text color='#2E3151' align='center'>
							{weather?.description}
						</Text>
						<ViewRow>
							<Text color='#2E3151' align='center'>
								Min.: {main?.temp_min}
							</Text>
							<Text color='#2E3151' align='center'>
								Max.: {main?.temp_max}
							</Text>
						</ViewRow>
					</View>
				</Layout>
			)}
			{isError ? (
				<Text color='#FD434A' bold align='center' size={30}>
					Oops, alguma coisa ocorreu
				</Text>
			) : (
				<Button title={title()} primary onPress={onPressSend} />
			)}
		</SafeAreaView>
	);
};

export default IndexScreen;
