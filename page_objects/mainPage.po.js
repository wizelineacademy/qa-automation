const Actions = require('../base/actions');
const actions = new Actions();

class MainPage {
  constructor() {
    this.signInButton = element(by.css('.login'));
  }

  goToLogin() {
    actions.clickElement(this.signInButton);
  }
}

module.exports = MainPage;