import '@emotion/react';

export type LogLevel = 'log' | 'warn' | 'error';

declare module '@emotion/react' {
	export interface Theme {
		fonts: {
			regular: string;
			bold: string;
			medium: string;
			size: number;
		};
		colors: {
			base: string;
			default: string;
			primary: string;
			secondary: string;
			background: string;
		};
		spacing: {
			base: number;
			small: number;
			large: number;
		};
	}
}
