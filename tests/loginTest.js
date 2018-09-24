const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const userPage = require('../page_objects/userPage');
//
beforeAll(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
  //negativeTest
    it("Enter application", function() {
        loginPage.negativeTest();
        expect(userPage.isErrorMessageDisplayed()).toBe(true);
    });
    
    //positiveTest
    it("Enter application", function() {
        loginPage.positiveTest(data.email, data.firstName, data.lastName, data.emailForm, data.passwordTextField, data.addressFirstName, data.addressLastName, data.addressCompanyName, data.address, data.addressSecondLine, data.addressCity, data.addressZipCode, data.additionalComments, data.homePhone, data.mobilePhone, data.addressAlias);
        expect(userPage.isSignOutBtnDisplayed()).toBe(true);
    });
});
