const util = require('../base/actions');

function LoginPage(){
  //webElements
  this.signInButton = element(by.css(".login"));
  this.createAccountButton = element(by.css("#SubmitCreate,[value='1']"));
  this.emailTextField = element(by.css("#email"));
  this.passwordTextField = element(by.css("#passwd"));
  this.signInAccountButton = element(by.css(".icon-lock"));
  this.newAccountEmailTextField = element(by.css("#email_create"));
  this.invalidMailAddresLabel = element(by.css(".alert-danger"));


  this.enterIntoLoginPage = () => {
    util.clickElement(this.signInButton);
   }

   this.isLoginPageDisplayed = () => {
   return util.elementVisible(this.createAccountButton);
   };

   this.createNewAccountWithouthMail = () => {
     //util.writeText(this.newAccountEmailTextField, email);
     util.clickElement(this.createAccountButton);
   }

   this.isinvalidMailMessageDisplayed = () =>{
     return util.elementVisible(this.invalidMailAddresLabel);
   }

}
module.exports = new LoginPage();
