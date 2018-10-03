const actions = require('../base/actions');

/**
 * @description Page Object for Tasks Page.
 */
function AccountPage() {
  // Web elements for Tasks Page


  this.emailField = element(by.id('email_create'));
  this.emailCreateAccountSubmitButton = element(by.id('SubmitCreate'));
  this.errorMessageAlert = element(by.id('create_account_error'));
  this.myAccount = element(by.id('my-account'));
  this.accountForm = element(by.id('account-creation_form'));
  this.firstNameField = element(by.id('customer_firstname'));
  this.lastNameField = element(by.id('customer_lastname'));
  this.addressField = element(by.id('address1'));
  this.postcodeField = element(by.id('postcode'));
  this.phoneFieldNumber = element(by.id('phone_mobile'));
  this.aliasField = element(by.id('alias'));
  this.passwordField = element(by.id('passwd'));
  this.cityField = element(by.id('city'));
  this.FormSelectors = element(by.cssContainingText('option', 'Alaska'));
  this.RegisterButton = element(by.id('submitAccount'));
  this.StateSelect = element(by.id('id_state'));


this.genderRadio= element(by.id('id_gender1'));
this.daysSelect= element(by.id('days'));
this.monthsSelect= element(by.id('months'));
this.yearsSelect= element(by.id('years'));
this.companySelect= element(by.id('company'));
this.otherField= element(by.id('other'));
this.phoneField= element(by.id('phone'));

this.newsCheck= element(by.id('newsletter'));
this.optinCheck= element(by.id('optin'));








/*

  this.agendaView = element(by.id('agenda_view'));
  this.addTaskLink = element(by.css('.agenda_add_task a'));
  this.taskInput = element(by.css('.sel_richtext_editor'));
  this.submitButton = element(by.css('.submit_btn'));
  this.tasksList = element.all(by.css('.text.sel_item_content'));
  this.taskMenuList = element.all(by.css('.task_item td.menu'));
  this.deleteTaskOption = element(by.xpath('//div[contains(@class, "ist_menu") and not(contains(@style,"display: none;"))]//td[contains(@data-track,"task|more_delete")]'));
  this.deleteButton = element(by.css('.ist_button_red'));
  this.loading = element(by.id('loading'));
*/



/**
 * @description Function used to send empty email Account
 * @method emptyAccount
 * @param {String} email
 */
this.emptyAccount = (email) => {


  actions.enterText(this.emailField,email);
  actions.clickToElement(this.emailCreateAccountSubmitButton);
};


/**
 * @description Function used to get an random mail account
 * @method createRandomAccount
 * @param {String}
 */
this.createRandomAccount = (accountFormData) => {

  actions.enterText(this.emailField,actions.createRandomMail());
  actions.clickToElement(this.emailCreateAccountSubmitButton);
  actions.isElementDisplayed(this.accountForm);
  actions.enterText(this.passwordField,accountFormData.password);
  actions.enterText(this.firstNameField,accountFormData.firstname);
  actions.enterText(this.lastNameField,accountFormData.lastname);
  actions.enterText(this.addressField,accountFormData.addr);
  actions.enterText(this.postcodeField,accountFormData.pcode);
  actions.enterText(this.cityField,accountFormData.city);
  actions.selectOption(this.StateSelect,accountFormData.state);

//actions.selectOption(this.genderRadio,accountFormData.gender);


actions.enterText(this.companySelect,accountFormData.company);
actions.enterText(this.otherField,accountFormData.other);
actions.enterText(this.phoneField,accountFormData.phone);
actions.enterText(this.phoneFieldNumber,accountFormData.mobile);
actions.enterText(this.aliasField,Math.random().toString(36).substring(2, 10));


  actions.selectOption(this.daysSelect,accountFormData.day);
  actions.selectOption(this.monthsSelect,accountFormData.months);
  actions.selectOption(this.yearsSelect,accountFormData.years);

actions.selectCheck('.radio-inline',accountFormData.gender);
//  actions.setCheckBoxTo(this.genderRadio,'1');
 //actions.setCheckBoxTo(this.newsCheck,'1');
//  actions.clickToElement(this.optinCheck);


  actions.clickToElement(this.RegisterButton);





};


//Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


/**
 * @description Function used to know if there is an error message
 * @method isErrorAccountAlertDispleyed
 */
this.isErrorAccountAlertDispleyed = () => {
  return actions.isElementDisplayed(this.errorMessageAlert);
};
/**
 * @description Function used to know if there is an error message
 * @method isMyAccountDisplayed
 */
this.isMyAccountDisplayed = () => {
  return actions.isElementDisplayed(this.myAccount);
};













}// ends AccountPage
module.exports = new AccountPage();
