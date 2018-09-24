const actions = require('../base/actions');

/**
 * @description Page Object for MyAccountPage.
 */
function MyAccountPage() {
  this.navigationText = element(by.css('.navigation_page'));

  /**
   * @description Function used to wait for the Navigation element and return its text
   * @method getNavigationText
   */
  this.getNavigationText = () => actions.getElementText(this.navigationText);
}

module.exports = new MyAccountPage();
