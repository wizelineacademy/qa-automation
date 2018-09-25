const actions = require('../base/actions');

function MainPage() {

    this.signInLabel = element(by.css('.login'));
    this.contactUs = element(by.id('contact-link'));

    this.signIn = () => {
        actions.clickToElement(this.signInLabel);
    };
}

module.exports = new MainPage();