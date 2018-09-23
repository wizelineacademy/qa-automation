const actions = require('../base/actions');
const logger = require('../base/logger')
/**
 * @description Page Object for Login Page.
 */
class LandingPage {
  // Web elements for Login
  constructor()
  {
    this.btnSignIn = element(by.css('.login'));
    this.btnContactUs = element(by.id('contact-link'));
    this.loginButton = element(by.css('.sel_login'));
    //bread crumbs to validate
    this.lblAuthenticationBreadCrumb = element(by.cssContainingText('.navigation_page',"Authentication"))
  }

  /**
   * @description Function used to 
   * @method enterUserCredentials
   */
  clickSignIn()
  {
    logger.step('Click the "Sign In" button');
    actions.clickElement(this.btnSignIn); 
    actions.isElementDisplayed(this.lblAuthenticationBreadCrumb);   
  }   
}
module.exports = new LandingPage();
