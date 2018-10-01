const data = require('../test_data/data');
const page = require('../page_objects/page');
const loginPage = require('../page_objects/loginPage');
const homePage = require('../page_objects/homePage');
const accountCreationPage = require('../page_objects/accountCreationPage');
const myAccountPage = require('../page_objects/myAccountPage');
const actions = require('../base/actions');
const utils = require('../base/utils');


beforeAll(function () {
    page.openUrl()
})

 describe("Click on Create Account without Email", function() {

    it ("Click on Sing In", function(){
     homePage.clickLoginButton();
     expect(loginPage.getAuthenticationLabelText()).toEqual(data.authenticationLabel);
    });

    it("Click on Create an Account without Email", function() {
    loginPage.createAccount("");
    expect(loginPage.getCreateAccountErroText()).toEqual(data.createAccountErrorText);
    });
  
});

describe("Create Account With Email", function () {

    it("Go to URL", function () {
        page.openUrl();
    });

      it ("Click on Sing In", function() {
         homePage.clickLoginButton();
         expect(loginPage.getAuthenticationLabelText()).toEqual(data.authenticationLabel);
     });
 
    it("Create an Account With Random Email", function () {
        loginPage.createAccount(utils.getRandomEmail());
        expect(accountCreationPage.isCreateAccountPageDisplayed()).toBe(true);
    });

    it("Fill Your Personal Information", function () {
        accountCreationPage.clickTitleRadioButton(data.title);
        accountCreationPage.enterFirstName(data.firstName);
        accountCreationPage.enterLastName(data.lastName);
        accountCreationPage.enterPassword(data.password);
        accountCreationPage.selectElementFromDropdownByIndex(accountCreationPage.daysDropDown, data.day);
        accountCreationPage.selectElementFromDropdownByIndex(accountCreationPage.monthsDropDown, data.month);
        accountCreationPage.selectElementFromDropdownByIndex(accountCreationPage.yearsDropDown, data.year);
        accountCreationPage.checkSignUpForNewsLetter(true);
        accountCreationPage.checkReceiveOffers(false);

    });

    it("Fill Your Address Information", function () {
        actions.clearElementText(accountCreationPage.addrFirstNameTextBox);
        accountCreationPage.enterAddrFirstName(data.addrFirstName);
        actions.clearElementText(accountCreationPage.addrLastNameTextBox);
        accountCreationPage.enterAddrLastName(data.addrLastName);
        accountCreationPage.enterAddrCompany(data.addrCompany);
        accountCreationPage.enterAddrAddress(data.addrAddress);
        accountCreationPage.enterAddrAddress2(data.addrAddress2);
        accountCreationPage.enterAddrCity(data.addrCity);
        accountCreationPage.selectElementFromDropdownByText(accountCreationPage.addrStateDropDown, data.addrState);
        accountCreationPage.enterAddrPostalCode(data.addrPostalCode);
        accountCreationPage.selectElementFromDropdownByIndex(accountCreationPage.addrCountryDropDown, data.addrCountry);
        accountCreationPage.enterAddrAdditional(data.addrAdditional);
        accountCreationPage.enterAddrHomePhone(data.addrHomePhone);
        accountCreationPage.enterAddrMobilePhone(data.addrMobilePhone);
        actions.clearElementText(accountCreationPage.addrAliasTextBox);
        accountCreationPage.enterAddrAlias(data.addrAlias);
    
    });

    it("Verify Sucessfull Registration", function () {
        accountCreationPage.clickSubmitButton();
        expect(myAccountPage.isMyAccountPageDisplayed()).toBe(true);
        myAccountPage.verifyMyAccountLabelText();
        expect(myAccountPage.verifyMyAccountLabelText()).toEqual(data.myAccountLabel);

    });

});



