import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

// Shared configuration constant
const sharedRules = {
  quotes: ['error', 'single'],
  'comma-dangle': ['error', 'always-multiline'],
  semi: ['error', 'always'],
};

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // Browser
  {
    files: [
      'src/**/*.{js,mjs,cjs,vue}',
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...sharedRules,
    },
  },

  // Node
  {
    files: ['vite.config.js'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...sharedRules,
    },
  },
];
