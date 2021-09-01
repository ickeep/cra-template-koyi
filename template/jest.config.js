module.exports = {
  roots: ['<rootDir>'],

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/demo/index.tsx'],

  setupFiles: ['./node_modules/react-app-polyfill/jsdom.js'],

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  testMatch: ['<rootDir>/test/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}'],

  testEnvironment: 'jsdom',

  testRunner: '@tencent/dwt-runner/runner',

  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': './node_modules/react-scripts/config/jest/babelTransform.js',
    '^.+\\.css$': './node_modules/react-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': './node_modules/react-scripts/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  modulePaths: [],

  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@type(.*)$': '<rootDir>/type/$1',
    '^lodash-es$': 'lodash'
  },

  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],

  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

  resetMocks: true,

  reporters: [
    'default',
    '@tencent/dwt-reporter',
  ],

  collectCoverage: true,

  coverageDirectory: '<rootDir>/coverage/',

  coverageReporters: [['json', { projectRoot: './coverage' }], 'lcov', 'text', 'clover'],
};
