const actions = require('../base/actions');
const logger = require('../base/logger')
/**
 * @description Page Object for Authentication page, 
 */

class AuthenticationPage {
  // Web elements for Login
  constructor() {
    this.btnCreateAccount = element(by.id('SubmitCreate'));
    this.txtCreateEmailAddress = element(by.id('email_create'));
    this.txtCreateEmailAddressError = element(by.css('.form-error'));
    this.txtCreateEmailAddressOk = element(by.css('.form-ok'));
    this.loginButton = element(by.css('.sel_login'));
    this.errorHolder = element(by.id('create_account_error'))
    this.liCreateAccountErrors = element.all(by.css('.alert-danger ol li'));
  }

  checkEmailAddress(email) {
    logger.step(`Enter "${email}" in the email Address textbox`)
    actions.enterText(this.txtCreateEmailAddress, `${email}`)
    this.txtCreateEmailAddress.sendKeys(protractor.Key.ENTER);
    this.txtCreateEmailAddress.sendKeys(protractor.Key.TAB);
  }

  enterEmailAddress(email) {
    logger.step(`Enter "${email}" in the email Address textbox`)
    actions.enterText(this.txtCreateEmailAddress, `${email}`)
    this.txtCreateEmailAddress.sendKeys(protractor.Key.TAB);
  }

  clickCreateAccount()
  {
    logger.step(`Click the "Create an Account Button`)
    actions.clickElement(this.btnCreateAccount);
  }

  /**
   * @description Function used to 
   * @method enterUserCredentials
   */
  goToSignIn() {
    logger.step('Click the "Sign In" button')
    actions.clickElement(this.btnSignIn);
  }

  clickCreateAccount() {
    logger.step('Click the "Create an account" button');
    actions.clickElement(this.btnCreateAccount);
  }

  isOkDisplayedOnEmailAddress() {
    logger.step(`Validate that textbox displays a check mark`)
    return actions.isElementDisplayed(this.txtCreateEmailAddressOk);
  }

  isErrorDisplayedOnEmailAddress() {
    logger.step(`Validate that textbox displays that there is an error (X mark in the input)`)
    return actions.isElementDisplayed(this.txtCreateEmailAddressError);
  }

  async isDuplicatedEmailErrorDisplayed() {
    browser.sleep(4000)
    var duplicatedEmailMessage = "An account using this email address has already been registered";
    logger.step(`Validate that message saying: "${duplicatedEmailMessage}" is displayed.`)
    actions.isElementDisplayed(this.errorHolder);
    var text = await this.liCreateAccountErrors.first().getText();
    return text.includes(duplicatedEmailMessage);
  }

  async isInvalidEmailErrorDisplayed() {
    var invalidMessage = "Invalid email address";
    logger.step(`Validate that message saying: "${invalidMessage}" is displayed.`)
    actions.isElementDisplayed(this.errorHolder);
    var text = await this.liCreateAccountErrors.first().getText();
    return text.includes(invalidMessage);
  }

  // this was not implemented, but could be used if there are
  // future scenarios, where there are multiple errors in error list.
  async findTextInElementList(elementList, textToFind) {
    actions.isElementDisplayed(elementList.first());
    var isPresent = elementList.filter((elem) => {
      return elem.getText().then((text) => {
        console.log(`text: ${text}`);
        return text.includes(textToFind);
      })
    });
    return isPresent.length > 0 ? true : false;
  }
}
module.exports = new AuthenticationPage();
