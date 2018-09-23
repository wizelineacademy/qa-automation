const actions = require('../base/actions');

/**
 * @description Page Object for my Account page from Automation practice webapp
 */
function MyAccountPage(){

    //Web Elements
    this.myAccountTitle  = element(by.css('h1'));
    this.confirmationMessage = element(by.css('.info-account'));
    this.logout = element(by.css(".logout"));

    /**
     * @description Validate My Account title and return confirmation message
     * @return {*}
     */
    this.isAtMyAccountPage = () => {
       if (this.myAccountTitle.isPresent()) {
           return actions.getElementText(this.confirmationMessage);
       }
    };

    /**
     *@description log out page
     */
    this.logOut = () => {
        actions.clickToElement(this.logout);
    }
}

module.exports = new MyAccountPage();