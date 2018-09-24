const actions = require('../base/actions');

/**
 * @description Principal nav in page. 
 */

function NavPage () {
    this.loginLink = element(by.css('.login'));
    this.contactLink= element(by.css('#contact-link > a:nth-child(1)'));
    this.profileLink = element(by.css('.account'));
    /**
   * @description Function used to navigate to login page
   * @method goLoginPage
   */
    this.goLoginPage = () =>{
        actions.clickToElement(this.loginLink);
    }
    /**
   * @description Function used to navigate to contact page
   * @method goLoginPage
   */
    this.goContactButton = () =>{
        actions.clickToElement(this.contactLink);
    }

    this.checkProfileName = async () => {
        return await actions.isElementDisplayed(this.profileLink);
    }
}

module.exports = new NavPage();