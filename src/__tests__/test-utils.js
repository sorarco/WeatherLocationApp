/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {ThemeProvider} from '@emotion/react';
import {render} from '@testing-library/react-native';
import {theme} from '@themes/index';
import React from 'react';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({children}: any) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
	render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
