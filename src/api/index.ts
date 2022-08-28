import {
	LocationRequestDto,
	LocationResponseDto,
} from '@dto/locationRequest.dto';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

const {API_OPEN_WEATHER_MAP_V2, API_OPEN_WEATHER_MAP_KEY} = Config;

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({baseUrl: API_OPEN_WEATHER_MAP_V2}),
	endpoints: builder => ({
		getWeather: builder.query<LocationResponseDto, LocationRequestDto>({
			query: ({lat, lon}) =>
				`/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${API_OPEN_WEATHER_MAP_KEY}`,
		}),
	}),
});

export const {useGetWeatherQuery} = api;
