var actions = require('../base/actions')

var LoginPage = function() {

  this.emailCreate = element(by.id("email_create"));
  this.submitCreate = element(by.id("SubmitCreate"));
  this.accoutError = element(by.id("create_account_error"));
  this.emailLogin = element(by.id('email'))
  this.password = element(by.id('passwd'))
  this.signInButton = element(by.id('SubmitLogin'))

  this.enterEmailCreate = function(email) {
    actions.enterText(this.emailCreate, email);
    actions.clickToElement(this.submitCreate);
  }

  this.clickSubmit = function() {
    actions.clickToElement(this.submitCreate);
  }

  this.validateRegistrationError = function() {
    return actions.isElementDisplayed(this.accoutError);
  }

  this.loginUser = function (username, password) {
    actions.enterText(this.emailLogin, username)
    actions.enterText(this.password, password)
    actions.clickToElement(this.signInButton)
  }
}

module.exports = new LoginPage();
