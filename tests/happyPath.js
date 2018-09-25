const data = require('../test_data/data');
const page = require('../page_objects/page');

const mainPage = require('../page_objects/MainPage');
const authPage = require('../page_objects/AuthenticationPage');
const createPage = require('../page_objects/CreateAccountPage')
const myAccountPage = require('../page_objects/MyAccountPage');

beforeAll(function () {
    page.openUrl()
})

describe("SignIn into the Site", function () {

    it("Enter application", function () {
        mainPage.signIn();
    });

    it("Auth Page Good Authentication", function () {
        authPage.basicVisualValidationsPreAccountCreation();
        authPage.createAccount();
    });

    it("Start registration proccess", function () {
        createPage.basicVisualValidationsOnAccountCreationPage();
    });

    it("Select Male Gender", function () {
        createPage.selectGender('men');
        createPage.isGenderRadioChoiceChecked('men');
    });

    it("Select Male Gender", function () {
        createPage.selectGender('men');
        createPage.isGenderRadioChoiceChecked('men');
    });

    it("Fill first name", function () {
        createPage.fillFirstName(data.name);
        createPage.validateFirstNameFilled(data.name);
    });

    it("Fill last name", function () {
        createPage.fillLastName(data.lastName);
        createPage.validateLastNameFilled(data.lastName);
    });

    it("Validate Email", function () {
        createPage.validateEmail(data.email);
    });

    it("Fill password", function () {
        createPage.fillPassword(data.password);
        createPage.validatePassword(data.password);
    });

    it("Fill BirthDate", function () {
        createPage.fillBirthDate(27, 6, 20);
    });

    it("Fill first name address form", function () {
        createPage.fillFirstNameAddress(data.name);
        createPage.validateFirstNameAddressFilled(data.name);
    });

    it("Fill last name address form", function () {
        createPage.fillLastNameAddress(data.lastName);
        createPage.validateLastNameAddressFilled(data.lastName);
    });

    it("Fill company name", function () {
        createPage.fillCompanyName(data.companyName);
        createPage.validateCompanyNameFilled(data.companyName);
    });

    it("Fill address", function () {
        createPage.fillAddressName(data.address);
        createPage.validateAddressNameFilled(data.address);
    });

    it("Fill city", function () {
        createPage.fillCityName(data.city);
        createPage.validateCityNameFilled(data.city);
    });

    it("Fill state", function () {
        createPage.fillStateName(2);
    });

    it("Fill zip code", function () {
        createPage.fillZipCode(data.zipCode);
        createPage.validateZipcodeFilled(data.zipCode);
    });

    it("Fill mobile phone", function () {
        createPage.fillMobilePhone(data.mobilePhone);
        createPage.validateMobilePhoneFilled(data.mobilePhone);
    });

    it("Fill future address", function () {
        createPage.fillFutureAddress(data.fAddress);
        createPage.validateFutureAddressFilled(data.fAddress);
    });

    it("Submit summary", function () {
        createPage.submitSummary();
        myAccountPage.infoAccountLabelIsDisplayedCorretly();
    });
});
