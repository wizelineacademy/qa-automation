var actions = require('../base/actions')
/**
 * @description Page Object for User Page.
 */
var userPage = function() {
  this.options = element(by.css(".myaccount-link-list"));
  this.logout = element(by.css(".logout"));

  this.optionsVisible = function() {
    return actions.isElementDisplayed(this.options);
  }

  this.logoutButton = function() {
    return actions.clickToElement(this.logout);
  }
}
module.exports = new userPage();
