const path = require('path');
module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: [path.join(__dirname, 'jest-setup.js')],
    moduleNameMapper: { '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js' },
};
