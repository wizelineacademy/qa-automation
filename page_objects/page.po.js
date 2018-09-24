
class Page {
  openUrl(url) {
    if (url !== undefined) {
      browser.get(url);
    } else {
      browser.get(browser.baseUrl);
    }
  }
}

module.exports = Page;