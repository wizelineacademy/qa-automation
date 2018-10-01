const Data = function () {

  //Data for Your Personal Information on Account Creation Page
  this.password = 'password1';
  this.title = 'Mrs';
  this.firstName = 'Ed';
  this.lastName = 'Moda';
  this.day = '20';
  this.month = '6';
  this.year = '1987';

  //Data for Your Address on Account Creation Page
  this.addrFirstName = 'Addr First Name';
  this.addrLastName = 'Addr Last Name';
  this.addrCompany = 'My Company';
  this.addrAddress = 'Test Address';
  this.addrAddress2 = 'Test Address 2';
  this.addrCity = 'GDL';
  this.addrState = 'Texas';
  this.addrPostalCode = '28050';
  this.addrCountry = 'United States'
  this.addrAdditional = 'Testing';
  this.addrHomePhone = '3123149503';
  this.addrMobilePhone = '3312622774';
  this.addrAlias = 'Test';

  //Text Messages
  this.createAccountErrorText = 'Invalid email address.';
  this.authenticationLabel = 'Authentication';
  this.myAccountLabel = 'My account';



}
module.exports = new Data();
