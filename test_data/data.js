const Data = function () {
  var date = new Date();
  var timestamp= date.getTime();

   this.validEmail = 'user+'+ timestamp +'@gmail.com';
   this.invalidEmail = '';
   this.password = 'pixie123';

   this.title = 'Mrs'
   this.firstName  = 'Italia'
   this.lastName = 'Bedolla'
   this.userName = this.firstName + ' ' + this.lastName;
   this.dobDay = '8'
   this.dobMonth = 'June'
   this.dobYear =   '1990'
   this.newsletterCheckboxValue = 'Y'
   this.optInCheckboxValue = 'N'
   this.company = 'Scalable Press'
   this.addressLine1 = 'Test Address 01 - Line 1'
   this.addressLine2 = 'Test Address 01 - Line 2'
   this.city = 'San Francisco'
   this.state = 'California'
   this.zipCode= '95123'
   this.country = 'United States'
   this.additionalInfo = 'This is Additional Information'
   this.homePhone = '1234567890'
   this.mobilePhone = '0987654321'
   this.addressAlias = 'Address-Alias'
 }
 module.exports = new Data();
