const actions = require('../base/actions');

/**
 * @description Page Object for AuthenticationPage.
 */
function AccountCreationPage() {
  this.pageHeadText = element(by.css('.page-heading'));
  this.submitAccountButton = element(by.id('submitAccount'));
  this.errorsList = element(by.css('.alert-danger ol'));
  this.errors = element.all(by.css('.alert-danger ol li'));
  
  this.idGender1RadioField = element(by.id('id_gender1'));
  this.idGender2RadioField = element(by.id('id_gender2'));
  this.customerFirstnameTextField = element(by.id('customer_firstname'));
  this.customerLastnameTextField = element(by.id('customer_lastname'));
  this.emailTextField = element(by.id('email'));
  this.passwdPasswordField = element(by.id('passwd'));
  this.daysSelectField = element(by.id('days'));
  this.monthsSelectField = element(by.id('months'));
  this.yearsSelectField = element(by.id('years'));
  this.newsletterCheckboxField = element(by.id('newsletter'));
  this.optinCheckboxField = element(by.id('optin'));
  this.firstnameTextField = element(by.id('firstname'));
  this.lastnameTextField = element(by.id('lastname'));
  this.companyTextField = element(by.id('company'));
  this.address1TextField = element(by.id('address1'));
  this.address2TextField = element(by.id('address2'));
  this.cityTextField = element(by.id('city'));
  this.idStateSelectField = element(by.id('id_state'));
  this.postcodeTextField = element(by.id('postcode'));
  this.idCountrySelectField = element(by.id('id_country'));
  this.otherTextareaField = element(by.id('other'));
  this.phoneTextField = element(by.id('phone'));
  this.phoneMobileTextField = element(by.id('phone_mobile'));
  this.aliasTextField = element(by.id('alias'));

  /**
   * @description Function used to wait for the register button to show
   * @method submitAccountIsVisible
   */
  this.submitAccountIsVisible = () => actions.isElementDisplayed(this.submitAccountButton);

  /**
   * @description Function used to wait for the error list to show
   * @method hasErrors
   */
  this.hasErrors = () => actions.isElementDisplayed(this.errorsList);

  /**
   * @description Function used fill form data and click save button
   * @method saveForm
   */
  this.saveForm = (data) => {
    const genderElements = [this.idGender1RadioField, this.idGender2RadioField];
    // select in random, Mr. or Mrs. gender
    actions.clickToElement(genderElements[Math.round(Math.random())]);

    actions.clearEnterText(this.customerFirstnameTextField, data['customer_firstname']);
    actions.clearEnterText(this.customerLastnameTextField, data['customer_lastname']);
    actions.clearEnterText(this.emailTextField, data['email']);
    actions.clearEnterText(this.passwdPasswordField, data['passwd']);

    actions.selectOptionByValue(this.daysSelectField, data['days']);
    actions.selectOptionByValue(this.monthsSelectField, data['months']);
    actions.selectOptionByValue(this.yearsSelectField, data['years']);

    // TODO: the "clickToElement" method does not work with these elements (It is never clickable)
    if (data['newsletter']) {
      this.newsletterCheckboxField.click();
    }
    if (data['optin']) {
      this.optinCheckboxField.click();
    }

    actions.clearEnterText(this.firstnameTextField, data['firstname']);
    actions.clearEnterText(this.lastnameTextField, data['lastname']);
    actions.clearEnterText(this.companyTextField, data['company']);
    actions.clearEnterText(this.address1TextField, data['address1']);
    actions.clearEnterText(this.cityTextField, data['city']);
    actions.clearEnterText(this.postcodeTextField, data['postcode']);

    data['id_state'] = data['id_country'] ? data['id_state'] : '';
    actions.selectOptionByValue(this.idCountrySelectField, data['id_country']);
    actions.selectOptionByValue(this.idStateSelectField, data['id_state']);

    data['phone'] = data['phone_mobile'] ? data['phone'] : '';
    data['phone_mobile'] = data['phone'] ? data['phone_mobile'] : '';
    actions.clearEnterText(this.otherTextareaField, data['other']);
    actions.clearEnterText(this.phoneTextField, data['phone']);
    actions.clearEnterText(this.phoneMobileTextField, data['phone_mobile']);
    actions.clearEnterText(this.aliasTextField, data['alias']);

    actions.clickToElement(this.submitAccountButton);
  };
  
}
module.exports = new AccountCreationPage();