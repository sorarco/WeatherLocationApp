module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'@types': './src/types',
					'@api': './src/api',
					'@components': './src/components',
					'@dto': './src/dto',
					'@screens': './src/screens',
					'@store': './src/store',
					'@services': './src/services',
					'@tests': './src/__tests__',
				},
				extensions: ['.js', '.jsx', '.tsx', '.ios.js', 'android.js'],
			},
		],
	],
};
