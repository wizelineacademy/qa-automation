const objectBuilder = require('../test_data/objectBuilder');
const page = require('../page_objects/page');
//const logger = require('../base/logger');
const landingPage = require('../page_objects/landingPage');
const authPage = require('../page_objects/authenticationPage');
const createAccountPage = require('../page_objects/createAccountPage');
// Test Data
const invalidEmailList = objectBuilder.getInvalidEmails();
const duplicatedEmail = objectBuilder.getDuplicatedEmail();
const validEmail = objectBuilder.getValidEmail();
const validForm = objectBuilder.getValidForm();

beforeAll(function () {
    page.openUrl()
})

describe("Automation practice Account creation pages suite", function () {
    it("Should display an error message when creating an account without email", async () => {
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        expect(await authPage.isInvalidEmailErrorDisplayed()).toBe(true);
    });

    it(`Should display a check mark when using a valid email - ${validEmail}`, function() {                
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        authPage.enterEmailAddress(validEmail)
        expect(authPage.isOkDisplayedOnEmailAddress()).toBe(true);
    });

    it(`Should display an error message when using a duplicated Email - ${duplicatedEmail}`,async function() {        
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        authPage.checkEmailAddress(duplicatedEmail);                
        expect(await authPage.isDuplicatedEmailErrorDisplayed()).toBe(true);
    });

    // Just wanted to play around with the framework and see how it behaves when executing
    // tests dynamically (Based on an array).
    invalidEmailList.forEach(email => {
        it(`Should display an error message when adding an invalid email - ${email}`, async () => {
            landingPage.clickSignIn();
            authPage.clickCreateAccount();
            authPage.checkEmailAddress(email)            
            expect(await authPage.isInvalidEmailErrorDisplayed()).toBe(true);
            expect(authPage.isErrorDisplayedOnEmailAddress()).toBe(true)
        })
    });

    it('Should be able to successfully create a new account',async function() {                
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        authPage.enterEmailAddress(validEmail)
        expect(authPage.isOkDisplayedOnEmailAddress()).toBe(true);
        authPage.clickCreateAccount()
        expect(authPage.isOkDisplayedOnEmailAddress()).toBe(true);        
        expect(createAccountPage.isDisplayedFormTitle()).toBe(true);        
        //expect(await createAccountPage.isEmailPopulated(validEmail)).toBe(true);
        createAccountPage.fillOutForm(validForm);
        createAccountPage.submitForm();
        expect(landingPage.isMyAccountBreadCrumbDisplayed()).toBe(true);
        browser.sleep(5000)
    });   
});
