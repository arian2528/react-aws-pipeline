module.exports = {
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    transform: {
        '`^.+\\.js?$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks/style-mock.ts',
        '^lodash-es$': 'lodash',
    },
    automock: false,
    setupFiles: ['./setupJest.js']
}