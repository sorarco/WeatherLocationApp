/* eslint-disable import/extensions */

import 'react-native';
import {Button} from '@components/Button/index';
import React from 'react';

import {render} from '../test-utils';

describe('<Button/>', () => {
	test('should render button component without crashing', () => {
		const title = 'Get Weather Location';
		const buttonComponent = <Button testID='button-component' title={title} />;
		const {container} = render(buttonComponent);
		expect(container).toBeTruthy();
	});
	test('check title in the button', () => {
		const title = 'Get Weather Location';
		const testID = 'button-component';
		const buttonComponent = <Button testID={testID} title={title} />;
		const {getByText} = render(buttonComponent);
		expect(getByText('Get Weather Location')).toBeDefined();
	});
});
