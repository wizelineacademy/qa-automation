const actions = require('../base/actions');

/**
 * @description Page Object for AuthenticationPage.
 */
function AuthenticationPage() {
  this.navigationText = element(by.css('.navigation_page'));
  this.signinButton = element(by.css('.header_user_info .login'));
  this.emailTextField = element(by.id('email_create'));
  this.createAccountButton = element(by.id('SubmitCreate'));
  this.createAccountErrorText = element.all(by.css('#create_account_error li')).last();

  /**
   * @description Function usedto wait for the Navigation element and return its text
   * @method getNavigationText
   */
  this.getNavigationText = () => actions.getElementText(this.navigationText);
  
  /**
   * @description Function usedto wait for the Navigation element and return its text
   * @method getNavigationText
   */
  this.getCreateAccountErrorText = () => actions.getElementText(this.createAccountErrorText);

  /**
   * @description Function used to enter to authetication section
   * @method enter
   */
  this.enter = () => {
    actions.clickToElement(this.signinButton);
  };

  /**
   * @description Function used to enter email and click create account
   * @method sendEmail
   */
  this.sendEmail = (email) => {
    actions.clearElementText(this.emailTextField);
    actions.enterText(this.emailTextField, email);
    actions.clickToElement(this.createAccountButton);
  };
}
module.exports = new AuthenticationPage();
