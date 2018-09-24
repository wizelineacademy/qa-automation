const Actions = require('../base/actions');
const actions = new Actions();

class LoginPage {
  constructor() {
    this.agendaView = element(by.id('agenda_view'));
    this.emailTextField = element(by.id('email'));
    this.loginForm = element(by.css('.sel_login'));
    this.passwordTextField = element(by.id('password'));
  }

  enterUserCredentials(email, password) {
    actions.enterText(this.emailTextField, email);
    actions.enterText(this.passwordTextField, password);
    actions.clickElement(this.loginForm);
  }
}

module.exports = LoginPage;