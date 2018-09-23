var actions = require('../base/actions')

var MyAccountPage = function() {

  this.accountOptions = element(by.css(".myaccount-link-list"));
  this.logout = element(by.css(".logout"));

  this.accountOptionsVisible = function() {
    return actions.isElementDisplayed(this.accountOptions);
  }

  this.clickLogout = function() {
    return actions.clickToElement(this.logout);
  }

}

module.exports = new MyAccountPage();
