import React from 'react';

import {Props} from './@types';
import * as S from './styles';

export const Text: React.FC<Props> = ({children, ...otherProps}) => (
	<S.Text {...otherProps}>{children}</S.Text>
);
