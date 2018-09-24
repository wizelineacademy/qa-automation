function HomePage(){

	this.signInButton = element(by.linkText("Sign in"));

	this.clickOnSignInButton = () => {
		this.signInButton.click();
	}
}

module.exports = new HomePage();
