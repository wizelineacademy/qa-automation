const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const nav = require('../page_objects/nav');
const newAccount = require('../page_objects/newAccount');

beforeAll(function () {
  page.openUrl()
})

describe("Create new account", function() {
    it("Navigate to login page", function() {
        nav.goLoginPage();
        expect(loginPage.isDisplayed(loginPage.createAccountForm) 
            && loginPage.isDisplayed(loginPage.loginForm)).toBe(true);
    });
    it("Validate new account form", function(){
        loginPage.clickOnNewAccount();
        expect(loginPage.isDisplayed(loginPage.errorEmailCreateMessage)).toBe(true);
    });
    it('Go to new account', function() {
        loginPage.enterNewEmail(data.userPre);
        loginPage.clickOnNewAccount();
        expect(newAccount.validateNewForm(data.userPre,data.defaultAlias)).toBe(true);
    });
    it('Fill data for New Account', function(){
        newAccount.fillInputs(data.userInfo);
        expect(newAccount.validateFilledForm(data.userInfo)).toBe(true);
       
    });
    it('Create new account', function () {
        newAccount.createNewAccount();
        expect(nav.checkProfileName()).toBe(true);
    });
});
