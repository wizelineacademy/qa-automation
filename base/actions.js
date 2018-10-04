const EC = protractor.ExpectedConditions;

const Actions = function () {

    /**
     * @description Wait for element to be clickable then perform click
     * @method clickElement
     * @param {webElement}  element
     */
  this.clickElement = function (element) {
    var isClickable = EC.elementToBeClickable(element);
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
    var isVisible = EC.visibilityOf(element);
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
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 5000);
    element.sendKeys(text);
  };

    /**
     * @description Wait for element to be visible then clear box.
     * @method clearElementText
     * @param {webElement} element
     */
  this.clearElementText = function (element) {
    var isPresent = EC.visibilityOf(element);
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
    var isPresent = EC.visibilityOf(element);
    browser.wait(isPresent, 5000);
    return element.isDisplayed();
  };

  /**
   * @description Get Value of an elements attribute
   * @method getElementAttributeValue
   * @param {webElement} elem
   *@param {String} attribute
   */
  this.getElementAttributeValue = (elem,attribute) => {
    var isVisible = EC.visibilityOf(elem);
    browser.wait(isVisible, 5000);
    return elem.getAttribute(attribute);
  };

  /**
   * @description Select an Option from a Dropdown
   * @method selectOptionFromDropdown
   * @param {webElement} elem
   *@param {String} selectedOption
   */
  this.selectOptionFromDropdown = (elem,selectedOption) => {
    var isVisible = EC.visibilityOf(elem);
    browser.wait(isVisible, 5000);
    elem.element(by.cssContainingText('option',selectedOption)).click();
  };

  /**
   * @description Select or Unselect a checkbox according to the Value coming from Data
   * @method selectCheckbox
   * @param {webElement} elem
   *@param {String} checkboxValue
   */
  this.selectCheckbox = (elem,checkboxValue) => {
    var isClickable = EC.elementToBeClickable(elem);
    browser.wait(isClickable, 10000);
    if (checkboxValue == 'Y') {
      elem.click();
    }
    //This was a Case that was suppose to check or uncheck checkboxes,
    //but it first verifies if it is already in the state that the user wants
    //and dependeing on the state it would check or uncheck, but for some reason
    // isSelected is always returning TRUE
    /*switch (checkboxValue)
    {
      case 'Y':
          if (elem.isSelected()==true)
            elem.click();
          break;

      case 'N':
          if (elem.isSelected())
            elem.click();
          break;
    }*/
  };
}
module.exports = new Actions();
