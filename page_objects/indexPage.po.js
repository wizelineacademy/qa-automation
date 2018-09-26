const Actions = require('../base/actions');
const actions = new Actions();

function IndexPage() {
    this.signinA = element(by.css('.login'));
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.errorMessageDiv = element(by.id('create_account_error'));
    this.emailCreateInput = element(by.id('email_create'));
    // INFORMATION FORM
    this.radioButtonMr = element(by.id('id_gender1'));
    this.radioButtonMrs = element(by.id('id_gender2'));
    this.firstNameInput = element(by.id('customer_firstname'));
    this.lastNameInput = element(by.id('customer_lastname'));
    this.emailInput = element(by.id('email'));
    this.passwordInput = element(by.id('passwd'));
    // DATE DROPDOWNS
    this.daysSelect = element(by.id('days'));
    this.monthsSelect = element(by.id('months'));
    this.yearsSelect = element(by.id('years'));
    // NEWSLETTER CHECKS
    this.newsletterCheck = element(by.id('newsletter'));
    this.optinCheck = element(by.id('optin'));
    // ADDRESS
    this.firstNameInputAddress = element(by.id('firstname'));
    this.lastNameInputAddress = element(by.id('lastname'));
    this.companyInputAddress = element(by.id('company'));
    this.line1Input = element(by.id('address1'));
    this.line2Input = element(by.id('address2'));
    // CITY 
    this.cityInputAddress = element(by.id('city'));
    this.stateDropdown = element(by.id('id_state'));
    this.postcodeInputAddress = element(by.id('postcode'));
    this.countryDropdown = element(by.id('id_country'));
    this.additionalInfoInput = element(by.id('other'));
    this.phoneInput = element(by.id('phone'));
    this.phoneMobileInput = element(by.id('phone_mobile'));
    this.aliasInput = element(by.id('alias'));
    this.submitAccount = element(by.id('submitAccount'));
    // MY ACCOUNT
    this.myAccount = element(by.css('.page-heading'));


    this.signInWithNoEmail = () => {
        browser.get('http://automationpractice.com/index.php');        
        actions.clickElement(this.signinA);                
        actions.clickElement(this.createAccountButton);                  
        expect(this.errorMessageDiv.isPresent()).toBe(true);                
    }

    this.signInWithEmail = (firstname, lastname, password, company, companyAddress1, companyAddress2, city, postCode, phone, phone_mobile, other) => {
        actions.clickElement(this.signinA);        
        actions.enterText(this.emailCreateInput, ((Math.random() * 100) + 1).toString() + "@testmail.com");
        actions.clickElement(this.createAccountButton);                
        actions.clickElement(this.radioButtonMr);
        actions.clickElement(this.radioButtonMrs);
        
        actions.enterText(this.firstNameInput, firstname);
        actions.enterText(this.lastNameInput, lastname);
        actions.enterText(this.passwordInput, password);        
                
        this.daysSelect.click();
        element(by.css("#days [value='1']")).click();
        this.monthsSelect.click();
        element(by.css("#months [value='1']")).click();
        this.yearsSelect.click();
        element(by.css("#years [value='2017']")).click();

        actions.clickElement(this.newsletterCheck);
        actions.clickElement(this.optinCheck);
        
        actions.enterText(this.firstNameInputAddress, firstname);
        actions.enterText(this.lastNameInputAddress, lastname);
        actions.enterText(this.companyInputAddress, company);
        actions.enterText(this.line1Input, companyAddress1);
        actions.enterText(this.line2Input, companyAddress2);

        actions.enterText(this.cityInputAddress, city);                
        this.stateDropdown.click();
        element(by.css("#id_state [value='1']")).click();

        actions.enterText(this.postcodeInputAddress, postCode);        
        this.countryDropdown.click();
        element(by.css("#id_country [value='21']")).click();
        actions.enterText(this.additionalInfoInput, other);
        actions.enterText(this.phoneInput, phone);        
        actions.enterText(this.phoneMobileInput, phone_mobile);
        actions.enterText(this.aliasInput, other);                

        actions.clickElement(this.submitAccount);                

        expect(this.myAccount.isPresent()).toBe(true);                        
    }

}

module.exports = new IndexPage();