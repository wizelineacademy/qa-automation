const actions = require('../base/actions');
const utils = require('../base/utils');
const SelectWrapper = require('../base/selectWrapper');

/**
 * @description Page Object for Account Creation Page.
 */
function AccountCreationPage() {
  // Web elements for Account Creation Page
  this.createAccountLabel = element(by.css('.page-heading'));

  //Web elements for Your Personal Information on Account Creation Page
  this.mrTitleRadioButton = element(by.id('id_gender1'));
  this.mrsTitleRadioButton = element(by.id('id_gender2'));
  this.firstNameTextBox = element(by.id('customer_firstname'));
  this.lastNameTextBox = element(by.id('customer_lastname'));
  this.passwordTextBox = element(by.id('passwd'));
  this.daysDropDown = new SelectWrapper(by.id('days'));
  this.monthsDropDown = new SelectWrapper(by.id('months'));
  this.yearsDropDown = new SelectWrapper(by.id('years'));
  this.newsletterCheckBox = element(by.id('uniform-newsletter'));
  this.optinCheckBox = element(by.id('uniform-optin'));

  //Web elements for Your Address on Account Creation Page
  this.addrFirstNameTextBox = element(by.id('firstname'));
  this.addrLastNameTextBox = element(by.id('lastname'));
  this.addrCompanyTextBox = element(by.id('company'));
  this.addrAddressTextBox = element(by.id('address1'));
  this.addrAddress2TextBox = element(by.id('address2'));
  this.addrCityTextBox = element(by.id('city'));
  this.addrStateDropDown = new SelectWrapper(by.id('id_state'));
  this.addrPostalCodeTextBox = element(by.id('postcode'));
  this.addrCountryDropDown = new SelectWrapper(by.id('id_country'));
  this.addrAdditionalTextArea = element(by.id('other'));
  this.addrHomePhoneTextBox = element(by.id('phone'));
  this.addrMobilePhoneTextBox = element(by.id('phone_mobile'));
  this.addrAliasTextBox = element(by.id('alias'));
  this.addrSubmitButton = element(by.id('submitAccount'));

  /**
   * @description Function used to verify if Create Account Page is displayed
   * @method isCreateAccountPageDisplayed
   */
  this.isCreateAccountPageDisplayed = () => {
    return actions.isElementDisplayed(this.createAccountLabel);
  };

  //Methods for enterint Your Personal Information

  /**
   * @description Function used to enter Customer First Name
   * @method enterFirstName
   * @param {String} firstName
   */
  this.enterFirstName = (firstName) => {
    actions.enterText(this.firstNameTextBox, firstName);
  };
  /**
 * @description Function used to enter Customer Last Name
 * @method enterLastName
 * @param {String} lastName
 */
  this.enterLastName = (lastName) => {
    actions.enterText(this.lastNameTextBox, lastName);
  };

  /**
   * @description Function used to enter Customer Password
   * @method enterPassword
   * @param {String} password
   */
  this.enterPassword = (password) => {
    actions.enterText(this.passwordTextBox, password);
  };

  /**
   * @description Function used to click on Title Radio Button
   * @method clickTitleRadioButton
   * @param {String} title
   */
  this.clickTitleRadioButton = (title) => {

    if (title == "Mr") {
      actions.clickToElement(this.mrTitleRadioButton);
    } 
    if (title == "Mrs"){
      actions.clickToElement(this.mrsTitleRadioButton);
    }
  };
  /**
   * @description Function used to click on NewsLetter Checkbox
   * @method checkSignUpForNewsLetter
   * @param {Boolean} value
   */

  this.checkSignUpForNewsLetter = (value) => {
    if (value) {
      actions.clickToElement(this.newsletterCheckBox);
    }
  };
  /**
   * @description Function used to click on Recieve Offers Checkbox
   * @method checkReceiveOffers 
   * @param {Boolean} value
   */

  this.checkReceiveOffers = (value) => {
    if (value) {
      actions.clickToElement(this.optinCheckBox);
    }
  };


  //Methods for Entering Your Address Information

  /**
   * @description Function used to enter First Name on Address Information
   * @method enterAddrFirstName
   * @param {String} addrFirstName
   */
  this.enterAddrFirstName = (addrFirstName) => {
    actions.enterText(this.addrFirstNameTextBox, addrFirstName);
  };

  /**
   * @description Function used to enter Last Name on Address Information
   * @method enterAddrLastName
   * @param {String} addrLastName
   */
  this.enterAddrLastName = (addrLastName) => {
    actions.enterText(this.addrLastNameTextBox, addrLastName);
  };

  /**
   * @description Function used to enter Company on Address Information
   * @method enterAddrCompany
   * @param {String} addrCompany
   */
  this.enterAddrCompany = (addrCompany) => {
    actions.enterText(this.addrCompanyTextBox, addrCompany);
  };

  /**
 * @description Function used to enter Address on Address Information
 * @method enterAddrAddress
 * @param {String} addrAddress
 */
  this.enterAddrAddress = (addrAddress) => {
    actions.enterText(this.addrAddressTextBox, addrAddress);
  };

  /**
  * @description Function used to enter Address 2 on Address Information
  * @method enterAddrAddress2
  * @param {String} addrAddress2
  */
  this.enterAddrAddress2 = (addrAddress2) => {
    actions.enterText(this.addrAddress2TextBox, addrAddress2);
  };

  /**
   * @description Function used to enter City on Address Information
   * @method enterAddrCity
   * @param {String} addrCity
   */
  this.enterAddrCity = (addrCity) => {
    actions.enterText(this.addrCityTextBox, addrCity);
  };

  /**
  * @description Function used to enter PostalCode on Address Information
  * @method enterAddrPostalCode
  * @param {String} addrPostalCode
  */
  this.enterAddrPostalCode = (addrPostalCode) => {
    actions.enterText(this.addrPostalCodeTextBox, addrPostalCode);
  };

  /**
   * @description Function used to enter Additional Information on Address Information
   * @method enterAddrAdditional
   * @param {String} addrAdditional
   */
  this.enterAddrAdditional = (addrAdditional) => {
    actions.enterText(this.addrAdditionalTextArea, addrAdditional);
  };

  /**
   * @description Function used to enter Home Phone on Address Information
   * @method enterAddrHomePhone
   * @param {String} addrHomePhone
   */
  this.enterAddrHomePhone = (addrHomePhone) => {
    actions.enterText(this.addrHomePhoneTextBox, addrHomePhone);
  };

  /**
   * @description Function used to enter Mobile Phone on Address Information
   * @method enterAddrMobilPhone
   * @param {String} addrMobilePhone
   */
  this.enterAddrMobilePhone = (addrMobilePhone) => {
    actions.enterText(this.addrMobilePhoneTextBox, addrMobilePhone);
  };

  /**
 * @description Function used to enter Alias on Address Information
 * @method enterAddrAlias
 * @param {String} addrAlias
 */
  this.enterAddrAlias = (addrAlias) => {
    actions.enterText(this.addrAliasTextBox, addrAlias);
  };
  /**
   * @description Function used to Select an Element from Dropdown by Index
   * @method selectElementFromDropdownByIndex
   * @param {String} element 
   * @param {int} index
   */

  this.selectElementFromDropdownByIndex = (element, index) => {
    element.selectByValue(index);
  };

  /**
   * @description Function used to Select an Element from Dropdown by Text
   * @method selectElementFromDropdownByText
   * @param {String} element
   * @param {String} value
   */

  this.selectElementFromDropdownByText = (element, value) => {
    element.selectByText(value);
  };


  /**
  * @description Function used to Click on Submit Button for Account Creation
  * @method clickSubmitButton
  * 
  */
  this.clickSubmitButton = () => {
    actions.clickToElement(this.addrSubmitButton);
  };






}
module.exports = new AccountCreationPage();