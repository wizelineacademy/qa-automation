const EC = protractor.ExpectedConditions;

const Actions = function () {
    this.clickToElement = function (element) {
        var isClickable = EC.elementToBeClickable(element);
        browser.wait(isClickable, 30000, 'Element is not clickable');
        element.click();
      };

    this.isElementDisplayed = function (element) {
        var isPresent = EC.visibilityOf(element);
        browser.wait(isPresent, 30000);
        return element.isDisplayed();
      };

    this.enterText = function (element, text) {
        var isVisible = EC.visibilityOf(element);
        browser.wait(isVisible, 30000);
        element.sendKeys(text);
      };

    this.clearElementText = function (element) {
        var isPresent = EC.visibilityOf(element);
        browser.wait(isPresent, 30000);
        element.clear();
      };
}
module.exports = new Actions();