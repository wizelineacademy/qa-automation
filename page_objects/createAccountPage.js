const actions = require('../base/actions');
const logger = require('../base/logger')
/**
 * @description Page Object for Authentication page, 
 */
class DatePicker {
    constructor(day, month, year) {
        this.selDayPicker = element(by.id('days'))
        this.optDay = element(by.css(`#days [value="${day}"]`))
        this.selMonthPicker = element(by.id('months'))
        this.optMonth = element(by.css(`#months [value="${month}"]`))
        this.selYearPicker = element(by.id('years'))
        this.optYear = element(by.css(`#years [value="${year}"]`))
    }
    selectDate() {
        this.selDayPicker.click();
        this.optDay.click();
        this.selMonthPicker.click();
        this.optMonth.click();
        this.selYearPicker.click();
        this.optYear.click();
    }
}


class State {
    constructor(name) {
        this.selState =  element(by.id('id_state'))
        this.optState = element(by.cssContainingText('#id_state option',name))
    }
    clickOption() {        
        this.selState.click();
        this.optState.click();
    }
}

class CreateAccountPage {
    // Web elements for Login
    constructor() {
        this.lblFormTitle = element(by.cssContainingText('h1.page-heading', 'Create an account'))
        // Personal Information
        this.rdoMale = element(by.id('id_gender1'))
        this.rdoFemale = element(by.id('id_gender2'))
        this.txtCustomerFirstName = element(by.id('customer_firstname'))
        this.txtCustomerLastName = element(by.id('customer_lastname'))
        this.txtEmail = element(by.id('email'))
        this.txtPassword = element(by.id('passwd'))
        //Your Address
        this.txtFirstName = element(by.id('firstname'))
        this.txtLastName = element(by.id('lastname'))
        this.txtCompany = element(by.id('company'))
        this.txtAddress = element(by.id('address1'))
        this.txtAddressLine = element(by.id('address2'))
        this.txtCity = element(by.id('city'))    
        this.txtZipCode = element(by.id('postcode'))        
        this.txtMobilePhone = element(by.id('phone_mobile'))
        this.txtAddressAlias = element(by.id('alias')) 
        
        this.btnSubmitAccount = element(by.id('submitAccount'));
    }
    isDisplayedFormTitle() {
        logger.step('Validate that user is located at the "Create An Account " page')
        return actions.isElementDisplayed(this.lblFormTitle);
    }

    async isEmailPopulated(email) {
        browser.sleep(5000)
        logger.step(`Validate that email : "${email}" has been pre-populated in new form`)
        //var emailText = await actions.getElementText(this.txtEmail)
        var text = await this.txtEmail.getText();
        console.log(text);        
        return email == text;
    }

    submitForm(){
        actions.clickElement(this.btnSubmitAccount);        
    }

    fillOutForm(formObject) {  
        logger.subStep(`Enter "${formObject.CustomerFirstName}" in the Customer First Name input`)
        actions.enterText(this.txtCustomerFirstName, formObject.CustomerFirstName)    
        logger.subStep(`Enter "${formObject.CustomerLastName}" in the Customer Last Name input`)    
        actions.enterText(this.txtCustomerLastName, formObject.CustomerLastName)
        logger.subStep(`Enter "${formObject.Password}" in the Password input`)
        actions.enterText(this.txtPassword, formObject.Password)
        logger.subStep(`Enter "${formObject.FirstName}" in the First Name input`)
        actions.enterText(this.txtFirstName, formObject.FirstName)
        logger.subStep(`Enter "${formObject.LastName}" in the Last Name input`)
        actions.enterText(this.txtLastName, formObject.LastName)
        logger.subStep(`Enter "${formObject.Company}" in the Company input`)
        actions.enterText(this.txtCompany, formObject.Company)
        logger.subStep(`Enter "${formObject.Address}" in the Address input`)
        actions.enterText(this.txtAddress, formObject.Address)
        logger.subStep(`Enter "${formObject.AddressLine}" in the Address (Line 2) input`)
        actions.enterText(this.txtAddressLine, formObject.AddressLine)
        logger.subStep(`Enter "${formObject.City}" in the City input`)
        actions.enterText(this.txtCity, formObject.City)

        logger.subStep(`Select "${formObject.State}" from the State menu`)
        var state = new State(formObject.State);
        state.clickOption();        

        logger.subStep(`Enter "${formObject.ZipCode}" in the Zip/Postal Code input`)
        actions.enterText(this.txtZipCode, formObject.ZipCode)
        logger.subStep(`Enter "${formObject.MobilePhone}" in the Mobile Phone input`)
        actions.enterText(this.txtMobilePhone, formObject.MobilePhone)
        logger.subStep(`Enter "${formObject.AddressAlias}" in the Assign Alias input`)
        actions.enterText(this.txtAddressAlias, formObject.AddressAlias)

        logger.subStep(`Select ${formObject.DateOfBirth.day}/${formObject.DateOfBirth.month}/${formObject.DateOfBirth.year} from the "Date of Birth" menus`)
        var date = new DatePicker(formObject.DateOfBirth.day,
            formObject.DateOfBirth.month,
            formObject.DateOfBirth.year)
        date.selectDate();        
    }

}
module.exports = new CreateAccountPage();
