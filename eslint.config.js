import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import * as vueParser from 'vue-eslint-parser'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

// Get the Vue recommended config
const vueRules = vue.configs['flat/strongly-recommended']

export default [
    js.configs.recommended,
    prettierConfig,
    {
        // Configuration for Vue and JS files
        files: ['**/*.{js,vue}'],
        ignores: ['**/*.test.js', '**/*.spec.js'], // Ignore test files for this config
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                process: 'readonly'
            }
        },
        plugins: {
            vue,
            prettier
        },
        rules: {
            ...vueRules.rules,
            'vue/multi-word-component-names': 'warn',
            'vue/no-unused-vars': 'error',
            'vue/script-setup-uses-vars': 'error',
            'vue/no-mutating-props': 'error',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'prettier/prettier': ['error', {
                singleQuote: true,
                semi: false,
                tabWidth: 4,
                trailingComma: 'none',
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid'
            }]
        }
    },
    {
        // Configuration specifically for test files
        files: ['**/*.test.js', '**/*.spec.js'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                it: 'readonly',
                vi: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly'
            }
        }
    }
]