import createLogger from '@services/log.service';

afterEach(() => {
	jest.clearAllMocks();
});

describe('service log by console.log', () => {
	beforeEach(() => {
		jest.spyOn(console, 'log').mockImplementation();
	});

	test('testing console.log', () => {
		const log = createLogger('log');
		log('some console log');
		expect(console.log).toBeCalledTimes(1);
		expect(console.log).toBeCalledWith('some console log');
	});
});

describe('service log by console.warn', () => {
	beforeEach(() => {
		jest.spyOn(console, 'warn').mockImplementation();
	});

	test('testing console.log', () => {
		const warn = createLogger('warn');
		warn('some console warn');
		expect(console.warn).toBeCalledTimes(1);
		expect(console.warn).toBeCalledWith('some console warn');
	});
});

describe('service log by console.error', () => {
	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation();
	});

	test('testing console.error', () => {
		const error = createLogger('error');
		error('some console error');
		expect(console.error).toBeCalledTimes(1);
		expect(console.error).toBeCalledWith('some console error');
	});
});

describe('service log invalid', () => {
	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation();
	});

	test('testing console.error not called', () => {
		const log = createLogger('log');
		log('some console log');
		expect(console.error).toBeCalledTimes(0);
	});
});
