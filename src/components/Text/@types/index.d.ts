import {TextProps} from 'react-native';

export interface Props extends TextProps {
	bold?: boolean;
	regular?: boolean;
	medium?: boolean;
	size?: number;
}