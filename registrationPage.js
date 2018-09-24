const actions = require('../base/actions');

/**
 * @description Page Object for Registration Page.
 */

function registrationPage() {
  // Web elements for regristration form
  this.categoryTitle = element(by.css('page-heading'));
  this.MrRadioField  = element(by.id('id_gender1'));
  this.MrsRadioField = element(by.id('id_gender2'));
  this.firstNameTextField = element(by.id('customer_firstname'));
  this.lastNameTextField  = element(by.id('customer_lastname'));
  this.emailTextField     = element(by.id('email'));
  this.passwordTextField  = element(by.id('passwd'));
  this.daysBDropdown   = element(by.id('uniform-days'));
  this.monthsBDropdown = element(by.id('uniform-months'));
  this.yearsBDropdown  = element(by.id('uniform-years'));
  this.day   = element(by.id('days'));
  this.month = element(by.id('months'));
  this.year  = element(by.id('years'));
  this.newsLetterCheck    = element(by.id('newsletter'));
  this.receiveOffersCheck = element(by.id('optin'));
  this.companyTextField   = element(by.id('company'));
  this.address1TextField  = element(by.id('address1'));
  this.address2TextField  = element(by.id('address2'));
  this.cityTextField = element(by.id('city'));
  this.stateDropDown = element(by.id('uniform-id_state'));
  this.state   = element (by.id('id_state'));
  this.zipTextField = element(by.id('postcode'));
  this.countryDropDown  = element(by.css('#uniform-id_country'));
  this.country = element(by.id('id_country'));
  this.additionalInfo   = element(by.id('other'));
  this.phoneTextField   = element(by.id('phone'));
  this.mobilePhoneField = element(by.id('phone_mobile'));
  this.aliasField   = element(by.id('alias'));
  this.submitButton = element(by.id('submitAccount'));

  /**
   * @description Function used to enter the Personal Information into the form
   * @method fillPersonalInfoWith
   * @param {object} personalInfo
   */
  this.fillPersonalInfoWith = (personalInfo) =>
  {
    actions.clickToElement(this.MrRadioField);

    actions.enterText(this.firstNameTextField, personalInfo.firstName);
    actions.enterText(this.lastNameTextField, personalInfo.lastName);
    actions.enterText(this.passwordTextField, personalInfo.passwd);
    actions.clickToElement(this.daysBDropdown);
    actions.clickToElement(this.day.element(by.css('option[value="' + personalInfo.day + '"]')));
    actions.clickToElement(this.monthsBDropdown);
    actions.clickToElement(this.month.element(by.css('option[value="' + personalInfo.month + '"]')));
    actions.clickToElement(this.yearsBDropdown);
    actions.clickToElement(this.year.element(by.css('option[value="' + personalInfo.year + '"]')));
  }

  /**
   * @description Function used to enter the Address Information into the form
   * @method fillAdddressInfoWith
   * @param {object} addressInfo
   */
  this.fillAdddressInfoWith = (addressInfo) =>
  {
    actions.enterText(this.companyTextField, addressInfo.company);
    actions.enterText(this.address1TextField, addressInfo.address1);
    actions.enterText(this.cityTextField, addressInfo.city);

    actions.clickToElement(this.stateDropDown);
    actions.clickToElement(this.state.element(by.css('option[value="43"]')));

    actions.enterText(this.zipTextField, addressInfo.zip);
    actions.enterText(this.phoneTextField, addressInfo.phone);
    actions.enterText(this.mobilePhoneField, addressInfo.mobile);
    actions.enterText(this.aliasField, addressInfo.alias);
  }

  /**
   * @description Function used to enter submit the form
   * @method submitRegistration
   */
  this.submitRegistration = () =>{
    actions.clickToElement(this.submitButton);
  }
}

module.exports = new registrationPage();
