// If you want to know more about the ExpectedConditions
// please visit the URL https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
// so you can see all the Functions fo ExpectedConditions.
const EC = protractor.ExpectedConditions;

class Actions {

  /**
   * @description Wait for element to be clickable then perform click
   * @method clickElement
   * @param {webElement}  element
   */
  clickElement(element) {
    var isClickable = EC.elementToBeClickable(element);
    this.wait(isClickable, 'Element is not clickable');
    element.click();
  };

  /**
   * @description Wait for element to be visible then getText
   * @method getElementText
   * @param {webElement} element
   * @return {String}
   */
  getElementText(element) {
    var isVisible = EC.visibilityOf(element);
    this.wait(isVisible, 'Element was not visible');
    return element.getText();
  };

  /**
   * @description Wait for element to be visible then sendKeys.
   * @method enterText
   * @param {webElement} element
   * @param {String} text
   */
  enterText(element, text) {
    var isVisible = EC.visibilityOf(element);
    this.wait(isVisible, 'Element was not visible');
    element.sendKeys(text);
  };

  /**
   * @description Wait for element to be visible then clear box.
   * @method clearElementText
   * @param {webElement} element
   */
  clearElementText(element) {
    var isPresent = EC.visibilityOf(element);
    this.wait(isPresent, 'Element was not present when trying to clear it out');
    element.clear();
  };

  /**
   * @description Wait for element to be visible then verify if element is displayed.
   * @method isElementDisplayed
   * @param {webElement} element
   * @return {bool}
   */
  isElementDisplayed(element) {
    var isPresent = EC.visibilityOf(element);
    this.wait(isPresent, 'Element was not visible')
    return element.isDisplayed();
  };

  /**
   * @description Wait for element to be invisible
   * @method waitForInvisible
   * @param {webElement} elem
   */
  waitForInvisible(elem) {
    const isNotVisible = EC.invisibilityOf(elem);
    this.wait(isNotVisible, 4000, 'Element is visible');
  };

  /**
   * @description Wait for element to be clickable and hover to element
   * @method hoverElement
   * @param {webElement} elem
   */
  hoverElement(elem) {
    const isClickable = EC.elementToBeClickable(elem);
    this.wait(isClickable, 'Element is not hoverable');
    browser.actions().mouseMove(elem).perform();
  };

  wait(condition, errMessage, waitTimeout = 8000) {
    browser.wait(condition, waitTimeout, errMessage);
  }
}
module.exports = new Actions();
