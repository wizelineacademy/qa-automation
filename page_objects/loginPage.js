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
    this.emailTextField.sendKeys(email);
    this.passwordTextField.sendKeys(pass);
    this.loginButton.click();
  };
}
module.exports = new LoginPage();
