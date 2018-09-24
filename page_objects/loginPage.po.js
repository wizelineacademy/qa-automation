const Actions = require('../base/actions');
const actions = new Actions();

class LoginPage {
  constructor() {
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.emailTextField = element(by.id('email_create'));
    this.createAccountError = element(by.id('create_account_error'));
  }

  enterEmail(email) {
    actions.enterText(this.emailTextField, email);
    actions.clickElement(this.createAccountButton);
  }
}

module.exports = LoginPage;