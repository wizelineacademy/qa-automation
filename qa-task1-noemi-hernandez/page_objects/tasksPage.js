const actions = require('../base/actions.js');

function tasksPage() {
    //Web page elements needed:

    //Elements of CREATE NEW ACCOUNT FORM
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.newAccountForm = element(by.id('account-creation_form'));
    this.createAccountFormHeader = element(by.css('.page-heading'));
    this.radioButtonG1 = element(by.id('uniform-id_gender1'));
    this.radioButtonG2 = element(by.id('uniform-id_gender2'));
    this.firstNameField = element(by.id('customer_firstname'));
    this.lastNameField = element(by.id('customer_lastname'));
    this.password = element(by.id('passwd'));
    this.dateBirthDay = element(by.id('days'));
    this.dateBirthMonth = element(by.id('months'));
    this.dateBirthYear = element(by.id('years'));
    this.checkboxNewsletter = element(by.id('newsletter'));
    this.checkboxOffers = element(by.id('optin'));
    this.firstNameAddress = element(by.id('firstname'));
    this.lastNameAddress = element(by.id('lastname'));
    this.companyName = element(by.id('company'));
    this.addressLine1 = element(by.id('address1'));
    this.addressLine2 = element(by.id('address2'));
    this.city = element(by.id('city'));
    this.selectorState = element(by.id('id_state'));
    this.postCode = element(by.id('postcode'));
    this.selectorCountry = element(by.id('id_country'));
    this.additionalInformation = element(by.id('other'));
    this.homePhone = element(by.id('phone'));
    this.mobilePhone = element(by.id('phone_mobile'));
    this.addressAlias = element(by.id('alias'));
    this.submitButton = element(by.id('submitAccount'));
    //When there's an error in blank email field:
    // this.alertDangerForm = element(by.id('create_account_error'));
    this.alertDangerForm = null;
    //When an account was created successfully:
    this.createdSuccessfully = element(by.css('.page-heading'));

    this.fillNewAccForm = (gender, firstName, lastName, password, birthDay, birthMonth, birthYear, news, offers, company, ad1, ad2, city, state, postcode, info, hphone, mphone, alias) => {
        const dateBirthDayOpt = this.dateBirthDay.$(`[value="${birthDay}"]`)
        const dateBirthMonthOpt = this.dateBirthMonth.$(`[value="${birthMonth}"]`)
        const dateBirthYearOpt = this.dateBirthYear.$(`[value="${birthYear}"]`)
        const stateOpt = this.selectorState.$(`[value="${state}"]`)

        if (gender === 'male'){
            actions.clickToElement(this.radioButtonG1); 
        } else {
            actions.clickToElement(this.radioButtonG2); 
        }
        
        actions.clickToElement(this.firstNameField); 
        actions.enterText(this.firstNameField,firstName);

        actions.clickToElement(this.lastNameField); 
        actions.enterText(this.lastNameField,lastName);

        actions.clickToElement(this.password); 
        actions.enterText(this.password,password);

        actions.clickToElement(dateBirthDayOpt); 
        actions.clickToElement(dateBirthMonthOpt); 
        actions.clickToElement(dateBirthYearOpt);

        if (news == true){
            this.checkboxNewsletter.click()
        }

        if (offers == true){
            this.checkboxOffers.click()
        }

        actions.clickToElement(this.firstNameAddress); 
        actions.enterText(this.firstNameAddress,firstName);

        actions.clickToElement(this.lastNameAddress); 
        actions.enterText(this.lastNameAddress,lastName);

        actions.clickToElement(this.companyName); 
        actions.enterText(this.companyName,company);

        actions.clickToElement(this.addressLine1); 
        actions.enterText(this.addressLine1,ad1);
        
        actions.clickToElement(this.addressLine2); 
        actions.enterText(this.addressLine2,ad2);

        actions.clickToElement(this.city); 
        actions.enterText(this.city,city);

        stateOpt.click()

        actions.clickToElement(this.postCode); 
        actions.enterText(this.postCode,postcode);

        actions.clickToElement(this.additionalInformation); 
        actions.enterText(this.additionalInformation,info);

        actions.clickToElement(this.homePhone); 
        actions.enterText(this.homePhone,hphone);

        actions.clickToElement(this.mobilePhone); 
        actions.enterText(this.mobilePhone,mphone);

        actions.clickToElement(this.addressAlias); 
        this.addressAlias.clear();
        actions.enterText(this.addressAlias,alias);

        actions.clickToElement(this.submitButton);
        }
    
    this.sendNoEmail = () => {
        actions.clickToElement(this.createAccountButton);
        this.alertDangerForm = element(by.id('create_account_error'))
    }

}

module.exports = new tasksPage();