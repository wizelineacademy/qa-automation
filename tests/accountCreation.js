const data = require('../test_data/data');
const page = require('../page_objects/page')
const authenticationPage = require('../page_objects/authenticationPage');
const accountCreationPage = require('../page_objects/accountCreationPage');
const myAccountPage = require('../page_objects/myAccountPage');

beforeEach(function () {
  page.openUrl();
  authenticationPage.enter();
})

describe("Account creation", function() {
    it("Enter invalid emails validations", function() {
        // For each invalid emails in data, validate if invalid error message was shown
        data.invalidEmails.forEach(invalidEmail => {
            authenticationPage.sendEmail(invalidEmail);
            expect(authenticationPage.getCreateAccountErrorText()).toBe('Invalid email address.');
        });
    });

    it("Enter valid email and pass", function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
    });
    
    // For each field required its created a validation for the requiered field
    data.accountCreationData.requiredFields.forEach(requiredField => {
        it(`Required validation field ${requiredField}`, function() {
            authenticationPage.sendEmail(data.validEmail);
            expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
            const formData = { ...data.accountCreationData.formData };
            formData[requiredField] = '';
            accountCreationPage.saveForm(formData);
            expect(accountCreationPage.hasErrors()).toBe(true);
        });
    });

    it(`Five characters minimum for password`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        formData['passwd'] = formData['passwd'].slice(0, 4);
        accountCreationPage.saveForm(formData);
        expect(accountCreationPage.hasErrors()).toBe(true);
    });

    it(`Valid postal/zip code - not chars allowed`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        // With chars
        formData['postcode'] = 'abc';
        accountCreationPage.saveForm(formData);
        expect(accountCreationPage.hasErrors()).toBe(true);
    });

    it(`Valid postal/zip code - minimun chars allowed (5 chars)`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        // With numbers but not minimum (5)
        formData['postcode'] = '1234';
        accountCreationPage.saveForm(formData);
        expect(accountCreationPage.hasErrors()).toBe(true);
    });

    it(`Valid phone number (Only numbers)`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        // With chars
        formData['phone'] = 'abc';
        accountCreationPage.saveForm(formData);
        expect(accountCreationPage.hasErrors()).toBe(true);
    });

    it(`Valid phone number (Only numbers)`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        // With chars
        formData['phone_mobile'] = 'abc';
        accountCreationPage.saveForm(formData);
        expect(accountCreationPage.hasErrors()).toBe(true);
    });

    it(`Account created successfully`, function() {
        authenticationPage.sendEmail(data.validEmail);
        expect(accountCreationPage.submitAccountIsVisible()).toBe(true);
        const formData = { ...data.accountCreationData.formData };
        accountCreationPage.saveForm(formData);
        expect(myAccountPage.getNavigationText()).toBe('My account');
    });
});
