var Ec = protractor.ExpectedConditions;

function Actions(){
    this.clickToElement = function (element){
        let isCliclable = Ec.elementToBeClickable(element);
        browser.wait(isCliclable, 3000, 'No clickable');
        element.click();
    }

    this.hoverElement = function (element){
        let isCliclable = Ec.elementToBeClickable(element);
        browser.wait(isCliclable, 3000, 'No clickable');
        browser.Actions.mouseMove(element).perform();
    }

    this.getElementText = function(element){
        let isVisible = Ec.visibilityOf(element);
        browser.wait(isVisible, 3000);
        return element.getText();
    }

    this.enterText = function (element, text){
        let isVisible = Ec.visibilityOf(element);
        browser.wait(isVisible, 3000);
        //element.clear();
        element.sendKeys(text);
    }

    this.clearElement = function (element){
        let isVisible = Ec.visibilityOf(element);
        browser.wait(isVisible, 3000);
        element.clear();
    }

    this.isElementDisplayed = function(element){
        let isVisible = Ec.visibilityOf(element);
        browser.wait(isVisible, 3000);
        return element.isDisplayed();
    }

    this.waitForInvisible = function(element){
        let isNotVisible = Ec.invisibilityOf(element);
        browser.wait(isVisiisNotVisibleble, 3000, 'Element is Visible');
    }

    this.selectFromDropDown = function (mainElement, option){
        this.clickToElement(mainElement);
        let options = mainElement.element(by.css('option[innerText="'+option+'"], option[value="'+option+'"]'));
        if(options==null)
            options = mainElement.element(by.css('option'));
        this.clickToElement(options);
    }
}

module.exports = new Actions();