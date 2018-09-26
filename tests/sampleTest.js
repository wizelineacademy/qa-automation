const faker = require('faker');
const indexPage = require('../page_objects/indexPage.po');

describe("SignIn into the Site", function() {
    it("Enter page and Click sign in and create account with no email", function() {        
        indexPage.signInWithNoEmail();            
    });

    it("Enter page and Click sign in and create account with an email", function() {
        browser.get('http://automationpractice.com/index.php');
        browser.sleep(2000);
        indexPage.signInWithEmail(faker.name.firstName(), faker.name.lastName(), faker.internet.password(),
                faker.company.companyName(), faker.address.streetAddress(), faker.address.secondaryAddress(),
                faker.address.city(), faker.address.zipCode().slice(0,5), faker.phone.phoneNumberFormat(),
                faker.phone.phoneNumberFormat(), faker.random.word());   
                
    });
});
