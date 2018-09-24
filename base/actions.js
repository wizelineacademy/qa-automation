const EC = protractor.ExpectedConditions;

class Actions {
  waitForVisible(element) {
    const isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 3000, 'Element is not visible');
  }

  waitForInvisible(element) {
    const isInvisible = EC.invisibilityOf(element);
    browser.wait(isInvisible, 3000, 'Element is visible');
  }

  waitForClickable(element) {
    const isClickable = EC.elementToBeClickable(element);
    browser.wait(isClickable, 3000, 'Element is not clickable');
  }

  clickElement(element) {
    this.waitForClickable(element);
    element.click();
  }

  getText(element) {
    this.waitForVisible(element);
    return element.getText();
  }

  enterText(element, text) {
    this.waitForVisible(element);
    element.sendKeys(text);
  }

  clearText(element) {
    this.waitForVisible(element);
    element.clear();
  }

  isElementDisplayed(element) {
    this.waitForVisible(element);
    return element.isDisplayed();
  }

  hoverElement(element) {
    this.waitForClickable(element);
    browser.actions().mouseMove(element).perform();
  }
}

module.exports = Actions;
