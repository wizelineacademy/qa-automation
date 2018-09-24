const actions = require('../base/actions');

/**
 * @description Page Object for Home Page.
 */
function HomePage() {
  // Web elements for Home
  this.loginLink = element(by.className('login'));

  /**
   * @description Function used to go to login page
   * @method enterUserCredentials
   */
  this.goToLogin = () => {
    actions.clickToElement(this.loginLink);
  };
}
module.exports = new HomePage();