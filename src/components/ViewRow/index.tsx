import React from 'react';

import {Props} from './@types';
import * as S from './styles';

export const ViewRow: React.FC<Props> = ({children, ...otherProps}) => (
	<S.ViewRow {...otherProps}>{children}</S.ViewRow>
);
