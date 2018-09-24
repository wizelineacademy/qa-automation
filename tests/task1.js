const page = require('../page_objects/page');
const homePage = require('../page_objects/homePage');
const loginPage = require('../page_objects/loginPage');
const accountCreationPage = require('../page_objects/accountCreationPage');
const myAccountPage = require('../page_objects/myAccountPage');
var casual = require('casual');

beforeAll(function () {
    page.openUrl()
})

describe("Login process", function () {
    it("Verify error when no email is captured", function () {
        homePage.goToLogin();
        loginPage.clickOnCreateButton();
        expect(loginPage.isEmailErrorVisible()).toBe(true);
    });

    it("Verify registration process", function () {
        homePage.goToLogin();
        loginPage.captureEmail(casual.email);
        loginPage.clickOnCreateButton();
        accountCreationPage.fillPersonalInformation();
        accountCreationPage.fillAddress();
        accountCreationPage.clickSubmitAccount();
        expect(myAccountPage.getPageTitle()).toEqual("MY ACCOUNT")
    });
});