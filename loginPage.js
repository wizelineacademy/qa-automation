const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */

function LoginPage() {
  // Web elements for Login
  this.loginButton           = element(by.css('.login'));
  this.createAccountButton   = element(by.css('.icon-user'));
  this.createAccountErrorMsg = element(by.id('create_account_error'));
  this.emailTextField        = element(by.id('email_create'));

  /**
   * @description Function used to try invalid credentials on the login page
   * @method tryAccountWith
   * @param {String} email
   */
  this.tryAccountWith = (email) =>
  {
    actions.clickToElement(this.loginButton);
    actions.enterText(this.emailTextField, email);
    actions.clickToElement(this.createAccountButton);

    return actions.getElementText(this.createAccountErrorMsg);
  }

  /**
   * @description Function used to enter unique credentials
   * @method CreateAccountWith
   * @param {String} email
   */
  this.CreateAccountWith = (email) =>
  {
    actions.clickToElement(this.loginButton);
    actions.enterText(this.emailTextField, email);
    actions.clickToElement(this.createAccountButton);
  }
}

module.exports = new LoginPage();
