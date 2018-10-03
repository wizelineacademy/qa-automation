var email = 'lily10@test.com';
var pass = 'password';
var customerFirstName = 'Customer Name';
var customerLastName = 'Customer Last Name';
var firstname = 'Lily';
var lastname = 'Zapari';
var address = '123 street';
var city = 'Miami';
var state = '9';
var zip = '90210';
var mobilePhone = '1234567890';
var addressAlias = 'My House';

const homePage = require('../page_objects/homePage');
const signInPage = require('../page_objects/signInPage');
const createAccountPage = require('../page_objects/createAccountPage');
const myAccountPage = require('../page_objects/myAccountPage');

describe("SignIn into the Site", function() {
    it("Validate Blank Email Error Message", function() {
        browser.get('http://automationpractice.com/index.php');
        browser.sleep(6000);
        homePage.clickOnSignInLink();
        browser.sleep(6000);
        signInPage.clickOnCreateAnAccountButton();
        browser.sleep(6000);
        expect(
          signInPage.invalidEmailMessage.isPresent()
        ).toBe(true);
        browser.sleep(6000);
    });


    it("Successfull Sign In", function() {
        browser.get('http://automationpractice.com/index.php');
        browser.sleep(6000);
        homePage.clickOnSignInLink();
        browser.sleep(6000);
        signInPage.enterEmail(email);
        browser.sleep(6000);
        createAccountPage.register(email, customerFirstName, customerLastName, pass,
          firstname, lastname, address, city, state, zip, mobilePhone, addressAlias
        );
        browser.sleep(6000);

        expect(myAccountPage.welcomeText.getText()).toEqual(
          "Welcome to your account. Here you can manage all of your personal information and orders.");
        browser.sleep(6000);
    });
});
