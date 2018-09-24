

const LoginPage = require('../page_objects/LoginPage');

beforeAll(function (){ browser.get("http://automationpractice.com/index.php") })

describe("Accesing the main page",function(){
    it("Open login page", function(){

      LoginPage.enterIntoLoginPage();
      expect( LoginPage.isLoginPageDisplayed()).toBe(true);
    });

    it("not create account without mail", function() {
      LoginPage.enterIntoLoginPage();
      LoginPage.createNewAccountWithouthMail();
      expect(LoginPage.isinvalidMailMessageDisplayed()).toBe(true);

    });

    it("create a new Account ", function() {
      LoginPage.enterIntoLoginPage();
      newAccountPage.createNewAccount();
      expect(newAccountPage.isAccountSuccessfullyCreated()).toBe(true);
    });







});
