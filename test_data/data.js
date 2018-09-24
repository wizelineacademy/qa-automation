const Data = function () {

   this.emptyEmailFormat    = '';
   this.invalidEmailFormat  = 'Invalid@email';
   this.duplicateEmail      = 'test@123.com';
   this.invalidEmailMSG     = 'Invalid email address.';
   this.duplicateEmailMSG   = 'this email address has already been registered';
   this.CreateAccountHeader = 'CREATE AN ACCOUNT';
   this.myAccountHeader     = 'MY ACCOUNT'

   this.personalInfo = {
     title: 'Mr',
     firstName: 'First Name',
     lastName: 'Last Name',
     passwd: 'test@123',
     day: '1',
     month:'9',
     year: '1984',
   }

   this.addressInfo = {
     company: 'HerbaTest',
     address1: 'Gus Eckert Road',
     address2: 'Apt 702',
     city: 'San Antonio',
     state: 'Texas',
     zip: '78240',
     country: 'United States',
     phone:  '2104604907',
     mobile: '2104994909',
     alias: 'Test Info'
   }
 }

 module.exports = new Data();
