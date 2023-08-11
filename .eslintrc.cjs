module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		es6: true,
		es2021: true,
		es2017: true,
		browser: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:svelte/recommended'
	],
	overrides: [],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'arrow-parens': ['error', 'always'],
		camelcase: ['error', { properties: 'always' }],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'operator-linebreak': ['error', 'before', { overrides: { '?': 'before', ':': 'before' } }],
		curly: ['error', 'all'],
		eqeqeq: ['error', 'always'],
		indent: ['error', 2],
		quotes: ['error', 'double'],
		semi: ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'no-lonely-if': 'error',
		'no-tabs': 'error',
		'no-trailing-spaces': 'error',
		'multiline-ternary': ['error', 'always-multiline'],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		yoda: ['error', 'never', { exceptRange: true }],
		'quote-props': ['error', 'as-needed'],
		'no-unused-vars': 'off', // ts lint will take care of it
		'no-alert': 'off',
		'func-call-spacing': 'error',
		'eol-last': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-undefined': 'error',
		'no-use-before-define': 'off', // ts lint will take care of it
		'no-multi-assign': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-shadow-restricted-names': 'error',
		'no-useless-constructor': 'warn',
		'no-constant-condition': ['error', { checkLoops: false }],
		'no-duplicate-imports': ['error', { includeExports: true }],
		'no-useless-computed-key': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'space-before-blocks': 'error',
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'object-shorthand': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'template-curly-spacing': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/naming-convention': [
			'warn',
			{ selector: 'default', format: ['camelCase'] },
			{ selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{ selector: 'typeLike', format: ['PascalCase'] },
			{ selector: 'class', format: ['PascalCase'] },
			{ selector: 'interface', format: ['PascalCase'] },
			{ selector: 'function', format: ['camelCase', 'PascalCase'] }
		]
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
