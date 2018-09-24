//jshint strict: false
module.exports = function (config) {
    config.set({
        basePath: '.',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/babel-polyfill/dist/polyfill.js',
            '../lib/assets/jquery.min.js',
            '../lib/assets/bootstrap.min.js',
            '../lib/assets/buttons.js',
            '../tmp/tests/lib/app.js',
            'app/test_data.js',
            'app/app_test.js'
        ],
        /** file is place in tnp by grunt task 'string-replace' */
        preprocessors:config.cc?{
            '../tmp/tests/lib/app.js': ['coverage']
        }:{},

        frameworks: ['jasmine'],
        reporters: config.cc?['coverage']:['spec'],
        // Configure code coverage reporter
        coverageReporter: {
            dir: '../tmp/coverage',
            subdir: 'report',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },
        browsers: ['PhantomJS'],

        plugins: [
            'karma-spec-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]

    });
};
