const actions = require('../base/actions');

/**
 * @description Page Object for Sign in screen
 */

 function apSignIn() {
   //WebElements for main page

   this.CreateAccountLabel = element(by.css('.page-subheading'));
   this.CreateAccountField = element(by.id('email_create'));
   this.CreateAccountButton = element(by.id('SubmitCreate'));
   this.CreateAccountErrorMessage = element(by.id('create_account_error'));

 /**
  * @description Function used to know if the Create Account Label is displayed
  * @method isCreateAccountLabelDisplayed
  */

 this.isCreateAccountLabelDisplayed = () => {
   return actions.isElementDisplayed(this.CreateAccountLabel);
 };

 /**
  * @description Function used to click on Create Account Button
  * @method clickCreateAccountButton
  */

this.clickCreateAccountButton = () => {
  actions.clickToElement(this.CreateAccountButton);

}
/**
 * @description Function used to know if the Error Message is displayed
 * @method isCreateAccountErrorDisplayed
 */
this.isCreateAccountErrorDisplayed = () => {
    return actions.isElementDisplayed(this.CreateAccountErrorMessage);
  };

  /**
 * @description Function used to get the text from the last text
 * @method getCreateAccountErrorMessageText
 */
this.getCreateAccountErrorMessageText = () => {
  return actions.getElementText(this.CreateAccountErrorMessage);
};

this.createAccount = (email) => {
  actions.enterText(this.CreateAccountField, email);
  actions.clickToElement(this.CreateAccountButton);
};


}
  module.exports = new apSignIn();
