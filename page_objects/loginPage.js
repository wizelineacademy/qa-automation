const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.emailTextField = element(by.id('email_create'));
  this.createButton = element(by.id('SubmitCreate'));
  this.emailErrorWarning = element(by.id('create_account_error'));

  /**
   * @description Function used to know if email error message is visible
   * @method isEmailErrorVisible
   */
  this.isEmailErrorVisible = () => {
    return actions.isElementDisplayed(this.emailErrorWarning);
  };

  /**
   * @description Click on create account button
   * @method clickOnCreateButton
   */
  this.clickOnCreateButton = () => {
    actions.clickToElement(this.createButton);
  };

  /**
   * @description Captures email
   * @method captureEmail
   */
  this.captureEmail = (email) => {
    actions.enterText(this.emailTextField, email);
  };
}
module.exports = new LoginPage();