const homePage = require('../object_repository/home-page');
const loginPage = require('../object_repository/login-page');
const timeouts = require('../utilities/timeouts');

describe('Validate Account Creation', () => {
	it('Should hould display error message when no email is entered.', ()=>{
		browser.waitForAngularEnabled(false);
		browser.get("http://automationpractice.com/index.php");
		
		homePage.clickOnSignInButton();
		loginPage.createAnAccount("Wrong email");

		timeouts.waitForTheElementToBeReady(loginPage.errorMessage)
		
		expect(loginPage.errorMessage.getText()).toEqual("Invalid email address.");
	});
});
