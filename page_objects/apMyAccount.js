const actions = require('../base/actions');

/**
 * @description Page Object for My Account page
 */

 function apMyAccount(){
   //Web elements of My Account Page
   this.MyAccountSpan = element(by.css('.navigation_page'));
   this.WelcomeLabel = element(by.css('.info-account'));

   /**
    * @description Function used to know if the Authentication span is displayed
    * @method isMyAccountSpanDisplayed
    */

   this.isMyAccountSpanDisplayed = () => {
     return actions.isElementDisplayed(this.MyAccountSpan);
   };

   /**
    * @description Function used to know if the Welcome Label  is displayed
    * @method isWelcomeLabelDisplayed
    */

   this.isWelcomeLabelDisplayed = () => {
     return actions.isElementDisplayed(this.WelcomeLabel);
   };

   /**
  * @description Function used to get the text from the Welcome Label
  * @method getWelcomeLabelText
  */
 this.getWelcomeLabelText = () => {
   return actions.getElementText(this.WelcomeLabel);
 };

 }



 module.exports = new apMyAccount();
