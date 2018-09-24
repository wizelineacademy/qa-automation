const Actions = require('../base/actions');
const actions = new Actions();

class MyAccountPage {
  constructor() {
    this.pageHeading = element(by.css('.page-heading'));
  }
}

module.exports = MyAccountPage;