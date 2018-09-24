var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    },{}); // enable customisation of search settings on first page hit

    var initialColumnSettings=undefined; // enable customisation of visible columns on first page hit
    if(initialColumnSettings) {
        if(initialColumnSettings.displayTime !==undefined) {
            this.displayTime=!initialColumnSettings.displayTime; // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
        }
        if(initialColumnSettings.displayBrowser !==undefined) {
            this.displayBrowser=!initialColumnSettings.displayBrowser; // same as above
        }
        if(initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId=!initialColumnSettings.displaySessionId; // same as above
        }
        if(initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId=!initialColumnSettings.displaySessionId; // same as above
        }
        if(initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots=initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    }

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "should fail as greeting text is different|angularjs homepage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": [
            "Expected 'Hello Julie!' to equal 'Hello Julie hello!'."
        ],
        "trace": [
            "Error: Failed expectation\n    at UserContext.<anonymous> (F:\\gitroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:13:45)\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7"
        ],
        "browserLogs": [],
        "screenShotFile": "images\\should fail as greeting text is different-angularjs homepage.png",
        "timestamp": 1534696702893,
        "duration": 4330
    },
    {
        "description": "should greet the named user|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696707767,
        "duration": 2260
    },
    {
        "description": "should contain log and pretty stack trace|angularjs homepage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": [
            "Failed: unknown error: Runtime.evaluate threw exception: SyntaxError: Unexpected token throw\n  (Session info: chrome=68.0.3440.106)\n  (Driver info: chromedriver=2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform=Windows NT 10.0.17134 x86_64)"
        ],
        "trace": [
            "WebDriverError: unknown error: Runtime.evaluate threw exception: SyntaxError: Unexpected token throw\n  (Session info: chrome=68.0.3440.106)\n  (Driver info: chromedriver=2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform=Windows NT 10.0.17134 x86_64)\n    at Object.checkLegacyResponse (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\error.js:546:15)\n    at parseHttpResponse (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebDriver.executeScript()\n    at thenableWebDriverProxy.schedule (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\webdriver.js:807:17)\n    at thenableWebDriverProxy.executeScript (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\webdriver.js:878:16)\n    at run (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\protractor\\built\\browser.js:59:33)\n    at ProtractorBrowser.to.(anonymous function) [as executeScript] (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\protractor\\built\\browser.js:67:16)\n    at UserContext.<anonymous> (F:\\gitroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:26:17)\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\nFrom: Task: Run it(\"should contain log and pretty stack trace\") in control flow\n    at UserContext.<anonymous> (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (F:\\gitroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:21:5)\n    at addSpecsToSuite (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (F:\\gitroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (F:\\gitroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:3:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)"
        ],
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "console-api 371:40 \"This is some kind of warning!\"",
                "timestamp": 1534696711015,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "console-api 371:40 \"This is some kind of warning!\"",
                "timestamp": 1534696711217,
                "type": ""
            }
        ],
        "screenShotFile": "images\\should contain log and pretty stack trace-angularjs homepage.png",
        "timestamp": 1534696710055,
        "duration": 1662
    },
    {
        "description": "should list todos|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696712107,
        "duration": 1600
    },
    {
        "description": "should display first todo with proper text|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696713727,
        "duration": 1653
    },
    {
        "description": "should add a todo|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696715400,
        "duration": 2177
    },
    {
        "description": "should be displayed as pending test case|todo list|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images\\should be displayed as pending test case-todo list-angularjs homepage.png",
        "timestamp": 1534696717615,
        "duration": 0
    },
    {
        "description": "pending test case 1|pending describe|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images\\pending test case 1-pending describe-angularjs homepage.png",
        "timestamp": 1534696717642,
        "duration": 0
    },
    {
        "description": "pending test case 2|pending describe|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images\\pending test case 2-pending describe-angularjs homepage.png",
        "timestamp": 1534696717668,
        "duration": 0
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
}

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};