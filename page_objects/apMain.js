const actions = require('../base/actions');

/**
 * @description Page Object for Main Page.
 */

 function apMain() {
   //WebElements for main page

   this.signInButton = element(by.css('.header_user_info'));


 /**
  * @description Function used to open Sign in page
  * @method clickSignInButton
  */

    this.clickSignInButton = () => {
      actions.clickToElement(this.signInButton);
    };
  }

  module.exports = new apMain();
