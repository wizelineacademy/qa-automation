const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.emailTextField = element(by.id('email'));
  this.passwordTextField = element(by.id('password'));
  this.loginButton = element(by.css('.sel_login'));

  /**
   * @description Function used to enter credentials for Login then click on Login Button
   * @method enterUserCredentials
   * @param {String} email
   * @param {String} pass
   */
  this.enterUserCredentials = (email, pass) => {
    actions.enterText(this.emailTextField, email);
    actions.enterText(this.passwordTextField, pass);
    actions.clickToElement(this.loginButton);
  };
}
module.exports = new LoginPage();
