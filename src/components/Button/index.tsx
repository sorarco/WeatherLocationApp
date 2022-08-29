import {Text} from '@components/Text/index';
import React from 'react';

import {Props} from './@types';
import * as S from './styles';

export const Button: React.FC<Props> = ({...otherProps}) => (
	<S.Button {...otherProps}>
		<Text align='center' bold>
			{otherProps.title}
		</Text>
	</S.Button>
);
