const actions = require('../base/actions');

/**
 * @description Page Object for Create an Account page from Automation practice webapp
 */
function CreateAccountPage() {

    //Page WebElements
    this.pageTitle = element(by.css('h1'));
    this.mrTitle = element(by.id('id_gender1'));
    this.mrsTitle = element(by.id('id_gender2'));
    this.customerFirstNameTextField = element(by.id('customer_firstname'));
    this.customerLastNameTextField = element(by.id('customer_lastname'));
    this.passwordTextField = element(by.id('passwd'));
    this.daysDropDown = element(by.id('days'));
    this.monthDropDown = element(by.id('months'));
    this.yearDropDown = element(by.id('years'));
    this.checkboxs = element.all(by.xpath('//input[@type="checkbox"]'));
    this.firstNameTextField = element(by.id('firstname'));
    this.lastNameTextField = element(by.id('lastname'));
    this.companyTextField = element(by.id('company'));
    this.addressTextField = element(by.id('address1'));
    this.cityTextField = element(by.id('city'));
    this.stateDropDown = element(by.id('id_state'));
    this.postalCodeTextField = element(by.id('postcode'));
    this.countryDropDown = element(by.id('id_country'));
    this.additionalInformationTextField = element(by.id('other'));
    this.homePhoneTextField = element(by.id('phone'));
    this.mobilePhoneTextField = element(by.id('phone_mobile'));
    this.registerButton = element(by.id('submitAccount'));

    /**
     * @description Get the page title text
     * @return h1 page title
     */
    this.getPageTitle = () => {
        return actions.getElementText(this.pageTitle);
    };

    /**
     * @description randomly click on a Title radio button
     */
    this.chooseGenderTitle = (formFields) => {
        if (formFields.flip === true) {
            this.mrTitle.click();
        }
        this.mrsTitle.click();
    };

    /**
     * @description Fill the Personal information section from Create Account section
     */
    this.fillPesonalInformationSection= (formFields) => {
        actions.enterText(this.customerFirstNameTextField, formFields.name);
        actions.enterText(this.customerLastNameTextField, formFields.lastName);
        actions.enterText(this.passwordTextField, formFields.psw);
        this.daysDropDown.sendKeys(formFields.day);
        this.monthDropDown.sendKeys(formFields.month);
        this.yearDropDown.sendKeys(formFields.year);
        this.checkboxs.get(1).click();
    };

    /**
     * @description Fill the Address section from Create Account page
     */
    this.fillYourAddressSection = (formFields) => {
        browser.sleep(2000);
        this.firstNameTextField.clear();
        actions.enterText(this.firstNameTextField, formFields.name);
        this.lastNameTextField.clear();
        actions.enterText(this.lastNameTextField, formFields.lastName);
        actions.enterText(this.companyTextField, formFields.company);
        this.countryDropDown.sendKeys(formFields.country);
        actions.enterText(this.addressTextField, formFields.address);
        actions.enterText(this.cityTextField, formFields.city);
        this.stateDropDown.sendKeys(formFields.state);
        actions.enterText(this.postalCodeTextField, formFields.pCode);
        actions.enterText(this.additionalInformationTextField, formFields.additionalInfo);
        actions.enterText(this.homePhoneTextField, formFields.homePhone);
        actions.enterText(this.mobilePhoneTextField, formFields.mobilePhone);
        actions.enterText(this.passwordTextField, formFields.psw);
    };

    /**
     * @description click on Regiister Button
     */
    this.registerForm = () => {

        this.registerButton.click();
        browser.sleep(3000)
    };

}
module.exports = new CreateAccountPage();