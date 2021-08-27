module.exports = {
	root: true,

	env: {
		browser: true,
		node: true,
	},

	parserOptions: {
		parser: 'babel-eslint',
	},

	// required to lint *.vue files
	plugins: ['vue', 'prettier', 'spellcheck'],

	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// Prettier
		'prettier/prettier': 'error',

		// Spelling
		'spellcheck/spell-checker': [
			'warn',
			{
				comments: false,
				strings: true,
				identifiers: false,
				lang: 'en_US',
				skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils', 'vue'],
				skipIfMatch: [
					'http://[^s]*',
					'^[-\\w]+/[-\\w\\.]+$', // For MIME Types
				],
				skipWordIfMatch: [
					// '^foobar.*$', // words that begin with foobar will not be checked
				],
				minLength: 3,
			},
		],
	},

	extends: [
		'plugin:vue/recommended',
		'plugin:vue/essential',
		'@vue/standard',
		'plugin:vue/strongly-recommended',
		'prettier',
	],

	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
	ignorePatterns: [
		'/coverage',
		'/dist',
		'/node_modules'
	],
};
