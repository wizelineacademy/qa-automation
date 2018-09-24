const actions = require('../base/actions');

/**
 * @description Page Object for My Account Page.
 */
function MyAccountPage() {
    // Web elements for My Account Page
    this.myAccountLabel = element(by.css('.navigation_page'));

    /**
     * @description Function used to verify if My Account Page is Displayed
     * @method isMyAccountPageDisplayed
     * 
     */
    this.isMyAccountPageDisplayed = () => {
        return actions.isElementDisplayed(this.myAccountLabel);
    };

    /**
    * @description Function used to get My Account Label Text
    * @method verifyMyAccountLabelText
    * 
    */

    this.verifyMyAccountLabelText = () => {
        return actions.getElementText(this.myAccountLabel);
    };
}
module.exports = new MyAccountPage();
