/**
 * @description Page Object for My Account Page.
 */
function MyAccountPage() {
  this.welcomeText = element(by.css('.info-account'));
}
module.exports = new MyAccountPage();
