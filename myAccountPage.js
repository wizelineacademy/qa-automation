const actions = require('../base/actions');

/**
 * @description Page Object for My Account Page.
 */

function myAccountPage() {
  // Web elements for My Account
  this.myAccountTitle = element(by.css('.page-heading'));

  /**
   * @description Function used to verify if the user in on My Account page
   * @method isMyAccountPage
   */
  this.isMyAccountPage = () =>
  {
    return actions.getElementText(this.myAccountTitle);
  }
}

module.exports = new myAccountPage();
