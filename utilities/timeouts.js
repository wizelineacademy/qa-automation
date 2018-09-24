function TimeOuts(){

    var EC = protractor.ExpectedConditions;
    
	this.waitForTheElementToBeReady = (web_element, timeout) => {
        browser.wait(EC.elementToBeClickable(web_element), timeout, 'Hey! Give more time!!!!');
	}
}

module.exports = new TimeOuts();
