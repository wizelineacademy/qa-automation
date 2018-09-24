const homePage = require('../page_objects/homePage.po');
const actions = require('../base/actions');

function AuthenticationPage() {
    this.emailAddressText = element(by.id('email_create'));
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.createAccountErrorMessage = element(by.id('create_account_error'));

    this.isInvalidEmailAddressMessageDisplayed = () => {
        homePage.openAuthenticationPage();  
        actions.clickToElement(this.createAccountButton);      
        return actions.isElementDisplayed(this.createAccountErrorMessage);
    };

    this.openCreateAccountForm = () => {
        actions.enterText(this.emailAddressText, 'vince1@qawz.com')          
        actions.clickToElement(this.createAccountButton);        
    };
}
module.exports = new AuthenticationPage();