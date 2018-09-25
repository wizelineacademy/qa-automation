const data = require('../test_data/data');
const page = require('../page_objects/page');

const mainPage = require('../page_objects/MainPage');
const authPage = require('../page_objects/AuthenticationPage');

beforeAll(function () {
    page.openUrl()
})

describe("SignIn into the Site", function () {

    it("Enter application", function () {
        mainPage.signIn();
    });

    it("Auth Page Bad Authentication", function () {
        authPage.basicVisualValidationsPreAccountCreation();
        authPage.clickSubmitButtonWithoutEmail();
        expect(authPage.isCreateAccountErrorMessageDisplayed()).toBe(true);
    });
});
