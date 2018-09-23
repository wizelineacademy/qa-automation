const data = require('../test_data/test_data');
const page = require('../page_objects/page');
const homePage = require('../page_objects/homePage');
const loginPage = require('../page_objects/loginPage');
const createAccountPage = require('../page_objects/createAccountPage');
const myAccountPage = require('../page_objects/myAccountPage');

beforeAll(function () {
    page.openUrl()
});

describe('Log in scenarios', function () {

    it('Open HomePage', function () {
        homePage.clickSignIn();
    });

    it('Validate Error Message when using invalid email', function () {
        loginPage.fillEmailField(data.invalidEmail);
        loginPage.clickCreateAccount();
        expect(loginPage.checkErrorMsg()).toEqual(data.errorMessage);
    });

    it('Validate Error Message when user leave empty the email field', function () {
        loginPage.emailTextField1.clear();
        loginPage.clickCreateAccount();
        expect(loginPage.checkErrorMsg()).toEqual(data.errorMessage);
    });

    it('Validate when user use a valid email', function () {
        loginPage.emailTextField1.clear();
        loginPage.generateRandomEmail(data.randomMail);
        loginPage.clickCreateAccount();
        expect(createAccountPage.getPageTitle()).toEqual('CREATE AN ACCOUNT');
    });


});


describe('Create an Account Tests', function () {

    it('Validate when user use a valid email', function () {
        homePage.clickSignIn();
        loginPage.generateRandomEmail(data.partialEmail);
        loginPage.clickCreateAccount();
        expect(createAccountPage.getPageTitle()).toEqual('CREATE AN ACCOUNT');
    });

    it('Create New Account Form', function () {

        createAccountPage.chooseGenderTitle(data.formFields);
        createAccountPage.fillPesonalInformationSection(data.formFields);
        createAccountPage.fillYourAddressSection(data.formFields);
        createAccountPage.registerForm();
        expect(myAccountPage.isAtMyAccountPage()).toEqual(data.confirmationMsg);
        myAccountPage.logOut();
    })

});
