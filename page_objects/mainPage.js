var actions = require('../base/actions')
/**
 * @description Page Object for Main Page.
 */
var mainPage= function() {
  this.signIn = element(by.css("a.login"));
  this.clickSign = function() {

    actions.clickToElement(this.signIn)
  }
}
module.exports = new mainPage();
