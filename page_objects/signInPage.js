/**
 * @description Page Object for SingIn Page.
 */
function SignInPage() {
  this.createAnAccountButton = element(by.css('#SubmitCreate'));
  this.invalidEmailMessage = element(by.css('#create_account_error li'));
  this.emailInput = element(by.css('#email_create'));

  this.clickOnCreateAnAccountButton = () => {
      this.createAnAccountButton.click();
  };

  this.enterEmail = (email) => {
    this.emailInput.sendKeys(email);
    this.clickOnCreateAnAccountButton();
  };
}

module.exports = new SignInPage();
