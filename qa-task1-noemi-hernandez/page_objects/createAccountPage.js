const actions = require('../base/actions.js');

function createAccountPage() {
    this.signInButton = element(by.css('.login'));
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.emailCreateInputField = element(by.id('email_create'));
    this.createAccountError = element(by.id('create_account_error'));

    this.signIn = (email) => {
        actions.clickToElement(this.signInButton);
        browser.sleep(6000);
        expect(actions.getElementText(this.createAccountButton)).toEqual('Create an account');
        actions.enterText(this.emailCreateInputField,email);
        actions.clickToElement(this.createAccountButton);

    };

}
module.exports = new createAccountPage();