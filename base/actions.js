// If you want to know more about the ExpectedConditions
// please visit the URL https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
// so you can see all the Functions fo ExpectedConditions.
const EC = protractor.ExpectedConditions;

const Actions = function () {

  /**
   * @description Wait for element to be clickable then perform click
   * @method clickToElement
   * @param {webElement}  element
   */
  this.clickToElement = function (element) {
    var isClickable = EC.elementToBeClickable(element);
    browser.wait(isClickable, 30000, 'Element is not clickable');
    element.click();
  };

  /**
   * @description Wait for element to be visible then getText
   * @method getElementText
   * @param {webElement} element
   * @return {String}
   */
  this.getElementText = function (element) {
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 30000);
    return element.getText();
  };

  /**
   * @description Wait for element to be visible then getText
   * @method getElementText
   * @param {webElement} element
   * @return {String}
   */
  this.getTextFieldText = function (element) {
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 30000);
    return element.getAttribute('value');
  };


  /**
   * @description Wait for element to be visible then sendKeys.
   * @method enterText
   * @param {webElement} element
   * @param {String} text
   */
  this.enterText = function (element, text) {
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 30000);
    element.sendKeys(text);
  };

  /**
   * @description Wait for element to be visible then clear box.
   * @method clearElementText
   * @param {webElement} element
   */
  this.clearElementText = function (element) {
    var isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 30000);
    element.clear();
  };

  /**
   * @description Wait for element to be visible then verify if element is displayed.
   * @method isElementDisplayed
   * @param {webElement} element
   * @return {bool}
   */
  this.isElementDisplayed = function (element) {
    var isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 30000);
    return element.isDisplayed();
  };

  /**
   * @description Wait for element to be invisible
   * @method waitForInvisible
   * @param {webElement} elem
   */
  this.waitForInvisible = (elem) => {
    const isNotVisible = EC.invisibilityOf(elem);
    browser.wait(isNotVisible, 4000, 'Element is visible');
  };

  /**
   * @description Wait for element to be clickable and hover to element
   * @method hoverElement
   * @param {webElement} elem
   */
  this.hoverElement = (elem) => {
    const isClickable = EC.elementToBeClickable(elem);
    browser.wait(isClickable, 30000, 'Element is not hoverable');
    browser.actions().mouseMove(elem).perform();
  };

}
module.exports = new Actions();
