import {TouchableOpacityProps} from 'react-native';

export interface Props extends TouchableOpacityProps {
	title: string;
	primary?: boolean;
	secondary?: boolean;
	size?: number;
}
