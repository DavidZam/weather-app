module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/cypress'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^auth/(.*)$': '<rootDir>/src/app/auth/$1',
      '^shared/(.*)$': '<rootDir>/src/app/shared/$1',
      '^fraud/(.*)$': '<rootDir>/src/app/modules/fraud/$1',
      '^home/(.*)$': '<rootDir>/src/app/modules/home/$1',
      '^purchases/(.*)$': '<rootDir>/src/app/modules/purchases/$1',
    },
    restoreMocks: true,
  };
  