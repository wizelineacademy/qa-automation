const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.signInLink = element(by.css('.header_user_info a'));
  this.emailTextField = element(by.id('email_create'));
  this.createAnAccountButton = element(by.id('SubmitCreate'));
  this.creatAccountError = element(by.id('create_account_error'))

  /**
   * @description Function used to enter an email to create an account
   * @method enterNewUserEmail
   * @param {String} email
   */
  this.enterNewUserEmail = (email) => {
    actions.clickElement(this.signInLink);
    actions.enterText(this.emailTextField, email);
    actions.clickElement(this.createAnAccountButton);
  };
  /**
   * @description Function used to know if the Account Error message is displayed
   * @method isAccountErrorDisplayed
   */
  this.isAccountErrorDisplayed = () => {
    return actions.isElementDisplayed(this.creatAccountError);
  };
}
module.exports = new LoginPage();
