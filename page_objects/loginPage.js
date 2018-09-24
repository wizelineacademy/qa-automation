const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */

var loginPage = function() {
  this.createAccoutError = element(by.id("create_account_error"));
  this.submitCreate = element(by.id("SubmitCreate"));
  this.emailCreate = element(by.id("email_create"));
  this.authentication = element(by.id("center_colum"));

  this.enterEmailCreate = function(email) {
    actions.enterText(this.emailCreate, email);
    actions.clickToElement(this.submitCreate);
  }

  this.clickSubmitCreate = function() {
    actions.clickToElement(this.submitCreate);
  }

  this.checkMsgError = function() {
    return actions.isElementDisplayed(this.createAccoutError);
  }

  this.checkColum = function() {
    return actions.isElementDisplayed(this.submitCreate);
  }

  this.loginUser = function (username, password) {
    actions.enterText(this.emailLogin, username)
    actions.enterText(this.password, password)
    actions.clickToElement(this.signInButton)
  }
}
module.exports = new loginPage();
