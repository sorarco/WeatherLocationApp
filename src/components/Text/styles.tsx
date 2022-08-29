import styled from '@emotion/native';

import {Props} from './@types';

export const Text = styled.Text<Props>`
	${props => !props.regular && `font-family: ${props.theme.fonts.regular}`};
	${props => props.medium && `font-family: ${props.theme.fonts.medium}`};
	${props => props.bold && `font-family: ${props.theme.fonts.bold}`};
	font-size: ${props =>
		(props.size && `${props.size}px`) ?? `${props.theme.fonts.size}px`};
	color: ${props =>
		props.color ? `${props.color}` : `${props.theme.colors.base}`};
	text-align: ${props => props.align ?? 'left'};
	padding: ${props => `${props.padding ?? props.theme.spacing.base}px`};
`;
