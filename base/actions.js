var EC = protractor.ExpectedConditions;

function Actions() {
    this.clickToElement = function (element) {
        var isClickable = EC.elementToBeClickable(element);
        browser.wait(isClickable, 3000, 'Element is not clickable');
        element.click();
    };

    this.getElementText = function (element) {
        var isVisible = EC.visibilityOf(element);
        browser.wait(isVisible, 3000);
        return element.getText();
    };

    this.enterText = function (element, text) {
        var isVisible = EC.visibilityOf(element);
        browser.wait(isVisible, 3000);
        element.sendkeys(text);
    };

    this.clearElementText = function (element) {
        var isPresent = EC.visibilityOf(element);
        browser.wait(isVisibile,3000);
        element.clear();
    };

    this.isElementDisplayed = function (element){
        var isPresent = EC.visibilityOf(element);
        browser.wait(isVisibile,3000);
        return element.isDisplayed();
    };

    this.waitForInvisible = function (element) {
        var isNotVisible = EC.invisibilityOf(element);
        browser.wait(isNotVisible, 4000, 'Element is visible');
    };

    this.hoverElement = function(element){
        var isClickeable = EC.elementToBeClickable(element);
        browser.wait(isClickeable, 3000, 'Element is not clickeable');
        browser.actions().mouseMove(element).perform();
    };

}
module.exports = new Actions();

