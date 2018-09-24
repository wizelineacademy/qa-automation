const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.signInBtn = element(by.xpath('/html[1]/body[1]/div[1]/div[1]/header[1]/div[2]/div[1]/div[1]/nav[1]/div[1]/a[1]'));
  this.createAnAccountBtn = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]/span[1]'));
  this.emailTextField = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/input[1]'));
  this.gender = element(by.xpath('//*[@id="id_gender1"]'));
  this.firstName = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/input[1]'));
  this.lastName = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[3]/input[1]'));
  this.emailForm = element(by.xpath('//*[@id="email"]'));
  this.passwordTextField = element(by.xpath('//*[@id="passwd"]'));
  this.dropDownDay = element(by.id('uniform-days'));
  this.selectDay = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/div[1]/div[1]/select[1]/option[15]'));
  this.dropDownMonth = element(by.id('uniform-months'));
  this.selectMonth = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/div[2]/div[1]/select[1]/option[5]'));
  this.dropDownYear = element(by.id('uniform-years'));
  this.selectYear = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/div[3]/div[1]/select[1]/option[30]'));
  this.specialOffers = element(by.id('uniform-optin'));
  this.addressFirstName = element(by.xpath('//*[@id="firstname"]'));
  this.addressLastName = element(by.xpath('//*[@id="lastname"]'));
  this.addressCompanyName = element(by.xpath('//*[@id="company"]'));
  this.address = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[2]/p[4]/input[1]'));
  this.addressSecondLine = element(by.xpath('//*[@id="address2"]'));
  this.addressCity = element(by.xpath('//*[@id="city"]'));
  this.dropDownState = element(by.id('uniform-id_state'));
  this.dropDownSelectState = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[2]/p[7]/div[1]/select[1]/option[34]'));
  this.addressZipCode = element(by.xpath('//*[@id="postcode"]'));
  this.dropDownCountry = element(by.id('uniform-id_country'));
  this.dropDownSelectCountry = element(by.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[2]/p[9]/div[1]/select[1]/option[2]'));
  this.additionalComments = element(by.xpath('//*[@id="other"]'));
  this.homePhone = element(by.xpath('//*[@id="phone"]'));
  this.mobilePhone = element(by.xpath('//*[@id="phone_mobile"]'));
  this.addressAlias = element(by.xpath('//*[@id="alias"]'));
  this.registerBtn = element(by.xpath('//*[@id="submitAccount"]/span'));

  this.negativeTest = (email, pass) => {
    actions.clickToElement(this.signInBtn);
    actions.clickToElement(this.createAnAccountBtn);
  };
  
  /**
   * @description Function used to enter credentials for Login then click on Login Button
   * @method positiveTest
   * @param {String} email
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} emailForm
   * @param {String} pass
   * @param {String} addressFirstName
   * @param {String} addressLastName
   * @param {String} addressCompanyName
   * @param {String} address
   * @param {String} addressSecondLine
   * @param {String} addressCity
   * @param {String} addressZipCode
   * @param {String} additionalComments
   * @param {String} homePhone
   * @param {String} mobilePhone
   * @param {String} addressAlias
   */
  this.positiveTest = (email, firstName, lastName, emailForm, pass, addressFirstName, addressLastName, addressCompanyName, address, addressSecondLine, addressCity, addressZipCode, additionalComments, homePhone, mobilePhone, addressAlias) => {
    actions.clickToElement(this.signInBtn);
    actions.clearElementText(this.emailTextField);
    actions.enterText(this.emailTextField, email);
    actions.highlightElement(this.emailTextField);
    actions.clickToElement(this.createAnAccountBtn);
    actions.clickToElement(this.gender);
    actions.clearElementText(this.firstName);
    actions.enterText(this.firstName, firstName);
    actions.highlightElement(this.firstName);
    actions.clearElementText(this.lastName);
    actions.enterText(this.lastName, lastName);
    actions.highlightElement(this.lastName);
    actions.clearElementText(this.emailForm);
    actions.enterText(this.emailForm, emailForm);
    actions.highlightElement(this.emailForm);
    actions.clearElementText(this.passwordTextField);
    actions.enterText(this.passwordTextField, pass);
    actions.highlightElement(this.passwordTextField);
    actions.clickToElement(this.dropDownDay);
    actions.clickToElement(this.selectDay);
    actions.highlightElement(this.selectDay);
    actions.clickToElement(this.dropDownMonth);
    actions.clickToElement(this.selectMonth);
    actions.highlightElement(this.selectMonth);
    actions.clickToElement(this.dropDownYear);
    actions.clickToElement(this.selectYear);
    actions.highlightElement(this.selectYear);
    actions.clickToElement(this.specialOffers);
    actions.clearElementText(this.addressFirstName);
    actions.enterText(this.addressFirstName, addressFirstName);
    actions.highlightElement(this.addressFirstName);
    actions.clearElementText(this.addressLastName);
    actions.enterText(this.addressLastName, addressLastName);
    actions.highlightElement(this.addressLastName);
    actions.clearElementText(this.addressCompanyName);
    actions.enterText(this.addressCompanyName, addressCompanyName);
    actions.highlightElement(this.addressCompanyName);
    actions.clearElementText(this.address);
    actions.enterText(this.address, address);
    actions.highlightElement(this.address);
    actions.clearElementText(this.addressSecondLine);
    actions.enterText(this.addressSecondLine, addressSecondLine);
    actions.highlightElement(this.addressSecondLine);
    actions.clearElementText(this.addressCity, addressCity);
    actions.enterText(this.addressCity, addressCity);
    actions.highlightElement(this.addressCity);
    actions.clickToElement(this.dropDownState);
    actions.clickToElement(this.dropDownSelectState);
    actions.clearElementText(this.addressZipCode);
    actions.enterText(this.addressZipCode, addressZipCode);
    actions.highlightElement(this.addressZipCode);
    actions.clickToElement(this.dropDownCountry);
    actions.clickToElement(this.dropDownSelectCountry);
    actions.clearElementText(this.additionalComments);
    actions.enterText(this.additionalComments, additionalComments);
    actions.highlightElement(this.additionalComments);
    actions.clearElementText(this.homePhone);
    actions.enterText(this.homePhone, homePhone);
    actions.highlightElement(this.homePhone);
    actions.clearElementText(this.mobilePhone);
    actions.enterText(this.mobilePhone, mobilePhone);
    actions.highlightElement(this.mobilePhone);
    actions.clearElementText(this.addressAlias);
    actions.enterText(this.addressAlias, addressAlias);
    actions.highlightElement(this.addressAlias);
    actions.clickToElement(this.registerBtn);
  };
  
}
module.exports = new LoginPage();
