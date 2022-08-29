import styled from '@emotion/native';

import {Props} from './@types';

export const Button = styled.TouchableOpacity<Props>`
	${props =>
		props.primary && `background-color: ${props.theme.colors.primary}`};
	${props =>
		props.secondary && `background-color: ${props.theme.colors.secondary}`};
	font-size: ${props =>
		(props.size && `${props.size}px`) ?? `${props.theme.fonts.size}px`};
	padding: ${props => `${props.theme.spacing.small}px`};
	border-radius: 12px;
`;
