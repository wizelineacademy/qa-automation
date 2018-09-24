const Actions = require('../base/actions');
const actions = new Actions();

class CreateAccountPage {
  constructor() {
    this.mrRadioButton = element(by.id('uniform-id_gender1'));
    this.mrsRadioButton = element(by.id('uniform-id_gender2'));
    this.customerFirstNameTextField = element(by.id('customer_firstname'));
    this.customerLastNameTextField = element(by.id('customer_lastname'));
    this.emailTextField = element(by.id('email'));
    this.passwordTextField = element(by.id('passwd'));
    this.dayDropDown = element.all(by.css('#days option'));
    this.monthDropDown = element.all(by.css('#months option'));
    this.yearDropDown = element.all(by.css('#years option'));
    this.firstNameTextField = element(by.id('firstname'));
    this.lastNameTextField = element(by.id('lastname'));
    this.companyTextField = element(by.id('company'));
    this.address1TextField = element(by.id('address1'));
    this.address2TextField = element(by.id('address2'));
    this.cityTextField = element(by.id('city'));
    this.stateDropDown = element.all(by.css('#id_state option'));
    this.postCodeTextField = element(by.id('postcode'));
    this.countryDropDown = element.all(by.css('#id_country option'));
    this.additionalTextArea = element(by.id('other'));
    this.phoneTextField = element(by.id('phone'));
    this.phoneMobileTextField = element(by.id('phone_mobile'));
    this.addressAliasTextField = element(by.id('alias'));
    this.submitAccountButton = element(by.id('submitAccount'));
  }

  createNewUser(gender, name, lastname, password, day, month, year, company,
    address1, address2, city, state, postcode, country, phone, mobile, addressAlias) {
      actions.clickElement(this.mrRadioButton);
      actions.enterText(this.customerFirstNameTextField, name);
      actions.enterText(this.customerLastNameTextField, lastname);
      actions.enterText(this.passwordTextField, password);
      actions.selectFromDropdown(this.dayDropDown, day);
      actions.selectFromDropdown(this.monthDropDown, month);
      actions.selectFromDropdown(this.yearDropDown, year);
      actions.enterText(this.companyTextField, company);
      actions.enterText(this.address1TextField, address1);
      actions.enterText(this.address2TextField, address2);
      actions.enterText(this.cityTextField, city);
      actions.selectFromDropdown(this.stateDropDown, state);
      actions.enterText(this.postCodeTextField, postcode);
      actions.selectFromDropdown(this.countryDropDown, country);
      actions.enterText(this.phoneTextField, phone);
      actions.enterText(this.phoneMobileTextField, mobile);
      actions.enterText(this.addressAliasTextField, addressAlias);
      actions.clickElement(this.submitAccountButton);
  }
}

module.exports = CreateAccountPage ;