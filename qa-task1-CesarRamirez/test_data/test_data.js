let casual = require('casual');

const Data = function () {

    this.invalidEmail = 'carr.gdlx';
    this.partialEmail ='@gmail.com';
    this.errorMessage = 'Invalid email address.';
    //this.errorMessageExistingUSer = 'An account using this email address has already been registered. Please enter a valid password or request a new one. ';
    this.confirmationMsg = 'Welcome to your account. Here you can manage all of your personal information and orders.';

    this.formFields = {
        flip: casual.coin_flip,
        psw: casual.password,
        day: casual.day_of_month,
        month: casual.month_name,
        year: casual.year,
        name: casual.name,
        lastName: casual.last_name,
        company: casual.company_name,
        address: casual.address1,
        city: casual.city,
        state: casual.state,
        pCode: casual.zip(digits = 5),
        country: 'United States',
        additionalInfo: casual.short_description,
        homePhone: casual.phone,
        mobilePhone: casual.phone,
    }

};
module.exports = new Data();
