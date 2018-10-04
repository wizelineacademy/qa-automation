const data = require('../test_data/data');
const actions = require('../base/actions');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const myAccountPage = require('../page_objects/myAccountPage');
const registrationPage = require('../page_objects/registrationPage');

beforeAll(function () {
  page.openUrl()
})

describe("Validate create an accocunt ", function() {

    it("Validate empty email msg", function() {
        expect(loginPage.tryAccountWith(data.emptyEmailFormat))
               .toEqual(data.invalidEmailMSG);
    });

    it("Validate invalid format email msg", function() {
        expect(loginPage.tryAccountWith(data.invalidEmailFormat))
               .toEqual(data.invalidEmailMSG);
    });

    it("Validate duplicate email msg", function() {
        expect(loginPage.tryAccountWith(data.duplicateEmail))
               .toContain(data.duplicateEmailMSG);
    });

    it("Validate regristration form is displayed for new emails", function() {

        var _email = actions.randomEmail();

        loginPage.CreateAccountWith( _email );
        registrationPage.fillPersonalInfoWith(data.personalInfo);
        registrationPage.fillAdddressInfoWith(data.addressInfo);
        registrationPage.submitRegistration();

        expect(myAccountPage.isMyAccountPage()).toEqual(data.myAccountHeader);
    });
});
