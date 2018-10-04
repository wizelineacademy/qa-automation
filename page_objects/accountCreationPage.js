const actions = require('../base/actions');
var casual = require('casual');

/**
 * @description Page Object for Account Creation Page.
 */
function AccountCreationPage() {
    //WebElements
    this.mrTitle = element(by.id('uniform-id_gender1'));
    this.mrsTitle = element(by.id('uniform-id_gender2'));
    this.firstNameTextInput = element(by.id('customer_firstname'))
    this.lastNameTextInput = element(by.id('customer_lastname'));
    this.passwordTextInput = element(by.id('passwd'));
    this.birthDaysSelect = element(by.id('days'));
    this.birthMonthSelect = element(by.id('months'));
    this.birthYearSelect = element(by.id('years'));
    this.newsLetterChecker = element(by.id('uniform-newsletter'));
    this.specialOfferChecker = element(by.id('uniform-optin'));
    this.companyTextInput = element(by.id('company'));
    this.addressTextInput = element(by.id('address1'));
    this.address2TextInput = element(by.id('address2'));
    this.cityTextInput = element(by.id('city'));
    this.stateSelect = element(by.id('id_state'));
    this.postCodeTextInput = element(by.id('postcode'));
    this.countrySelect = element(by.id('id_country'));
    this.aditionalInfoTextArea = element(by.id('other'));
    this.phoneTextInput = element(by.id('phone'));
    this.mobileTextInput = element(by.id('phone_mobile'));
    this.aliasTextInput = element(by.id('alias'));
    this.submitAccountButton = element(by.id('submitAccount'));

    this.fillPersonalInformation = () => {
        actions.clickToElement(this.mrTitle);
        actions.enterText(this.firstNameTextInput,casual.first_name);
        actions.enterText(this.lastNameTextInput,casual.last_name);
        actions.enterText(this.passwordTextInput,casual.password);
        actions.selectByValue(this.birthDaysSelect,casual.day_of_month);
        actions.selectByValue(this.birthMonthSelect,casual.month_number);
        actions.selectByValue(this.birthYearSelect,casual.year);
        actions.clickToElement(this.newsLetterChecker);
        actions.clickToElement(this.specialOfferChecker);
    };

    this.fillAddress = () => {
        actions.enterText(this.companyTextInput,casual.company_name);
        actions.enterText(this.addressTextInput,casual.address1);
        actions.enterText(this.address2TextInput,casual.address2);
        actions.enterText(this.cityTextInput,casual.city);
        actions.selectByValue(this.stateSelect,String(casual.integer(from = 1, to = 50)));
        actions.enterText(this.postCodeTextInput,String(casual.integer(from = 10000, to = 99999)));
        actions.selectByValue(this.countrySelect,"21");
        actions.enterText(this.aditionalInfoTextArea,casual.description);
        actions.enterText(this.phoneTextInput,casual.phone);
        actions.enterText(this.mobileTextInput,casual.phone);
        actions.enterText(this.aliasTextInput,casual.word);
    };

    this.clickSubmitAccount = () =>{
        actions.clickToElement(this.submitAccountButton);
    };

}

module.exports = new AccountCreationPage();