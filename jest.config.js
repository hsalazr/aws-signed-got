module.exports = {
  roots: ['<rootDir>'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json', // This is required for codebuild agents with symlinked node_modules
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest', // Required for typescript
  },
  resetMocks: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  testRegex: '(/tests/.*|(.|/)).spec.ts?$', // Look for tests only on .spec.ts files
  coveragePathIgnorePatterns: ['node_modules', 'test'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
