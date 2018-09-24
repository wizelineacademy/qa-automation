const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage () {

  this.createAccountForm = element(by.css('#create-account_form'));
  this.loginForm = element(by.css('#login_form'));
  this.emailCreateTextBox = element(by.id('email_create'));
  this.errorEmailCreateMessage = element(by.css('#create_account_error > ol:nth-child(1) > li:nth-child(1)'));
  this.createAccountButton = element(by.id('SubmitCreate'));

  /**
   * @description Function used to create a new account
   * @method enterUserCredentials
   * @param {String} email
   */
  this.enterNewEmail = (email) => {
    actions.enterText(this.emailCreateTextBox, email);
    this.clickOnNewAccount();
  };
  /**
   * @description Function to just clic the "New Account" button.
   * @method enterUserCredentials
   * @param {String} email
   */
  this.clickOnNewAccount = () =>{
    actions.clickToElement(this.createAccountButton);
  };
  /**
   * @description Function used to know if a error is displayed
   * @method isLoginFormDisplayed
   */
  this.isDisplayed = (element) => {
    return actions.isElementDisplayed(element);
  }
}
module.exports = new LoginPage();
