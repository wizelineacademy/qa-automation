# qa-academy-performance

# Run Jmeter non-gui mode
```
jmeter -n -t api_tests.jmx -l results.jtl
```

# Generate dashboard
```
jmeter -g results.jtl -o dashboard
```

## Jenkins plugins

* HTML Publisher
* Performance Plugin

## Jenkins pipeline
```
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/wizelineacademy/qa-academy-performance.git']]])
            }
        }
        stage('Performance tests') {
            steps {
                withEnv(['JMETER_HOME=/Users/john.connor/apache-jmeter-4.0/bin']) {
                    sh '$JMETER_HOME/jmeter -n -t api_tests.jmx -l results.jtl'
                }
            }
        }
        stage('Generate dashboard') {
            steps {
                withEnv(['JMETER_HOME=/Users/john.connor/apache-jmeter-4.0/bin']) {
                    sh '$JMETER_HOME/jmeter -g results.jtl -o dashboard'
                }
            }
        }
        stage('Publish') {
            steps {
                publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'dashboard', reportFiles: 'index.html', reportName: 'Dashboard', reportTitles: ''])
                perfReport percentiles: '0,50,90,100', sourceDataFiles: 'results.jtl'
            }
        }
    }
}
```