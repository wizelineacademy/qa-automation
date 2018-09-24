const createAccountPage = require('../page_objects/createAccountPage.js');
const tasksPage = require('../page_objects/tasksPage.js');
const dataPage = require('../test_data/data.js');

describe("Create a new account successfully", function() {
    it("Validate that an error message appears", async function() {
        browser.get(dataPage.mainwebpage);
        browser.sleep(6000);
        createAccountPage.signIn(dataPage.email);
        tasksPage.sendNoEmail();
        expect(tasksPage.alertDangerForm).not.toEqual(null);
    });

    it("Enter a valid emalil to the form section.", function() {
        browser.sleep(6000);
        expect(tasksPage.createAccountFormHeader.getText()).toEqual('CREATE AN ACCOUNT');
    });

    it("Fill form", function() {
        tasksPage.fillNewAccForm(dataPage.gender, dataPage.firstname, dataPage.lastname, dataPage.password,
            dataPage.birthday, dataPage.birthmonth, dataPage.birthyear, dataPage.news, dataPage.offers, dataPage.company, dataPage.ad1, dataPage.ad2, dataPage.city, dataPage.state, dataPage.postcode,
            dataPage.info, dataPage.homephone, dataPage.mobilephone, dataPage.alias);
        browser.sleep(6000);
        expect(tasksPage.createdSuccessfully.getText()).toEqual('MY ACCOUNT');

    });
});


