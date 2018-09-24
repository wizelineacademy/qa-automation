var actions = require('../base/actions')
/**
 * @description Page Object for Register User.
 */

var registerUser = function() {
  this.Mr = element(by.id('uniform-id_gender1'))
  this.Mrs = element(by.id('uniform-id_gender2'))
  this.firstNameField = element(by.id('customer_firstname'))
  this.lastNameField = element(by.id('customer_lastname'))
  this.emailField = element(by.id('email'))
  this.passwordField = element(by.id('passwd'))
  this.daysDropDown = element(by.id('uniform-days'))
  this.days = element(by.id('days'))
  this.monthsDropDown = element(by.id('uniform-months'))
  this.months = element(by.id('months'))
  this.yearsDropDown = element(by.id('uniform-years'))
  this.year = element(by.id('years'))
  this.newsletterCheck = element(by.css('#uniform-newsletter #newsletter'))
  this.receiveCheck = element(by.css('#uniform-optin #optin'))
  this.companyField = element (by.id('company'))
  this.address1Field = element (by.id('address1'))
  this.address2Field = element (by.id('address2'))
  this.cityField = element(by.id('city'))
  this.stateDropDown = element (by.css('#uniform-id_state'))
  this.state = element (by.id('id_state'))
  this.pcField = element(by.id('postcode'))
  this.countryDropDown = element (by.css('#uniform-id_country'))
  this.country = element(by.id('id_country'))
  this.additionalInfo = element (by.id('other'))
  this.phoneField = element(by.id('phone'))
  this.mobilePhoneField = element (by.id('phone_mobile'))
  this.aliasField = element (by.id('alias'))
  this.submitAccount = element(by.id('submitAccount'))

  this.selectDayOfBirthFromDropdowns = function (day, month, year) {
    actions.clickToElement(this.daysDropDown)
    actions.clickToElement(this.days.element(by.css('option[value="' + day + '"]')))
    actions.clickToElement(this.monthsDropDown)
    actions.clickToElement(this.months.element(by.css('option[value="' + month + '"]')))
    actions.clickToElement(this.yearsDropDown)
    actions.clickToElement(this.year.element(by.css('option[value="' + year + '"]')))
  }

  this.putPersonalInformation = function(personalInformation){
    if (personalInformation.title === 1) {
      actions.clickToElement(this.Mr)
    } else {
      actions.clickToElement(this.Mrs)
    }

    actions.enterText(this.firstNameField, personalInformation.firstName)
    actions.enterText(this.lastNameField, personalInformation.lastName)
    actions.enterText(this.passwordField, personalInformation.password)
    this.selectDayOfBirthFromDropdowns(personalInformation.day,
                                       personalInformation.month,
                                       personalInformation.year)
    if (personalInformation.newsletter) {
      this.newsletterCheck.click()
    }
    if (personalInformation.specialOffers) {
       this.receiveCheck.click()
    }
  }

  this.enterAdress = function(address){
    actions.enterText(this.companyField, address.company)
    actions.enterText(this.address1Field, address.address1)
    actions.enterText(this.address2Field, address.address2)
    actions.enterText(this.cityField, address.city)
    actions.enterText(this.pcField, address.postalCode)
    actions.clickToElement(this.countryDropDown)
    actions.clickToElement(this.country.element(by.css('option[value="21"]')))
    actions.clickToElement(this.stateDropDown)
    actions.clickToElement(this.state.element(by.css('option[value="10"]')))
    actions.enterText(this.additionalInfo, address.other)
    actions.enterText(this.phoneField, address.phone)
    actions.enterText(this.mobilePhoneField, address.mobile)
    actions.enterText(this.aliasField,address.alias)
  }

  this.registerButton = function() {
    actions.clickToElement(this.submitAccount)
  }
}

module.exports = new registerUser();
