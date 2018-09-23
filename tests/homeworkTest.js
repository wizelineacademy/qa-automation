const page = require('../page_objects/page')
const apMain = require('../page_objects/apMain');
const apSignIn = require('../page_objects/apSignIn');
const apCaccount = require('../page_objects/apCaccount');
const apMyAccount = require('../page_objects/apMyAccount');
const data = require('../test_data/data');


beforeAll(function () {
  page.openUrl()
})

describe("Open SignIn screen", function() {
  it("Enter SignIn page", function(){
    apMain.clickSignInButton();
    expect(apSignIn.isCreateAccountLabelDisplayed()).toBe(true);
  });

  it("Validate email error message", function(){
    apSignIn.clickCreateAccountButton();
    expect(apSignIn.isCreateAccountErrorDisplayed()).toBe(true);
    expect(apSignIn.getCreateAccountErrorMessageText()).toEqual(data.errorMessage);
  });

  it("Create an Account", function(){
    apSignIn.createAccount(data.apEmail);
    expect(apCaccount.isAuthenticationSpanDisplayed()).toBe(true);
    apCaccount.fillPersonalInformationFields('John', 'Doe', 'Password01');
    apCaccount.selectBirthdayDate(2, 7, 1979);
    apCaccount.fillAddressInformationFields('TestCo', '124 Test Street', 'Test Zone 34', 'Test City', 5, '12345', 'In the Test Zone', '1234567890', '2345678901', 'Test Alias');
    apCaccount.clickOnSubmit();
    expect(apMyAccount.isWelcomeLabelDisplayed()).toBe(true);
    expect(apMyAccount.getWelcomeLabelText()).toEqual(data.welcomeLabelText);
  });

});
