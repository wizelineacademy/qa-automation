const actions = require('../base/actions');
/**
 * @description Page Object for Automation practice Login Page.
 */
function LoginPage() {

    //Page WebElements
    this.emailTextField1 = element(by.id('email_create'));
    this.createAnAccountButton = element(by.id('SubmitCreate'));
    this.errorMessage = element(by.css('#create_account_error>ol>li'));

    /**
     * @description Generate an error message on create account     *
     * @param email
     */
    this.fillEmailField = (email) => {
        actions.enterText(this.emailTextField1, email);
    };

    /**
     *@description Click on create account buttin
     */
    this.clickCreateAccount = () => {
        actions.clickToElement(this.createAnAccountButton);
        browser.sleep(3000);
    };

    /**
     * @description validate the error message contains the expected message
     */
    this.checkErrorMsg = () => {
        return actions.getElementText(this.errorMessage);
    };

    /**
     * @description This is an email generator
     */
    this.generateRandomEmail = () => {
        actions.enterText(this.emailTextField1,'cesar_' + Math.floor((Math.random() * 10000) + 1) + '@gmail.com');
    };

}

module.exports = new LoginPage();