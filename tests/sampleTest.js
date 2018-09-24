const data = require('../test_data/data');
const page = require('../page_objects/page');
const mainPage = require('../page_objects/mainPage');
const loginPage = require('../page_objects/loginPage');
const registerUser = require('../page_objects/registerUser');
const userPage = require('../page_objects/userPage');
/**
 * @description Test cases to verify web page if working ok.
 */

beforeAll(function () {
  page.openUrl()
})

describe("Go to Sign In", function() {
  /*This part is to verify if error msg is displayed when email-addrs is empty*/
    it("Verify when email addrs is empty", function() {
        mainPage.clickSign();
        loginPage.clickSubmitCreate();
        expect(loginPage.checkMsgError()).toBe(true);
    });

    /*This part is to verify if personal table is displayed when an invalid
     *email is introduced*/
    it("Using an invalid email address", function(){
      mainPage.clickSign();
      loginPage.enterEmailCreate('oerri#$%@inv.inv.in8v.com');
      expect(loginPage.checkColum()).toBe(false);
    });

    /*This part is to verify if an account is created correctly when an valid
     *email is passed*/
    it("Create an account and verify if this one was created succesfully",
    function(){
      mainPage.clickSign();
      loginPage.enterEmailCreate(data.registerEmail);
      registerUser.putPersonalInformation(data.personalInformation);
      registerUser.enterAdress(data.adress);
      registerUser.registerButton();
      expect(userPage.optionsVisible()).toBe(true);
      userPage.logoutButton();
    });

});
