/* eslint-disable import/extensions */

import 'react-native';
import {Text} from '@components/Text/index';
import React from 'react';

import {render} from '../test-utils';

describe('<Text/>', () => {
	test('should render text component without crashing', () => {
		const text = 'Weather Location App';
		const textComponent = <Text testID='text-component'>{text}</Text>;
		const {container} = render(textComponent);
		expect(container).toBeTruthy();
	});
	test('check text', () => {
		const text = 'Weather Location App';
		const testID = 'text-component';
		const textComponent = <Text testID='text-component'>{text}</Text>;
		const {getByTestId} = render(textComponent);
		const component = getByTestId(testID);
		expect(component.props.children).toBe(text);
	});
});
