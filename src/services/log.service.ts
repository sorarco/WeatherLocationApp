// `createLogger`, a higher-order function (that returns another function)
import {LogLevel} from '@types';

export default function createLogger(logLevel: LogLevel) {
	const objLog = {
		log: function logger(message: string) {
			console.log(message);
		},
		warn: function logger(message: string) {
			console.warn(message);
		},
		error: function logger(message: string) {
			console.error(message);
		},
	};
	return objLog[logLevel];
}
