const env = require('node-env-file');
env('.env');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
      browserName: 'firefox'
    },
    specs: [
        '../tests/PracticeTests.js'
    ],

    // Set the Url where browser will start.
    baseUrl: process.env.URL,

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1200000
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: (window.screen.availWidth)/2,
                    height: window.screen.availHeight
                }
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height)
            })
        })
    }
}
