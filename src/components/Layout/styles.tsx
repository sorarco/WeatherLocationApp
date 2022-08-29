import styled from '@emotion/native';

export const Layout = styled.View`
	flex: 1;
	height: 100px;
	padding: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.background};
`;
