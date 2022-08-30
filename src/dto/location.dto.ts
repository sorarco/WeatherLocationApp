/* eslint-disable camelcase */
export interface LocationRequestDto {
	lat: number;
	lon: number;
}
export interface LocationResponseDto {
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		},
	];
	main: {
		temp: number;
		temp_min: number;
		temp_max: number;
	};
	name: string;
}
