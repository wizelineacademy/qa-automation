/**
 * @description Page Object for Create Account Page.
 */
function CreateAccountPage() {
  this.emailInput = element(by.css('#email'));
  this.customerFirstNameInput = element(by.css('#customer_firstname'));
  this.customerLastNameInput = element(by.css('#customer_lastname'));
  this.firstNameInput = element(by.css('#firstname'));
  this.lastNameInput = element(by.css('#lastname'));
  this.passwordInput = element(by.css('#passwd'));
  this.AddressInput = element(by.css('#address1'));
  this.cityInput = element(by.css('#city'));
  this.zipInput = element(by.css('#postcode'));
  this.mobilePhoneInput = element(by.css('#phone_mobile'));
  this.addressAliasInput = element(by.css('#alias'));
  this.stateDropDown = element(by.css('#id_state'));
  this.registerButton = element(by.css('#submitAccount'));

  this.clickOnRegisterButton = () => {
      this.registerButton.click();
  };

  this.register = (email, customerFirstName, customerLastName, password,
    firstname, lastname, address, city, stateIndex, zip, mobilePhone, addressAlias
  ) => {
    //this.emailInput.sendKeys(email);
    this.customerFirstNameInput.sendKeys(customerFirstName);
    this.customerLastNameInput.sendKeys(customerLastName);
    this.firstNameInput.sendKeys(firstname);
    this.lastNameInput.sendKeys(lastname);
    this.passwordInput.sendKeys(password);
    this.AddressInput.sendKeys(address);
    this.cityInput.sendKeys(city);
    this.zipInput.sendKeys(zip);
    this.mobilePhoneInput.sendKeys(mobilePhone);
    this.addressAliasInput.sendKeys(addressAlias);

    element(by.css("#id_state [value='" + stateIndex + "']")).click();

    this.clickOnRegisterButton();
  };

}

module.exports = new CreateAccountPage();
