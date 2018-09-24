const util = require('../base/actions');

function newAccountPage(){
  //webElements
  this.newAccountEmailTextField = element(by.css("#email_create"));
  this.titleRadioButton = element(by.css("#id_gender1"));
  this.fNameTextField = element(by.css("#customer_firstname"));
  this.lNameTexField = element(by.css("#customer_lastname"));
  this.daysDropdown = element(by.css("#days option:nth-child(3)"));
  this.monthsDropdown = element(by.css("#months option:nth-child(5)"));
  this.yearsDropdown = element(by.css("#years option:nth-child(29)"));
  this.AFNameTextField = element(by.css("#firstname"));
  this.AFLastNameTextField = element(by.css("#lastname"));
  this.addressTextField = element(by.css("#address1"));
  this.cityTextField = element(by.css("#city"));
  this.stateTextField = element(by.css("#id_state option:nth-child(9)"));
  this.zipCodeTextField = element(by.css("#postcode"));
  this.mobilePhoneTextField = element(by.css("#phone_mobile"));
  this.submitAccount = element(by.css("#submitAccount"));
  this.accountName = element(by.css(".account"));

  this.createNewAccount = () => {
    util.writeText(this.newAccountEmailTextField, util.getMail());
    util.clickButton(this.createAccountButton);
    util.clickElement(this.titleRadioButton);
    util.writeText(this.fNameTextField,"carlos");
    util.writeText(this.lNameTexField,"becerra");
    util.writeText(this.passwordTextField,"wizeline123");
    util.clickButton(this.daysDropdown);
    util.clickButton(this.monthsDropdown);
    util.clickButton(this.yearsDropdown);
    util.writeText(this.companyTextField,"my own");
    util.writeText(this.addressTextField,"main st23");
    util.writeText(this.cityTextField,"Zapopan");
    util.clickButton(this.stateTextField);
    util.writeText(this.zipCodeTextField,"89001");
    util.writeText(this.mobilePhoneTextField,"3312345678");
    util.clickButton(this.submitAccount);
  }

  this.isAccountSuccessfullyCreated = () =>{
    return util.elementVisible(this.accountName);
  }

}//endNewaccountPage
module.exports = new newAccountPage();
