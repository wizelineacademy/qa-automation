/**
 * @description Page Object for home Page.
 */
function HomePage() {
  this.signInLink = element(by.css('.login'));

  this.clickOnSignInLink = () => {
    this.signInLink.click();
  };
}
module.exports = new HomePage();
