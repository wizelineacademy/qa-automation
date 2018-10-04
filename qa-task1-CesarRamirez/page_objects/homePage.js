const actions = require('../base/actions');
/**
 * @description Page Object for Automation practice Home Page.
 */
function HomePage() {

    //Web Elements for Home page
    this.signInLink = element(by.css('.login'));

    this.clickSignIn = () => {
        actions.clickToElement(this.signInLink);
    }
}

module.exports = new HomePage();