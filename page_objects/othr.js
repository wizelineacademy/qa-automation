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
  enterUserCredentials = (email, pass) => {
    actions.enterText(this.emailTextField, email);
    actions.enterText(this.passwordTextField, pass);
    actions.clickElement(this.loginButton);
  };
}