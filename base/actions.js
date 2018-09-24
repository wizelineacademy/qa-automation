// If you want to know more about the ExpectedConditions
// please visit the URL https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
// so you can see all the Functions fo ExpectedConditions.
const EC = protractor.ExpectedConditions;

const Actions = function () {

    /**
     * @description Wait for element to be visible then perform click of option selected by value
     * @method selectOptionByValue
     * @param {webElement}  element Select element
     */
  this.selectOptionByValue = function(element, value) {
    let option = element.all(by.css(`option`)).first();
    if (value) {
      option = element.all(by.css(`option[value="${value}"]`)).first();
    } else {
      const isClickable = EC.elementToBeClickable(option);
      browser.wait(isClickable, 5000, 'Option is not clickable');
    }

    option.click();
  };

  /**
   * @description Wait for element to be clickable then perform click
   * @method clickToElement
   * @param {webElement}  element
   */
  this.clickToElement = function (element) {
    const isClickable = EC.elementToBeClickable(element);
    browser.wait(isClickable, 5000, 'Element is not clickable');
    element.click();
  };

  /**
   * @description Wait for element to be visible then getText
   * @method getElementText
   * @param {webElement} element
   * @return {String}
   */
  this.getElementText = function (element) {
    const isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 5000);
    return element.getText();
  };

  /**
   * @description Wait for element to be visible then sendKeys.
   * @method enterText
   * @param {webElement} element
   * @param {String} text
   */
  this.enterText = function (element, text) {
    const isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 5000);
    element.sendKeys(text);
  };

  /**
   * @description Wait for element to be visible then clear box and sendKeys.
   * @method clearEnterText
   * @param {webElement} element
   * @param {String} text
   */
  this.clearEnterText = function (element, text) {
    const isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 5000);
    element.clear();
    element.sendKeys(text);
  };

  /**
   * @description Wait for element to be visible then clear box.
   * @method clearElementText
   * @param {webElement} element
   */
  this.clearElementText = function (element) {
    const isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 5000);
    element.clear();
  };

  /**
   * @description Wait for element to be visible then verify if element is displayed.
   * @method isElementDisplayed
   * @param {webElement} element
   * @return {bool}
   */
  this.isElementDisplayed = function (element) {
    const isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 5000);
    return element.isDisplayed();
  };

  /**
   * @description Wait for element to be invisible
   * @method waitForInvisible
   * @param {webElement} elem
   */
  this.waitForInvisible = (elem) => {
    const isNotVisible = EC.invisibilityOf(elem);
    browser.wait(isNotVisible, 5000, 'Element is visible');
  };
}

module.exports = new Actions();
