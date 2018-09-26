const env = require('node-env-file');
env('.env');

const Data = function () {

   this.email = process.env.EMAIL;
   this.password = process.env.PASSWORD;
   this.taskName = 'Some Task';
   this.taskUpdate = 'Updated Task';
 }
 module.exports = new Data();
