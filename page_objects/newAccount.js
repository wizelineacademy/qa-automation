const actions = require('../base/actions');

/**
 * @description Page Object for Tasks Page.
 */
function NewAccountPage() {
  // Web elements for new account Page

  this.newAccountForm = element(by.id('NewAccountPage'));
  this.genderMrRadio = element(by.css('#uniform-id_gender1'));
  this.firstNameInput = element(by.css('#customer_firstname'));
  this.lastNameInput = element(by.css('#customer_lastname'));
  this.emailInput = element(by.id('email'));
  this.passwordInput = element(by.id('passwd'));
  this.newLetterCheck = element(by.css('#uniform-newsletter'));
  this.specialOffersCheck = element(by.css('#uniform-optin'));
  this.addresCNameInput = element(by.css('#firstname'));
  this.addressCLastNameInput = element(by.id('lastname'));
  this.addressCompanyInput = element(by.id('company'));
  this.addressInput = element(by.css('#address1'));
  this.address2Input = element(by.css('#address2'));
  this.addressCityInput = element(by.css('#city'));
  this.addressCPInput = element(by.id('postcode'));
  this.addressMoreInfoInput = element(by.id('other'));
  this.addressHomePhoneInput = element(by.id('phone'));
  this.addressCelPhoneInput = element(by.id('phone_mobile'));
  this.addressAliasInput = element(by.id('alias'));
  this.dateDaysDrop = element(by.css('#uniform-days'));
  this.dateMonthDrop = element(by.css('#uniform-months'));
  this.dateYearDrop = element(by.css('#uniform-years'));
  this.stateDrop = element(by.css('#uniform-id_state'));
  this.countyDrop = element(by.css('#uniform-id_country'));
  this.createButton = element(by.id('submitAccount'));
  /**
   * @description Function used to validate if an element exist
   * @method createTask
   * @param {String} task
   */
  this.isDisplayed = (element) => {
    return actions.isElementDisplayed(element);
  }
  this.validateNewForm = async(user,defaultAlias) => {
    if(actions.isElementDisplayed(this.emailInput) && actions.isElementDisplayed(this.addressAliasInput)){
      let email = await this.emailInput.getAttribute("value").then((text) => {
        return (text == user) ? true : false;
      });
      let aliasName = await this.addressAliasInput.getAttribute("value").then((text) => {
        return (text == defaultAlias) ? true : false;
      });
      return (email && aliasName) ? true : false;
    }else{
      return false;
    }
  }
  this.validateFilledForm = async(data) => {
    if(actions.isElementDisplayed(this.addresCNameInput) && actions.isElementDisplayed(this.addressCLastNameInput)){
      let name = await this.addresCNameInput.getAttribute("value").then((text) => {
        return (text == data.name) ? true : false;
      });
      let lastName = await this.addressCLastNameInput.getAttribute("value").then((text) => {
        return (text == data.lastName) ? true : false;
      });
      return (name && lastName) ? true : false;
    }
  }
  this.createNewAccount = () => {
    actions.clickToElement(this.createButton);
  }
  this.fillInputs = (data) => {
    let day = Math.floor(Math.random() * 27) + 1 ;
    let month = Math.floor(Math.random() * 11) + 1;
    let year = Math.floor(Math.random() * 50) + 19;
    let state = Math.floor(Math.random() * 50) + 1 ; 
    actions.clickToElement(this.firstNameInput);    
    actions.enterText(this.firstNameInput,data.name);
    actions.clickToElement(this.lastNameInput);
    actions.enterText(this.lastNameInput,data.lastName);
    actions.clickToElement(this.passwordInput);
    actions.enterText(this.passwordInput,data.password);
    actions.clickToElement(this.addressCompanyInput);
    actions.enterText(this.addressCompanyInput,data.company);
    actions.clickToElement(this.addressInput);
    actions.enterText(this.addressInput,data.address);
    actions.clickToElement(this.address2Input);
    actions.enterText(this.address2Input,data.address2);
    actions.clickToElement(this.addressCityInput);
    actions.enterText(this.addressCityInput,data.city);
    actions.clickToElement(this.addressCPInput);
    actions.enterText(this.addressCPInput,data.zip);
    actions.clickToElement(this.addressMoreInfoInput);
    actions.enterText(this.addressMoreInfoInput,data.aInfo);
    actions.clickToElement(this.addressHomePhoneInput);
    actions.enterText(this.addressHomePhoneInput,data.hPhone);
    actions.clickToElement(this.addressCelPhoneInput);
    actions.enterText(this.addressCelPhoneInput,data.cPhone);

    actions.clickToElement(this.newLetterCheck);
    actions.clickToElement(this.specialOffersCheck);
    actions.clickToElement(this.genderMrRadio);
    actions.clickToElement(this.dateDaysDrop);
    actions.selectDropDown(this.dateDaysDrop,day);
    actions.clickToElement(this.dateMonthDrop);
    actions.selectDropDown(this.dateMonthDrop,month);
    actions.clickToElement(this.dateYearDrop);
    actions.selectDropDown(this.dateYearDrop,year);
    actions.clickToElement(this.countyDrop);
    actions.selectDropDown(this.countyDrop,1);
    actions.clickToElement(this.stateDrop);
    actions.selectDropDown(this.stateDrop,state);
  }
}
module.exports = new NewAccountPage();
