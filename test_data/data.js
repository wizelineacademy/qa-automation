var casual = require('casual');
const Data = function () {
   this.apEmail = casual.email;
   this.email = 'YOUR_EMAIL';
   this.password = 'YOUR_PASSWORD';
   this.taskName = 'Some Task';
   this.taskUpdate = 'Updated Task';
   this.errorMessage = 'Invalid email address.';
   this.welcomeLabelText = 'Welcome to your account. Here you can manage all of your personal information and orders.';
 }
 module.exports = new Data();
