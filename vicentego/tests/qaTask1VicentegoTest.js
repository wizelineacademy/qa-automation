const page = require('../page_objects/page');
const authenticationPage = require('../page_objects/authenticationPage.po');
const accountPage = require('../page_objects/accountCreationPage.po');
const homePage = require('../page_objects/homePage.po');

describe("Login and Logout tests", function() {
    beforeAll(function () {
        page.openUrl();
      });
    
    beforeEach(function () {
        console.log('running beforeEach');
    });
    
    it("CreateAccount_EmptyEmailAddress_InvalidMesageIsDisplayed", function() {
        console.log('1- Invalid Email test');
        var isErrorMessageDisplayed = authenticationPage.isInvalidEmailAddressMessageDisplayed();
        expect(isErrorMessageDisplayed).toBe(true);
    });

    it("CreateAccount_FillingUpForm_AccountRegistered", function() {
        console.log('2- Account Register test');
        var isAccountCreated = accountPage.isNewAccountRegistered();
        expect(isAccountCreated).toBe(true);
    });

    it("Logout_ClickOnSignOutButton_UserIsLoggedOut", function() {
        console.log('3- Logout test');
        var isAccountCreated = homePage.isUserLoggedOut();
        expect(isAccountCreated).toBe(true);
    });
    
    afterEach(function () {
        console.log('clean-up afterEach');
    });

    afterAll(function () {
        console.log('clean-up END');
      });      
});