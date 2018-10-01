const actions = require('../base/actions');

/**
 * @description Page Object for Home Page.
 */
function HomePage() {
  // Web elements for Home Page
  this.signInButton = element(by.css('.login'));


  /**
   * @description Function used to click on Login Button
   * @method 
   * 
   */
  this.clickLoginButton = () => {

    actions.clickToElement(this.signInButton);

  };
}
module.exports = new HomePage();
