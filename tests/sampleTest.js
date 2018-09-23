const data = require('../test_data/data');
const page = require('../page_objects/page');
const homePage = require('../page_objects/home_page');
const loginPage = require('../page_objects/login_page');
const registrationPage = require('../page_objects/registration_page');
const myAccountPage = require('../page_objects/my_account_page');

beforeAll(function () {
  page.openUrl()
})

describe("User should be able to Create a new valid account", function() {
  it("The Website should throw an error with an empty email", function() {
    homePage.clickOnSigning();
    loginPage.clickSubmit();
    expect(loginPage.validateRegistrationError()).toBeTruthy();
  });

  it("User should be able to navigate to the Registration page when  using a valid email", function() {
    homePage.clickOnSigning();
    loginPage.enterEmailCreate(data.registrationEmail);
    registrationPage.enterPersonalInfo(data.personalInfo);
    registrationPage.enterAdressInfo(data.adressInfo);
    registrationPage.clickSubmit();
    expect(myAccountPage.accountOptionsVisible()).toBeTruthy();
    myAccountPage.clickLogout();
  });
});

describe('User should be able to log into the app', function () {
  it('User should be able to navigate and loggin successfully', function () {
    homePage.clickOnSigning();
    loginPage.loginUser(data.registrationEmail, data.personalInfo.password)
    expect(myAccountPage.accountOptionsVisible()).toBeTruthy();
  })
});
