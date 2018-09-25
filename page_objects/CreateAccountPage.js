const actions = require('../base/actions');
const data = require('../test_data/data');

function CreateAccountPage() {

    this.signInLabel = element(by.css('.login'));
    this.contactUs = element(by.id('contact-link'));
    this.authenticationLabel = element(by.css('.navigation_page'));
    this.createAnAccountHeader = element(by.css('.page-heading'));

    this.yourPersonalInformationSubHeader = element(by.css('.page-subheading'));
    this.personalInformationForm = element(by.id('account-creation_form'));
    this.accountCreationDivs = this.personalInformationForm.all(by.css('.account_creation'));
    this.personalInformation = this.accountCreationDivs.get(0);
    this.accountCreationTitleDiv = this.personalInformation.element(by.css('.clearfix'));

    this.titleLabel = this.accountCreationTitleDiv.element(by.tagName('label'));
    this.genderLabels = this.accountCreationTitleDiv.all(by.css('.radio-inline'));
    this.mrLabel = this.genderLabels.get(0).element(by.tagName('label'));
    this.mrsLabel = this.genderLabels.get(1).element(by.tagName('label'));
    this.radioChoiceMr = this.accountCreationTitleDiv.element(by.id('uniform-id_gender1'));
    this.radioChoiceMrs = this.accountCreationTitleDiv.element(by.id('uniform-id_gender2'));

    this.requiredFormGroup = this.personalInformation.all(by.css('.required.form-group'));

    this.firstNameGroup = this.requiredFormGroup.get(0);
    this.firstNameLabel = this.firstNameGroup.element(by.tagName('label'));
    this.firstNameTextField = this.firstNameGroup.element(by.tagName('input'));

    this.lastNameGroup = this.requiredFormGroup.get(1);
    this.lastNameLabel = this.lastNameGroup.element(by.tagName('label'));
    this.lastNameTextField = this.lastNameGroup.element(by.tagName('input'));

    this.emailGroup = this.requiredFormGroup.get(2);
    this.emailLabel = this.emailGroup.element(by.tagName('label'));
    this.emailNameTextField = this.emailGroup.element(by.id('email'));

    this.requiredPasswordFormGroup = this.personalInformation.element(by.css('.required.password.form-group'));
    this.passwordLabel = this.requiredPasswordFormGroup.element(by.tagName('label'));
    this.passwordTextField = this.requiredPasswordFormGroup.element(by.id('passwd'));

    this.birthDateGroup = this.personalInformation.all(by.css('.form-group')).get(4);
    this.birthDateLabel = this.birthDateGroup.element(by.tagName('label'));
    this.birthDateDay = this.birthDateGroup.element(by.id('uniform-days'));
    this.birthDateMonth = this.birthDateGroup.element(by.id('uniform-months'));
    this.birthDateYear = this.birthDateGroup.element(by.id('uniform-years'));

    this.addressGroup = this.accountCreationDivs.get(1);
    this.addressSubHeader = this.addressGroup.element(by.css('.page-subheading'));

    this.addressGroupRequiredFormGroup = this.addressGroup.all(by.css('.required.form-group'));

    this.firstNameAddressGroup = this.addressGroupRequiredFormGroup.get(0);
    this.firstNameAddressLabel = this.firstNameAddressGroup.element(by.tagName('label'));
    this.firstNameAddressTextField = this.firstNameAddressGroup.element(by.tagName('input'));

    this.lastNameAddressGroup = this.addressGroupRequiredFormGroup.get(1);
    this.lastNameAddressLabel = this.lastNameAddressGroup.element(by.tagName('label'));
    this.lastNameAddressTextField = this.lastNameAddressGroup.element(by.tagName('input'));

    this.addressFormGroup = this.addressGroup.all(by.css('.form-group'));

    this.companyAddressGroup = this.addressFormGroup.get(2);
    this.companyNameAddressLabel = this.companyAddressGroup.element(by.tagName('label'));
    this.companyNameAddressTextField = this.companyAddressGroup.element(by.id('company'));

    this.streetAddressGroup = this.addressGroupRequiredFormGroup.get(2);
    this.streetAddressGroupLabel = this.streetAddressGroup.element(by.tagName('label'));
    this.streetAddressGroupTextField = this.streetAddressGroup.element(by.id('address1'));

    this.streetAddress2Group = this.addressGroup.element(by.css('.form-group.is_customer_param'));
    this.streetAddress2GroupLabel = this.streetAddress2Group.element(by.tagName('label'));
    this.streetAddress2GroupTextField = this.streetAddress2Group.element(by.id('address2'));

    this.cityAddressGroup = this.addressGroupRequiredFormGroup.get(3);
    this.cityAddressGroupLabel = this.cityAddressGroup.element(by.tagName('label'));
    this.cityAddressGroupTextField = this.cityAddressGroup.element(by.id('city'));

    this.stateAddressGroup = this.addressGroup.element(by.css('.required.id_state.select.form-group'));
    this.stateAddressGroupLabel = this.stateAddressGroup.element(by.tagName('label'));
    this.stateAddressGroupSelect = this.stateAddressGroup.element(by.id('uniform-id_state'));

    this.postalCodeAddressGroup = this.addressGroup.element(by.css('.required.postcode.form-group'));
    this.postalCodeAddressGroupLabel = this.postalCodeAddressGroup.element(by.tagName('label'));
    this.postalCodeAddressGroupTextField = this.postalCodeAddressGroup.element(by.id('postcode'));

    this.countryAddressGroup = this.addressGroup.all(by.css('.select')).get(1);
    this.countryAddressGroupLabel = this.countryAddressGroup.element(by.tagName('label'));
    this.countryAddressGroupDiv = this.countryAddressGroup.element(by.id('uniform-id_country'));
    this.countryAddressGroupSpan = this.countryAddressGroupDiv.element(by.tagName('span'));

    this.homePhoneAddressGroup = this.addressFormGroup.get(10);
    this.homePhoneAddressGroupLabel = this.homePhoneAddressGroup.element(by.tagName('label'));
    this.homePhoneAddressGroupTextField = this.homePhoneAddressGroup.element(by.id('phone'));

    this.mobilePhoneGroup = this.addressGroupRequiredFormGroup.get(7);
    this.mobilePhoneGroupLabel = this.mobilePhoneGroup.element(by.tagName('label'));
    this.mobilePhoneGroupTextField = this.mobilePhoneGroup.element(by.id('phone_mobile'));

    this.addressFutureAddressGroup = this.addressGroupRequiredFormGroup.get(8);
    this.addressFutureAddressGroupLabel = this.addressFutureAddressGroup.element(by.tagName('label'));
    this.addressFutureAddressGroupTextField = this.addressFutureAddressGroup.element(by.id('alias'));

    this.registerButton = this.personalInformationForm.element(by.id('submitAccount'));

    this.isYourInformationLabelDisplayedCorrelty = () => {

        expect(actions.isElementDisplayed(this.yourPersonalInformationSubHeader)).toBe(true);
        //expect(actions.getElementText(this.yourPersonalInformationSubHeader)).toEqual("YOUR PERSONAL INFORMATION");
    }

    this.isTitleGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.titleLabel)).toEqual(data.tittleLabel);
        expect(actions.getElementText(this.mrLabel)).toEqual(data.mrLabel);
        expect(actions.getElementText(this.mrsLabel)).toEqual(data.mrsLabel);
    }

    this.isFirstNameGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.firstNameLabel)).toEqual(data.firstNameLabel);
        expect(actions.isElementDisplayed(this.firstNameTextField)).toBe(true);
    }

    this.isLastNameGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.lastNameLabel)).toEqual(data.lastNameLabel);
        expect(actions.isElementDisplayed(this.lastNameTextField)).toBe(true);
    }

    this.isEmailGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.emailLabel)).toEqual(data.emailLabel);
        expect(actions.isElementDisplayed(this.emailNameTextField)).toBe(true);
    }

    this.isPasswordGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.passwordLabel)).toEqual(data.passwordLabel);
        expect(actions.isElementDisplayed(this.passwordTextField)).toBe(true);
    }

    this.isBirthDateGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.birthDateLabel)).toEqual(data.birthDateLabel);
        expect(actions.isElementDisplayed(this.birthDateDay)).toBe(true);
        expect(actions.isElementDisplayed(this.birthDateMonth)).toBe(true);
        expect(actions.isElementDisplayed(this.birthDateYear)).toBe(true);
    }

    this.isAddressSubHeaderGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.addressSubHeader)).toEqual(data.addressSubHeader);
    }

    this.isFirstNameAddressGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.firstNameAddressLabel)).toEqual(data.firstNameLabel);
        expect(actions.isElementDisplayed(this.firstNameAddressTextField)).toBe(true);
    }

    this.isLastNameAddressGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.lastNameAddressLabel)).toEqual(data.lastNameLabel);
        expect(actions.isElementDisplayed(this.lastNameAddressTextField)).toBe(true);
    }

    this.isCompanyAddressGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.companyNameAddressLabel)).toEqual(data.companyLabel);
        expect(actions.isElementDisplayed(this.companyNameAddressTextField)).toBe(true);
    }

    this.isStreetAddressGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.streetAddressGroupLabel)).toEqual(data.addressLabel);
        expect(actions.isElementDisplayed(this.streetAddressGroupTextField)).toBe(true);
    }

    this.isStreetAddress2GroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.streetAddress2Group)).toContain(data.address2Label);
        expect(actions.isElementDisplayed(this.streetAddress2GroupTextField)).toBe(true);
    }

    this.isCityGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.cityAddressGroupLabel)).toEqual(data.cityLabel);
        expect(actions.isElementDisplayed(this.cityAddressGroupTextField)).toBe(true);
    }

    this.isStateGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.stateAddressGroupLabel)).toEqual(data.stateLabel);
        expect(actions.isElementDisplayed(this.stateAddressGroupSelect)).toBe(true);
    }

    this.isPostalCodeGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.postalCodeAddressGroupLabel)).toEqual(data.zipCodeLabel);
        expect(actions.isElementDisplayed(this.postalCodeAddressGroupTextField)).toBe(true);
    }

    this.isCountryGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.countryAddressGroupLabel)).toEqual(data.countryLabel);
        expect(actions.isElementDisplayed(this.countryAddressGroupSpan)).toBe(true);
    }

    this.isHomePhoneGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.homePhoneAddressGroupLabel)).toEqual(data.homePhoneLabel);
        expect(actions.isElementDisplayed(this.homePhoneAddressGroupTextField)).toBe(true);
    }

    this.isMobilePhoneGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.mobilePhoneGroupLabel)).toEqual(data.mobilePhoneLabel);
        expect(actions.isElementDisplayed(this.mobilePhoneGroupTextField)).toBe(true);
    }

    this.isAssignAddressGroupDisplayedCorrectly = () => {
        expect(actions.getElementText(this.addressFutureAddressGroupLabel)).toEqual(data.futureAddressLabel);
        expect(actions.isElementDisplayed(this.addressFutureAddressGroupLabel)).toBe(true);
    }

    this.isRegisterButtonDisplayedCorrectly = () => {
        expect(actions.isElementDisplayed(this.registerButton)).toBe(true);
    }

    this.basicVisualValidationsOnAccountCreationPage = () => {
        this.isYourInformationLabelDisplayedCorrelty();
        this.isTitleGroupDisplayedCorrectly();
        this.isFirstNameGroupDisplayedCorrectly();
        this.isLastNameGroupDisplayedCorrectly();
        this.isEmailGroupDisplayedCorrectly();
        this.isPasswordGroupDisplayedCorrectly();
        this.isBirthDateGroupDisplayedCorrectly();
        this.isAddressSubHeaderGroupDisplayedCorrectly();
        this.isFirstNameAddressGroupDisplayedCorrectly();
        this.isLastNameAddressGroupDisplayedCorrectly();
        this.isCompanyAddressGroupDisplayedCorrectly();
        this.isStreetAddressGroupDisplayedCorrectly();
        this.isStreetAddress2GroupDisplayedCorrectly();
        this.isCityGroupDisplayedCorrectly();
        this.isStateGroupDisplayedCorrectly();
        this.isPostalCodeGroupDisplayedCorrectly();
        this.isCountryGroupDisplayedCorrectly();
        this.isHomePhoneGroupDisplayedCorrectly();
        this.isMobilePhoneGroupDisplayedCorrectly();
        this.isAssignAddressGroupDisplayedCorrectly();
        this.isRegisterButtonDisplayedCorrectly();
    }

    this.isGenderRadioChoiceChecked = (gender) => {
        if (gender == 'men') {
            expect(this.radioChoiceMr.element(by.tagName('span')).getAttribute('class')).toEqual('checked');
        } else {
            expect(this.radioChoiceMrs.element(by.tagName('span')).getAttribute('class')).toEqual('checked');
        }
    }

    this.selectGender = (gender) => {
        if (gender == 'men') {
            actions.clickToElement(this.radioChoiceMr);
        } else {
            actions.clickToElement(this.radioChoiceMrs);
        }
    }

    this.fillFirstName = (name) => {
        actions.enterText(this.firstNameTextField, name);
    }

    this.validateFirstNameFilled = (name) => {
        expect(actions.getTextFieldText(this.firstNameTextField)).toEqual(name);
    }

    this.fillLastName = (name) => {
        actions.enterText(this.lastNameTextField, name);
    }

    this.validateLastNameFilled = (name) => {
        expect(actions.getTextFieldText(this.lastNameTextField)).toEqual(name);
    }

    this.validateEmail = (email) => {
        expect(actions.getTextFieldText(this.emailNameTextField)).toEqual(email);
    }

    this.fillPassword = (password) => {
        actions.enterText(this.passwordTextField, password);
    }

    this.validatePassword = (password) => {
        expect(actions.getTextFieldText(this.passwordTextField)).toEqual(password);
    }

    this.fillBirthDate = (day, month, year) => {
        this.birthDateDay.element(by.id('days')).all(by.tagName('option')).get(day).click();
        this.birthDateMonth.element(by.id('months')).all(by.tagName('option')).get(month).click();
        this.birthDateYear.element(by.id('years')).all(by.tagName('option')).get(year).click();
    }

    this.fillFirstNameAddress = (name) => {
        actions.clearElementText(this.firstNameAddressTextField);
        actions.enterText(this.firstNameAddressTextField, name);
    }

    this.validateFirstNameAddressFilled = (name) => {
        expect(actions.getTextFieldText(this.firstNameAddressTextField)).toEqual(name);
    }

    this.fillLastNameAddress = (name) => {
        actions.clearElementText(this.lastNameAddressTextField);
        actions.enterText(this.lastNameAddressTextField, name);
    }

    this.validateLastNameAddressFilled = (name) => {
        expect(actions.getTextFieldText(this.lastNameAddressTextField)).toEqual(name);
    }

    this.fillCompanyName = (name) => {
        actions.enterText(this.companyNameAddressTextField, name);
    }

    this.validateCompanyNameFilled = (name) => {
        expect(actions.getTextFieldText(this.companyNameAddressTextField)).toEqual(name);
    }

    this.fillAddressName = (name) => {
        actions.enterText(this.streetAddressGroupTextField, name);
    }

    this.validateAddressNameFilled = (name) => {
        expect(actions.getTextFieldText(this.streetAddressGroupTextField)).toEqual(name);
    }

    this.fillCityName = (name) => {
        actions.enterText(this.cityAddressGroupTextField, name);
    }

    this.validateCityNameFilled = (name) => {
        expect(actions.getTextFieldText(this.cityAddressGroupTextField)).toEqual(name);
    }

    this.fillStateName = (state) => {
        this.stateAddressGroupSelect.all(by.tagName('option')).get(state).click();
    }

    this.fillZipCode = (name) => {
        actions.enterText(this.postalCodeAddressGroupTextField, name);
    }

    this.validateZipcodeFilled = (name) => {
        expect(actions.getTextFieldText(this.postalCodeAddressGroupTextField)).toEqual(name);
    }

    this.fillMobilePhone = (number) => {
        actions.enterText(this.mobilePhoneGroupTextField, number);
    }

    this.validateMobilePhoneFilled = (number) => {
        actions.enterText(this.mobilePhoneGroupTextField, number);
    }

    this.fillFutureAddress = (address) => {
        actions.enterText(this.addressFutureAddressGroupTextField, address);
    }

    this.validateFutureAddressFilled = (address) => {
        actions.clearElementText(this.addressFutureAddressGroupTextField);
        actions.enterText(this.addressFutureAddressGroupTextField, address);
    }

    this.submitSummary = () => {
        actions.clickToElement(this.registerButton);
    }
}

module.exports = new CreateAccountPage();

