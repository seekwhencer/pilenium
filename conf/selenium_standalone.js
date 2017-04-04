module.exports = {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.3.1',
    drivers: {
        firefox: {
            version: '0.13.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
        }
    }
};
