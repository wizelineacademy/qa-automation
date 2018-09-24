function LoginPage(){

    this.emailAddresTextField = element(by.id("email_create"));
    this.createAnAccountButton = element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Email address'])[1]/following::span[1]"));
    this.errorMessage = element(by.xpath("//*[@id='create_account_error']/ol/li"));

	this.createAnAccount = (email_address) => {
        this.emailAddresTextField.clear();
        this.emailAddresTextField.sendKeys(email_address);
		this.createAnAccountButton.click();
	}
}

module.exports = new LoginPage();
