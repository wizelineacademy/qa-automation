const actions = require('../base/actions');
const logger = require('../base/logger')
/**
 * @description Page Object for Login Page.
 */
class SignInPage {
  // Web elements for Login
  constructor() {
    this.liCreateAccountErrors = element.all(by.css('.alert-danger ol li'));
    this.btnCreateAccount = element(by.id('SubmitCreate'));
    this.txtCreateEmailAddress = element(by.id('email_create'));
    this.loginButton = element(by.css('.sel_login'));

  }

  enterEmailAddress(email) {
    logger.step(`Enter "${email}" in the email Address textbox`)
    actions.enterText(this.txtCreateEmailAddress, email);
  }

  /**
   * @description Function used to 
   * @method enterUserCredentials
   */
  goToSignIn() {
    logger.step('Click the "Sign In" button')
    actions.clickElement(this.btnSignIn);
  }

  clickCreateAccount()
  {
    logger.step('Click the "Create an account" button');
    actions.clickElement(this.btnCreateAccount);
  }

  isEmailErrorDisplayed() {
    return actions.isElementDisplayed(this.liCreateAccountErrors.first());
  }
}
module.exports = new SignInPage();
