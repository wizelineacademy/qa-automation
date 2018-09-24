const EC  = protractor.ExpectedConditions;

const Actions = function () {


  this.clickElement = function (element){
    var isClickable = EC.elementToBeClickable(element);
    browser.wait(isClickable, 7000, 'The element is not clickable ');
    element.click();
  }

  this.elementVisible = function (element){
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible, 7000);
    return element.isDisplayed();
  }

  this.writeText = function (element, text){
    var isClickable = EC.elementToBeClickable(element);
    browser.wait(isClickable,7000);
    element.sendKeys(text);
  }

  this.clickButton = function (element){
    var clickElement = EC.visibilityOf(element);
    browser.wait(clickElement,7000,'element not visible');
    element.click();
  }

  this.clearContent = function (element){
    var isVisible = EC.visibilityOf(element);
    browser.wait(isVisible,7000);
    element.clear();
  }

  this.getMail = function (){
    var mail = Math.random().toString(36).substring(7);
    return mail=mail+'@any.com';
  }



}
module.exports = new Actions();
