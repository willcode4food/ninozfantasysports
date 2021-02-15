/* eslint-disable no-undef */
module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^context(.*)$': '<rootDir>/src/context$1',
        '^providers(.*)$': '<rootDir>/src/providers$1',
        '^hooks(.*)$': '<rootDir>/src/hooks$1',
        '^queries(.*)$': '<rootDir>/src/queries$1',
        '^firebaseActions(.*)$': '<rootDir>/src/firebaseActions$1',
        '^templates(.*)$': '<rootDir>/src/templates$1',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `styles`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    snapshotSerializers: ['@emotion/jest/serializer'],
    coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    collectCoverage: true,
}
