const SpecReporter = require('jasmine-spec-reporter');
const env = require('node-env-file');
const jasmineReporters = require('jasmine-reporters');
const HTMLReport = require('protractor-html-reporter');
const xmlMerger = require('junit-report-merger');
const fs = require('fs');
env('.env');

function combineReportFiles(exitCode, testConfig) {
  // Since shardTestFiles = true executes onPrepare() each time - our report files are overwritten each execution.
  // Logic is to report results from test files each to his own file, and then combine into one XML file,
  // that is suitable for Jenkins
  const filesList = fs.readdirSync(process.env.SPECS_REPORTS_PATH);
  const filesWithPaths = filesList.map(filename => `${process.env.SPECS_REPORTS_PATH}/${filename}`);


  xmlMerger.mergeFiles(process.env.JUNIT_TEST_REPORT, filesWithPaths, undefined, (err) => {
    if (!err) {
      new HTMLReport().from(process.env.JUNIT_TEST_REPORT, testConfig);
    }
  });
}

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        chromeOptions: {
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },
    specs: [
        '../tests/sampleTest.js'
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

    plugins: [{
      package: 'jasmine2-protractor-utils',
      disableHTMLReport: true,
      disableScreenshot: false,
      htmlReportDir: 'testreport/htmlreport',
      screenshotPath: 'testreport/screenshots',
      screenshotOnExpectFailure: false,
      screenshotOnSpecFailure: true,
      clearFoldersBeforeTest: true,
    }],

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        // Configure jasmine spec reporter.
        // Configure jasmine spec reporter.
        jasmine.getEnv().clearReporters(); // remove default reporter logs
        jasmine.getEnv().addReporter(new SpecReporter.SpecReporter({ // add jasmine-spec-reporter
          spec: {
            displayStacktrace: true,
            displayPending: true,
          },
        }));
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: false,
          savePath: 'testresults',
          filePrefix: 'xmlresults',
        }));

        resultLeaker = {
          suiteStarted: (result) => { jasmine.results = { suite: result }; },
          specStarted: (result) => { jasmine.results.spec = result; },
        };
        jasmine.getEnv().addReporter(resultLeaker);
        // Maximize Window
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                }
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height)
            })
        })
    },

    onComplete: (errorCode) => {
    let browserName;
    let browserVer;
    const capsPromise = browser.getCapabilities();

    capsPromise.then((caps) => {
      browserName = caps.get('browserName');
      browserVer = caps.get('version');

      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: 'testreport/htmlreport',
        screenshotPath: '../screenshots',
        testBrowser: browserName,
        browserVersion: browserVer,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
      };
      combineReportFiles(errorCode, testConfig);
    });
  },
}
