/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import 'react-native';
import {LocationResponseDto} from '@dto/location.dto';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import * as hooks from '@screens/hooks/index.hook';
import IndexScreen from '@screens/index.screen';
import React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';

import {render} from '../test-utils';

const middlewares = getDefaultMiddleware();
const mockStore = createMockStore(middlewares);
const store = mockStore({});

const response: LocationResponseDto = {
	weather: [
		{
			id: 801,
			main: 'Clouds',
			description: 'algumas nuvens',
			icon: '02d',
		},
	],
	main: {
		temp: 20.57,
		temp_min: 15.42,
		temp_max: 31.36,
	},
	name: 'San Francisco',
};

afterEach(() => {
	jest.clearAllMocks();
});

describe('<IndexScreen/>', () => {
	test('should render screen with components without crashing', () => {
		jest.spyOn(hooks, 'useWeatherHook').mockImplementation((): any => {
			const weatherResult = {
				data: response,
				isError: false,
				isLoading: false,
			};
			return [weatherResult, {}];
		});
		const element = (
			<Provider store={store}>
				<IndexScreen />
			</Provider>
		);
		const {getByText} = render(element);
		expect(getByText('Atualizar')).toBeDefined();
	});
});
