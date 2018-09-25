const actions = require('../base/actions');
const data = require('../test_data/data');

function AuthenticationPage() {

    this.signInLabel = element(by.css('.login'));
    this.contactUs = element(by.id('contact-link'));
    this.authenticationLabel = element(by.css('.navigation_page'));
    this.authenticationHeader = element(by.css('.page-heading'));
    this.createAccountSubHeader = element(by.css('.page-subheading'));
    this.createAccountForm = element(by.id('create-account_form'));
    this.createAccountFormDiv = this.createAccountForm.element(by.css('.form_content.clearfix'));
    this.adviceMessage = this.createAccountFormDiv.element(by.tagName('p'));
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.createAccountErrorMessage = element(by.id('create_account_error'));
    this.emailAddressTextField = element(by.id('email_create'));
    this.formGroupDiv = this.createAccountFormDiv.element(by.css('.form-group'));
    this.emailAddressLabel = this.formGroupDiv.element(by.tagName('label'));

    this.isAuthLabelDisplayedCorrectly = () => {
        return actions.getElementText(this.authenticationLabel);
    }

    this.isAuthHeaderDisplayedCorrectly = () => {
        return actions.getElementText(this.authenticationHeader);
    }

    this.isAccountSubHeaderDisplayedCorrectly = () => {
        return actions.getElementText(this.createAccountSubHeader);
    }

    this.clickSubmitButtonWithoutEmail = () => {
        return actions.clickToElement(this.createAccountButton);
    }

    this.createAccount = () => {

        actions.enterText(this.emailAddressTextField, data.email);
        return actions.clickToElement(this.createAccountButton);
    }

    this.isCreateAccountErrorMessageDisplayed = () => {
        return actions.isElementDisplayed(this.createAccountErrorMessage);
    }

    this.isCreateAccountErrorMessageNotDisplayed = () => {
        return this.createAccountErrorMessage.isDisplayed();
    }

    this.basicVisualValidationsPreAccountCreation = () => {
        this.basicVisualValidationsAuthenticationPage();
        expect(this.isCreateAccountErrorMessageNotDisplayed()).toBe(false);
    }

    this.isAdviceMessageDisplayed = () => {
        return actions.getElementText(this.adviceMessage);
    }

    this.isEmailAddressLabelDisplayed = () => {
        return actions.getElementText(this.emailAddressLabel);
    }

    this.basicVisualValidationsAuthenticationPage = () => {
        expect(this.isAuthLabelDisplayedCorrectly()).toEqual('Authentication');
        expect(this.isAuthHeaderDisplayedCorrectly()).toEqual('AUTHENTICATION');
        expect(this.isAccountSubHeaderDisplayedCorrectly()).toEqual('CREATE AN ACCOUNT');
        expect(this.isAdviceMessageDisplayed()).toEqual('Please enter your email address to create an account.');
        expect(this.isEmailAddressLabelDisplayed()).toEqual('Email address');
    }
}

module.exports = new AuthenticationPage();