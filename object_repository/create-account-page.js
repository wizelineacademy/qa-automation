function CreateAccountPage(){

    this.signInButton = element(by.linkText("Sign in"));
    
    this.genderMale = element(by.id("id_gender1"));
    this.firstNameTextBox = element(by.id("customer_firstname"));
    this.lastNameTextBox = element(by.id("customer_lastname"));
    this.passwordTextBox = element(by.id("passwd"));
    this.newsletterCheckbox = element(by.id("newsletter"));
    this.specialOfferCheckbox = element(by.id("newsletter"));
    this.companyTextBox = element(by.id("company"));
    this.addressOneTextBox = element(by.id("address1"));
    this.cityTextBox = element(by.id("city"));
    this.postCodeTextBox = element(by.id("postcode"));
    this.mobilePhoneTextBox = element(by.id("phone_mobile"));
    this.aliasTextBox = element(by.id("alias"));
    this.submitButton = element(by.id("submitAccount"));
    
	this.selectGenderMaleOption = () => {
		this.genderMale.click();
    }
    
    this.enterName = (name) => {
        this.firstNameTextBox.sendKeys(name);
    }
    this.enterLastName = (lastName) => {
        this.lastNameTextBox.sendKeys(lastName);
    }
    this.enterPassword = (password) => {
        this.passwordTextBox.sendKeys(password);
    }
    this.selectDOBDayOption = (day) => {
        $('[id="days"]').element(by.cssContainingText('option', day)).click();
    }
    this.selectDOBMonthOption = (month) => {
        $('[id="months"]').element(by.cssContainingText('option', month)).click();
    }
    this.selectDOBYearOption = (year) => {
        $('[id="years"]').element(by.cssContainingText('option', year)).click();
    }
    this.acceptNewsletter = () => {
        this.newsletterCheckbox.click()
    }
    this.acceptSpecialOffers = () => {
        this.specialOfferCheckbox.click();
    }
    this.enterCompanyName = (name) =>{
        this.companyTextBox.sendKeys(name);
    }
    this.enterAddressOne = (address) =>{
        this.addressOneTextBox.sendKeys(address);
    }
    this.enterCityName = (name) =>{
        this.cityTextBox.sendKeys(name);
    }
    this.selectStateOption = (state) =>{
        $('[id="id_state"]').element(by.cssContainingText('option', state)).click();
    }
    this.enterPostCode = (postcode) =>{
        this.postCodeTextBox.sendKeys(postcode);
    }
    this.enterMobilePhone = (number) =>{
        this.mobilePhoneTextBox.sendKeys(number);
    }
    this.enterAlias = (alias)=>{
        this.aliasTextBox.sendKeys(alias);
    }
    this.performTheRegistriation = ()=>{
        this.submitButton.click();
    }
}

module.exports = new CreateAccountPage();
