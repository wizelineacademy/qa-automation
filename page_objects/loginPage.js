const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login Page
  this.authenticationLabel = element(by.css('.navigation_page'));
  this.emailTextField = element(by.id('email'));
  this.passwordTextField = element(by.id('passwd'));
  this.createAccountButton = element(by.id('SubmitCreate'));
  this.createAccountError = element(by.id('create_account_error'));
  this.emailAdressTextField = element(by.id('email_create'));

  /**
  * @description Function used to verify if LoginPage is displayed
  * @method getAuthenticationLabelText
  */
  this.getAuthenticationLabelText = () => {
    return actions.getElementText(this.authenticationLabel);
  };


  /**
  * @description Function used to Create an Account
  * @method createAccount
  * @param {String} email
  */
  this.createAccount = (email) => {
    actions.enterText(this.emailAdressTextField, email);
    actions.clickToElement(this.createAccountButton);
  };

  /**
    * @description Function used to get Create Account Error Text
    * @method getCreateAccountErroText
    */
  this.getCreateAccountErroText = () => {
    return actions.getElementText(this.createAccountError);
  };

}
module.exports = new LoginPage();
