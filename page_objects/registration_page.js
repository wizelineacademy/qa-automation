var actions = require('../base/actions')

var RegistrationPage = function() {

  this.titleMr = element(by.id('uniform-id_gender1'))
  this.titleMrs = element(by.id('uniform-id_gender2'))
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
  this.newsLetterCheck = element(by.css('#uniform-newsletter #newsletter'))
  this.receiveOffersCheck = element(by.css('#uniform-optin #optin'))

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


  this.enterPersonalInfo = function(personalInfo){
    if (personalInfo.title === 1) {
      actions.clickToElement(this.titleMr)
    } else {
      actions.clickToElement(this.titleMrs)
    }

    actions.enterText(this.firstNameField, personalInfo.firstName)
    actions.enterText(this.lastNameField, personalInfo.lastName)
    actions.enterText(this.passwordField, personalInfo.password)
    this.selectDayOfBirthFromDropdowns(personalInfo.day, personalInfo.month, personalInfo.year)

    if (personalInfo.newsLetter) {
      this.newsLetterCheck.click()
    }
    if (personalInfo.specialOffers) {
       this.receiveOffersCheck.click()
    }
  }

  this.enterAdressInfo = function(addressInfo){
    actions.enterText(this.companyField, addressInfo.company)
    actions.enterText(this.address1Field, addressInfo.address1)
    actions.enterText(this.address2Field, addressInfo.address2)
    actions.enterText(this.cityField, addressInfo.city)
    actions.enterText(this.pcField, addressInfo.postalCode)

    actions.clickToElement(this.countryDropDown)
    actions.clickToElement(this.country.element(by.css('option[value="21"]')))
    actions.clickToElement(this.stateDropDown)
    actions.clickToElement(this.state.element(by.css('option[value="10"]')))

    actions.enterText(this.additionalInfo, addressInfo.other)
    actions.enterText(this.phoneField, addressInfo.phone)
    actions.enterText(this.mobilePhoneField, addressInfo.mobile)
    actions.enterText(this.aliasField,addressInfo.alias)
  }

  this.clickSubmit = function() {
    actions.clickToElement(this.submitAccount)
  }

}

module.exports = new RegistrationPage();
