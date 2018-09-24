const faker = require('faker');
const LoginPage = require('../page_objects/loginPage.po');
const MainPage = require('../page_objects/mainPage.po');
const CreateAccountPage = require('../page_objects/createAccountPage.po');
const MyAccountPage = require('../page_objects/myAccountPage.po');
const Page = require('../page_objects/page.po');

beforeAll(() => {
  const page = new Page();
  page.openUrl()
})

describe("Register a new user", () => {
  it("should open the login page", () => {
    const mainPage = new MainPage();
    const loginPage = new LoginPage();

    mainPage.goToLogin();

    expect(loginPage.createAccountButton.isPresent()).toBe(true);
  });

  describe("Enter an empty email", () => {
    it("should display an error message", () => {
      const loginPage = new LoginPage();
  
      loginPage.enterEmail('');
      expect(loginPage.createAccountError.isPresent()).toBe(true);
    });
  });
  
  describe("Enter a valid email", () => {
    it("should open the register page", () => {
      const loginPage = new LoginPage();
      const createAccountPage = new CreateAccountPage();
  
      loginPage.enterEmail(faker.internet.email());
      browser.sleep(3000);
      expect(createAccountPage.submitAccountButton.isPresent()).toBe(true);
    });
  })

  describe("Create a new user", () => {
    it("should open the My account page", () => {
      const createAccountPage = new CreateAccountPage();
      const myAccountPage = new MyAccountPage();

      createAccountPage.createNewUser(
        1, faker.name.firstName(), faker.name.lastName(),
        faker.internet.password(), 1, 1, 20, faker.company.companyName(),
        faker.address.streetAddress(), faker.address.secondaryAddress(), faker.address.city(), 1,
        faker.address.zipCode().slice(0,5), 1, faker.phone.phoneNumberFormat(),
        faker.phone.phoneNumberFormat(), faker.random.word()
      );
      expect(myAccountPage.pageHeading.getText()).toEqual('MY ACCOUNT');
    });
  });
});
