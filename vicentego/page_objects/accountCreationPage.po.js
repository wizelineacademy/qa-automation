const homePage = require('../page_objects/homePage.po');
const authPage = require('../page_objects/authenticationPage.po');
const actions = require('../base/actions');
const data = require('../test_data/account.data');
const util = require('../base/util');

function AccountCreationPage() {
    this.accountCreationForm = element(by.id('account-creation_form'));

    this.genderMrRadiobutton = element(by.id('id_gender1'));
    this.genderMrsRadiobutton = element(by.id('id_gender2'));
    this.firstNameText = element(by.id('customer_firstname'));
    this.lastNameText = element(by.id('customer_lastname'));
    this.emailText = element(by.id('email'));
    this.passwordText = element(by.id('passwd'));
    this.dayDropdownbox = element(by.id('uniform-days'));
    this.dayOptions = element.all(by.css('div#uniform-days option'));
    this.monthDropdownbox = element(by.id('uniform-months'));
    this.monthOptions = element.all(by.css('div#uniform-months option'));
    this.yearDropdownbox = element(by.id('uniform-years'));
    this.yearOptions = element.all(by.css('div#uniform-years option'));
    this.newsletterCheckbox = element(by.id('uniform-newsletter'));
    this.specialOffersCheckbox = element(by.id('uniform-optin'));

    this.addressFirstNameText = element(by.css('input#firstname'));
    this.addressLastNameText = element(by.css('input#lastname'));
    this.addressCompanyText = element(by.id('company'));
    this.addressLine1Text = element(by.id('address1'));
    this.addressLine2Text = element(by.id('address2'));
    this.cityText = element(by.id('city'));
    this.stateDropdownbox = element(by.id('uniform-id_state'));
    this.stateOptions = element.all(by.css('div#uniform-id_state option'));
    this.zipText = element(by.id('postcode'));
    this.countryDropdownbox = element(by.id('uniform-id_country'));
    this.countryOptions = element.all(by.css('div#uniform-id_country option'));
    this.additionalInformationText = element(by.id('other'));
    this.homePhoneText = element(by.id('phone'));
    this.mobilePhoneText = element(by.id('phone_mobile'));
    this.addressAliasText = element(by.id('alias'));

    this.registerButton = element(by.id('submitAccount'));

    this.isNewAccountRegistered = () => {
        homePage.openAuthenticationPage();
        authPage.openCreateAccountForm();
        this.fillingUpPersonalInformation();       
        this.fillingUpAddress();
        actions.clickToElement(this.registerButton);        
        return homePage.isSignOutButtonDisplayed();
    };

    this.fillingUpPersonalInformation = () => {
        var gender = data.gender == 'Mr.' ? this.genderMrRadiobutton : this.genderMrsRadiobutton;
        actions.clickToElement(gender);
        actions.enterText(this.firstNameText,data.firstname);
        actions.enterText(this.lastNameText,data.lastname);
        actions.clearElementText(this.emailText);
        actions.enterText(this.emailText,util.getEmailRandomly());
        actions.enterText(this.passwordText,data.password);
        actions.clickToElement(this.dayDropdownbox);
        actions.clickToElement(this.dayOptions.get(data.day));
        actions.clickToElement(this.monthDropdownbox);
        actions.clickToElement(this.monthOptions.get(data.month));
        actions.clickToElement(this.newsletterCheckbox);
        var yearIndex = (2018 - data.year) + 1;
        actions.clickToElement(this.yearDropdownbox);
        actions.clickToElement(this.yearOptions.get(yearIndex));
        actions.clickToElement(this.specialOffersCheckbox);
    };

    this.fillingUpAddress = () => {
        actions.clearElementText(this.addressFirstNameText);
        actions.enterText(this.addressFirstNameText,data.addressFirstName);
        actions.clearElementText(this.addressLastNameText);
        actions.enterText(this.addressLastNameText,data.addressLastName);
        actions.enterText(this.addressCompanyText,data.addressCompany);
        actions.enterText(this.addressLine1Text,data.addressLine1);
        actions.enterText(this.addressLine2Text,data.addressLine2);
        actions.enterText(this.cityText,data.city);
        actions.clickToElement(this.stateDropdownbox);
        actions.clickToElement(this.stateOptions.get(1));
        actions.enterText(this.zipText,data.zip);
        actions.clickToElement(this.countryDropdownbox);
        actions.clickToElement(this.countryOptions.get(1));
        actions.enterText(this.additionalInformationText,data.additionalInformation);
        actions.enterText(this.homePhoneText,data.homePhone);
        actions.enterText(this.mobilePhoneText,data.mobilePhone);
        actions.clearElementText(this.addressAliasText);
        actions.enterText(this.addressAliasText,data.addressAlias);
    };

}
module.exports = new AccountCreationPage();