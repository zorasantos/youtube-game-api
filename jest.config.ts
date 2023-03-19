export default {
  bail: true,

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['src/modules/**/*.ts'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testMatch: ['**/*.spec.ts']
};
