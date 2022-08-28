export interface LocationRequestDto {
	lat: number;
	lon: number;
}
export interface LocationResponseDto {
	lat: number;
	lon: number;
	timezone: string;
	current: {
		dt: Date;
		weather: [
			{
				id: number;
				main: string;
				description: string;
				icon: string;
			},
		];
	};
}
