const actions = require('../base/actions');

/**
 * @description Page Object for Create Account Page.
 */

function apCaccount(){
  //Web elements of create account page

  this.AuthenticationSpan = element(by.css('.navigation_page'));
  this.GenderMaleRadioButton = element(by.id('id_gender1'));
  this.GenderFemaleRadioButton = element(by.id('id_gender2'));
  this.CustomerFirstNameField = element(by.id('customer_firstname'));
  this.CustomerLastNameField = element(by.id('customer_lastname'));
  this.CustomerEmailField = element(by.id('email'));
  this.CustomerPasswordField = element(By.id('passwd'));
  this.BirthdayDaySelect = element(By.id('days'));
  this.BirthdayMonthSelect = element(By.id('months'));
  this.BirthdayYearSelect = element(By.id('years'));
  this.NewsletterCheckBox = element(By.id("newsletter"));
  this.SpecialCheckBox = element(By.id("optin"));
  this.AddressFirstName = element(By.id("firstname"));
  this.AddressLastName = element(By.id('lastname'));
  this.AddressCompany = element(By.id('company'));
  this.AddressLineOne = element(By.id('address1'));
  this.AddressLineTwo = element(By.id('address2'));
  this.AddressCity = element(By.id('city'));
  this.AddressState = element(By.id('id_state'));
  this.AddressPostalCode = element(By.id('postcode'));
  this.AddressCountry = element(By.id('id_country'));
  this.AddressAdditionalInformation = element(By.id('other'));
  this.AddressHomePhone = element(By.id('phone'));
  this.AddressMobilePhone = element(By.id('phone_mobile'));
  this.AddressAlias = element(By.id('alias'));
  this.SubmitButton = element(By.id('submitAccount'));


  /**
   * @description Function used to know if the Authentication span is displayed
   * @method isAuthenticationSpanDisplayed
   */

  this.isAuthenticationSpanDisplayed = () => {
    return actions.isElementDisplayed(this.AuthenticationSpan);
  };

  /**
   * @description Function used to fill the Personal Information section
   * @method fillPersonalInformationFields
   * @param {String} FirstName
   * @param {String} LastName
   * @param {String} Password
   */

  this.fillPersonalInformationFields = (FirstName, LastName, Password) => {
    actions.enterText(this.CustomerFirstNameField, FirstName);
    actions.enterText(this.CustomerLastNameField, LastName);
    actions.clickToElement(this.CustomerEmailField);
    actions.clickToElement(this.CustomerPasswordField);
    actions.enterText(this.CustomerPasswordField, Password);
//    actions.clickToElement(this.NewsletterCheckBox);
//    actions.clickToElement(this.SpecialCheckBox);
  };

  /**
  *@description Function used to validate email address value
  *@method selectBirthdayDate
  * @param {String} day
  * @param {String} month
  * @param {String} year
  */
  this.selectBirthdayDate = (day, month, year) => {
    this.BirthdayDaySelect.$('[value="'+ day +'"]').click();
    this.BirthdayMonthSelect.$('[value="'+ month +'"]').click();
    this.BirthdayYearSelect.$('[value="'+ year +'"]').click();
  };

  /**
  *@description Function used to fill Address Information
  *@method fillAddressInformationFields
  * @param {String} AddFirstName
  * @param {String} AddLastName
  * @param {String} Company
  * @param {String} AddressLineOne
  * @param {String} AddressLineTwo
  * @param {String} City
  * @param {String} State
  * @param {String} PostalCode
  * @param {String} HomePhone
  * @param {String} MobilePhone
  * @param {String} AddressAlias
  */


  this.fillAddressInformationFields = (Company, AddressLineOne, AddressLineTwo, City, State, PostalCode, AddInformation, HomePhone, MobilePhone, AddressAlias) => {
    actions.enterText(this.AddressCompany, Company);
    actions.enterText(this.AddressLineOne, AddressLineOne);
    actions.enterText(this.AddressLineTwo, AddressLineTwo);
    actions.enterText(this.AddressCity, City);
    this.AddressState.$('[value="'+ State +'"]').click();
    actions.enterText(this.AddressPostalCode, PostalCode);
    actions.enterText(this.AddressAdditionalInformation, AddInformation);
    actions.enterText(this.AddressHomePhone, HomePhone);
    actions.enterText(this.AddressMobilePhone, MobilePhone);
    actions.clearElementText(this.AddressAlias);
    actions.enterText(this.AddressAlias, AddressAlias);

  };

  this.clickOnSubmit = () => {
    actions.clickToElement(this.SubmitButton);
  };



}

module.exports = new apCaccount();
