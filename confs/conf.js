// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/create-account.js'],
  capabilities: {'browserName' : 'firefox'}
}

