/**
 * @description Open url to specific URL.
 */
var Page = function () {
  this.openUrl = function (path = browser.baseUrl) {
    browser.get(path);
  }
}
module.exports = new Page();
