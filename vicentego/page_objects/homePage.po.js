const actions = require('../base/actions');

function HomePage() {
    this.signInButton = element(by.className('login'));
    this.signOutButton = element(by.className('logout'));

    this.openAuthenticationPage = () => {
        actions.clickToElement(this.signInButton);
    };

    this.isSignOutButtonDisplayed = () => {
        return actions.isElementDisplayed(this.signOutButton);
    };

    this.isSignInButtonDisplayed = () => {
        return actions.isElementDisplayed(this.signInButton);
    };

    this.isUserLoggedOut = () => {
        actions.clickToElement(this.signOutButton);
        return actions.isElementDisplayed(this.signInButton);
    };
}
module.exports = new HomePage();