const Actions = require('../Utils/actions');

function Authentication(){
    this.EmailInput = element(by.id('email_create'));
    this.CreateAccountBtn = element(by.name('SubmitCreate'));
    this.CreateAccountErrorMsg = element(by.id('create_account_error'));

    this.TitleRadioBtns = element.all(by.name('id_gender'));
    this.FirstNameInput = element(by.id('customer_firstname'));
    this.LastNameInput = element(by.id('customer_lastname'));
    this.PasswordInput = element(by.id('passwd'));
    this.DaysSelect = element(by.id('uniform-days'));
    this.MonthsSelect = element(by.id('uniform-months'));
    this.YearsSelect = element(by.id('uniform-years'));
    this.CompanyInput = element(by.id('company'));
    this.AddressInput = element(by.id('address1'));
    this.CityInput = element(by.id('city'));
    this.StateSelect = element(by.id('uniform-id_state'));
    this.PostcodeInput = element(by.id('postcode'));
    this.CountrySelect = element(by.id('uniform-id_country'));
    this.MobilePhoneInput = element(by.id('phone_mobile'));

    this.Form = element(by.id('account-creation_form'));
    this.submitBtn = element(by.id('submitAccount'));
    this.accountFormErrorMsg = element(by.className('.alert.alert-danger'));

    this.InfoAccountP = element(by.css('.info-account'));

    this.ValidateEmail= function(email){
        Actions.enterText(this.EmailInput, email);
        Actions.clickToElement(this.CreateAccountBtn);
    }

    this.FillCreateAccountForm = function(AccountData){
        if(this.Form.isPresent()){
            Actions.clickToElement(this.TitleRadioBtns.get(AccountData.Title));
            Actions.enterText(this.FirstNameInput, AccountData.FirstName);
            Actions.enterText(this.LastNameInput, AccountData.LastName);
            Actions.enterText(this.PasswordInput, AccountData.Password);

            Actions.selectFromDropDown(this.DaysSelect, AccountData.DateOfBirth.Day);
            Actions.selectFromDropDown(this.MonthsSelect, AccountData.DateOfBirth.Month);
            Actions.selectFromDropDown(this.YearsSelect, AccountData.DateOfBirth.Year);

            Actions.enterText(this.CompanyInput, AccountData.Company);
            Actions.enterText(this.AddressInput, AccountData.Address);
            Actions.enterText(this.CityInput, AccountData.City);
            Actions.selectFromDropDown(this.StateSelect, AccountData.State);
            Actions.enterText(this.PostcodeInput, AccountData.Postcode);
            Actions.selectFromDropDown(this.CountrySelect, AccountData.Country);
            Actions.enterText(this.MobilePhoneInput, AccountData.MobilePhone);
        }else
            fail();
    }

    this.ValidateForm = function(expectedResult){
        Actions.clickToElement(this.submitBtn);
        expect(this.accountFormErrorMsg.isPresent()).toBe(expectedResult);
    }
}

module.exports = new Authentication();