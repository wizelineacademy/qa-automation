const actions = require('../base/actions');

/**
 * @description Page Object for Account Creation Form Page.
 */
function AccountCreationPage() {
  // Web elements for Login
  this.createAccountForm = element(by.id('account-creation_form'));
  this.titleMrRadioButton = element(by.id('id_gender1'));
  this.titleMrsRadioButton = element(by.id('id_gender2'));
  this.firstNameTextfield = element(by.id('customer_firstname'));
  this.lastNameTextfield = element(by.id('customer_lastname'));
  this.emailTextField = element(by.id('email'));
  this.passwordTextField = element(by.id('passwd'));
  this.dobDayOption = element(by.id('uniform-days'));
  this.dobMonthOption = element(by.id('uniform-months'));
  this.dobYearOption = element(by.id('uniform-years'));
  this.newsletterCheckbox = element(by.id('uniform-newsletter'));
  this.optInCheckbox = element(by.id('uniform-optin'));
  this.companyTextField = element(by.id('company'));
  this.address1TextField = element(by.id('address1'));
  this.address2TextField = element(by.id('address2'));
  this.cityTextField = element(by.id('city'));
  this.stateOption = element(by.id('uniform-id_state'));
  this.zipcodeTextField = element(by.id('postcode'));
  this.countryOption = element(by.id('uniform-id_country'));
  this.additionalInfoTextArea = element(by.id('other'));
  this.phoneTextField = element(by.id('phone'));
  this.mobilePhoneTextField = element(by.id('phone_mobile'));
  this.addressAliasTextField = element(by.id('alias'));
  this.submitAccountButton = element(by.id('submitAccount'));
  this.myAccountLink = element(by.css('.account'));

  /**
   * @description Function used to know if the Account Creation Form is displayed
   * @method isCreateAccountFormDisplayed
   */
  this.isCreateAccountFormDisplayed = () => {
    return actions.isElementDisplayed(this.createAccountForm);
  };

  /**
   * @description Function used to check the data received for Title and define whiche element should be selected in the form
   * @method verifyWhichTitle
   */
  this.verifyWhichTitle = (title) => {
    switch (title)
    {
      case 'Mr':
          title = this.titleMrRadioButton;
          break;
      case 'Mrs':
          title = this.titleMrsRadioButton;
          break;
    }
    return title;

  };

  /**
   * @description Function to Verify that the preloaded data is matching the original that user entered previosuly
   * @method isPreloadedDataMatching
   */
  this.isPreloadedDataMatching = (elem,originalData,attribute) => {
    var preloadedData = actions.getElementAttributeValue(elem,attribute);
    expect(preloadedData).toEqual(originalData);
  };

  /**
   * @description Function to verify that user is logged in
   * @method isUserLoggedIn
   */
  this.isUserLoggedIn = (userName) => {
    var userNameDisplayed = actions.getElementText(this.myAccountLink);
    expect(userNameDisplayed).toEqual(userName);
  };

  /**
   * @description Function to select the Date of Birth
   * @method enterDateOfBirth
   */
  this.enterDateOfBirth = (Day,Month,Year) => {
    actions.selectOptionFromDropdown(this.dobDayOption,Day);
    actions.selectOptionFromDropdown(this.dobMonthOption,Month);
    actions.selectOptionFromDropdown(this.dobYearOption,Year);
  };

  /**
   * @description Function used to fill out the Account Creation Form
   * @method fillOutAccountCreationForm
   */
  this.fillOutAccountCreationForm = (
                                      title,
                                      firstName,
                                      lastName,
                                      email,
                                      pass,
                                      dobDay,
                                      dobMonth,
                                      dobYear,
                                      newsletterCheckboxValue,
                                      optInCheckboxValue,
                                      company,
                                      addressLine1,
                                      addressLine2,
                                      city,
                                      state,
                                      zipCode,
                                      country,
                                      additionalInfo,
                                      homePhone,
                                      mobilePhone,
                                      addressAlias
                                    ) => {
    actions.clickElement(this.verifyWhichTitle(title));
    actions.enterText(this.firstNameTextfield,firstName);
    actions.enterText(this.lastNameTextfield,lastName);
    this.isPreloadedDataMatching(this.emailTextField,email,'value');
    actions.enterText(this.passwordTextField,pass);
    this.enterDateOfBirth(dobDay,dobMonth,dobYear);
    actions.selectCheckbox(this.newsletterCheckbox,newsletterCheckboxValue);
    actions.selectCheckbox(this.optInCheckbox,optInCheckboxValue);
    this.isPreloadedDataMatching(this.firstNameTextfield,firstName,'value');
    this.isPreloadedDataMatching(this.lastNameTextfield,lastName,'value');
    actions.enterText(this.companyTextField,company);
    actions.enterText(this.address1TextField,addressLine1);
    actions.enterText(this.address2TextField,addressLine2);
    actions.enterText(this.cityTextField,city);
    actions.selectOptionFromDropdown(this.stateOption,state);
    actions.enterText(this.zipcodeTextField,zipCode);
    actions.selectOptionFromDropdown(this.countryOption,country);
    actions.enterText(this.additionalInfoTextArea,additionalInfo);
    actions.enterText(this.phoneTextField,homePhone);
    actions.enterText(this.mobilePhoneTextField,mobilePhone);
    actions.clearElementText(this.addressAliasTextField);
    actions.enterText(this.addressAliasTextField,addressAlias);
    actions.clickElement(this.submitAccountButton);
  };
}
module.exports = new AccountCreationPage();
