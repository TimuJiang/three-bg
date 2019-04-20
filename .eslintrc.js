module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/strongly-recommended',
		'@vue/standard'
	],
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': ['off', 'tab'],
    'no-trailing-spaces': 1,
    'space-before-function-paren': 0 // 这句话表示在函数后可以不加空格
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
