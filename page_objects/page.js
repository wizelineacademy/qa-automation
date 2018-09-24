/**
 * @description Open url to specific URL.
 */
var Page = function () {
  this.openUrl = function (path) {
    if (typeof path !== 'undefined') {
      browser.get(path);
    } else {
      browser.get(browser.baseUrl);
    }
  }
}
module.exports = new Page();
