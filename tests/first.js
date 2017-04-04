module.exports = {
    'First': function (browser) {
        browser
            .resizeWindow(1024, 4000)
            .url('https://www.google.de/')
            .waitForElementPresent('body',2000,'Body Element present.')
            .end();
    }
}