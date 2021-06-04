module.exports = {
    testPathIgnorePatterns: ["/node_modules"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.jsx"
    ],
    verbose: true,
    transform: {
        "^.*\\.(js|jsx)":"<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper:{
        "\\.(css|sass|scss|png|jpg)$":"<rootDir>/__mocks__/fileMock.jsx"
    },
    testEnvironment: 'jsdom'
};