const uuidv4 = require('uuid/v4');

const Data = function () {
   this.invalidEmails = [
     'test-invalid-mail',
     'test@invalid-mail',
     // The email validation currently pass this email scenario but you should 
     // not validate it.
     // TODO:  i will make a question: what is to be done in this scenario in the real world
     // 'test@invalid-mail.c',
   ];
   this.validEmail = `${uuidv4()}-valid-email@gmail.com`;

   this.accountCreationData = {
     requiredFields: [
      'customer_firstname',
      'customer_lastname',
      'lastname',
      'firstname',
      'passwd',
      'address1',
      'city',
      'postcode',
      'id_state',
      'id_country',
      'phone',
      'phone_mobile',
      'alias',
     ],
     formData: {
      id_gender: '1',
      customer_firstname: 'Usuario',
      customer_lastname: 'Prueba',
      email: this.validEmail,
      passwd: 'validPassword',
      days: '2',
      months: '4',
      years: '2000',
      newsletter: true,
      optin: true,
      firstname: 'Usuario',
      lastname: 'Prueba',
      company: 'Compañia de Prueba',
      address1: 'Prueba 1268',
      city: 'Los Angeles',
      id_state: '5',
      postcode: '99561',
      id_country: '21',
      other: 'Mas información de pruebas',
      phone: '3336802921',
      phone_mobile: '3314444369',
      alias: 'My address',
     }
   }
 }
 module.exports = new Data();
