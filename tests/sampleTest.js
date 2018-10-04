const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const accountCreationPage = require('../page_objects/accountCreationPage');

beforeAll(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
  // TC-01
    it("Enter Email - Invalid Email", function() {
        loginPage.enterNewUserEmail(data.invalidEmail);
        expect(loginPage.isAccountErrorDisplayed()).toBe(true);
    });
  // TC-02
    it("Enter Email - Valid Email", function() {
        loginPage.enterNewUserEmail(data.validEmail);
        expect(accountCreationPage.isCreateAccountFormDisplayed()).toBe(true);
    });
  // TC-03
    it("Create Account - Valid Data", function() {
         loginPage.enterNewUserEmail(data.validEmail);
         accountCreationPage.fillOutAccountCreationForm(
                                                         data.title,
                                                         data.firstName,
                                                         data.lastName,
                                                         data.validEmail,
                                                         data.password,
                                                         data.dobDay,
                                                         data.dobMonth,
                                                         data.dobYear,
                                                         data.newsletterCheckboxValue,
                                                         data.optInCheckboxValue,
                                                         data.company,
                                                         data.addressLine1,
                                                         data.addressLine2,
                                                         data.city,
                                                         data.state,
                                                         data.zipCode,
                                                         data.country,
                                                         data.additionalInfo,
                                                         data.homePhone,
                                                         data.mobilePhone,
                                                         data.addressAlias
                                                       );
        accountCreationPage.isUserLoggedIn(data.userName);
     });
});
