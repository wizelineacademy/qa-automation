const {MainPageData, AccountData} = require('../Data/AutomationPractice');
const MainPagePO = require('../PageObjects/MainPage.po');
const AuthenticatonPO = require('../PageObjects/AuthenticationPage.po');

describe("SignIn Test", function() {
    it("Open Page", function() {
        browser.get(MainPageData.URL);
        expect(MainPagePO.SignInBtn.isPresent()).toBe(true);
    });

    it("Open Authentication page", function() {
        MainPagePO.ClickLogIn();
        expect(AuthenticatonPO.CreateAccountBtn.isPresent()).toBe(true);
    });

    it("Negative test: create account empty email", function() {
        AuthenticatonPO.ValidateEmail('');
        expect(AuthenticatonPO.CreateAccountErrorMsg.isPresent()).toBe(true);
    });

    it("Create account email", function() {
        AuthenticatonPO.ValidateEmail(AccountData.Email);
        expect(AuthenticatonPO.Form.isPresent()).toBe(true);
    });

    it("Fill form", function() {
        AuthenticatonPO.FillCreateAccountForm(AccountData);
        AuthenticatonPO.ValidateForm(false);
        
        expect(AuthenticatonPO.InfoAccountP.isPresent()).toBe(true);
    });
});
