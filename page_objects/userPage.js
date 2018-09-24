const actions = require('../base/actions');

/**
 * @description Page Object for Tasks Page.
 */
function TasksPage() {
  // Web elements for Tasks Page
  this.errorMessage = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]'));
  this.signOutBtn = element(by.xpath('/html[1]/body[1]/div[1]/div[1]/header[1]/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]'));

  /**
   * @description Function used to know if the error errorMessage is displayed
   * @method isErrorMessageDisplayed
   */
  this.isErrorMessageDisplayed = () => {
    return actions.isElementDisplayed(this.errorMessage);
  };

  /**
   * @description Function used to know if the signOutBtn is displayed
   * @method isSignOutBtnDisplayed
   */
  this.isSignOutBtnDisplayed = () => {
    return actions.isElementDisplayed(this.signOutBtn);
  };
}
module.exports = new TasksPage();
