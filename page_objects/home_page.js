var actions = require('../base/actions')

var HomePage = function() {

  this.signIn = element(by.css(".login"));

  this.clickOnSigning = function() {
    actions.clickToElement(this.signIn)
  }

}

module.exports = new HomePage();
