const path = require('path');

const jestDirPath = path.join(__dirname, 'jest');

module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: [path.join(jestDirPath, 'setup-enzyme.js')],
    moduleNameMapper: { '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js' },
    setupFilesAfterEnv: [path.join(jestDirPath, 'setup.js')],
};
