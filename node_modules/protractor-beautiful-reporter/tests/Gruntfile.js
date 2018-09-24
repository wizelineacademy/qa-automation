module.exports = function (grunt) {

    //this is replacement string from reporter.js
    var sortFuncReplacement = "function sortFunction(a, b) {\n" +
        "    if (a.sessionId < b.sessionId) return -1;\n" +
        "    else if (a.sessionId > b.sessionId) return 1;\n" +
        "\n" +
        "    if (a.timestamp < b.timestamp) return -1;\n" +
        "    else if (a.timestamp > b.timestamp) return 1;\n" +
        "\n" +
        "    return 0;\n" +
        "}";

    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        "string-replace": {
            dist: {
                files: [
                    {src: '../lib/app.js', dest: '../tmp/tests/lib/app.js'}
                ],
                options: {
                    replacements: [
                        {
                            pattern: /'<Search Settings Replacement>'/,
                            replacement: '{}'
                        },
                        {
                            pattern: /'<Column Settings Replacement>'/,
                            replacement: '{}'
                        },
                        {
                            pattern: /'<Sort Function Replacement>'/,
                            replacement: sortFuncReplacement
                        },
                        {
                            pattern: /var results[ ]*=[ ]*'<Results Replacement>'/,
                            replacement: '<%= grunt.file.read("app/test_data.js") %>'
                        }]
                }
            }
        },
        "karma": {
            options:{
                configFile: "karma.conf.js"
            },
            unit: {
                singleRun: true
            },
            coverage: {
                singleRun: true,
                cc: true
            },
            watch: {
                autoWatch: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['string-replace','karma:unit']);
    grunt.registerTask('testcoverage', ['string-replace','karma:coverage']);
    grunt.registerTask('testwatch', ['string-replace','karma:watch']);

};