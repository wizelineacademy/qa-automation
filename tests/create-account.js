const homePage = require('../object_repository/home-page');
const loginPage = require('../object_repository/login-page');
const timeouts = require('../utilities/timeouts');
const createAccountPage = require('../object_repository/create-account-page');
const myAccountPage = require('../object_repository/myaccount-page');


beforeEach(() => {
	browser.waitForAngularEnabled(false);
	browser.get("http://automationpractice.com/index.php");
  });

describe('Validate Account Creation', () => {
	it('Should display error message when no email is entered.', ()=>{
		homePage.clickOnSignInButton();
		loginPage.createAnAccount("");

		timeouts.waitForTheElementToBeReady(loginPage.errorMessage)
		
		expect(loginPage.errorMessage.getText()).toEqual("Invalid email address.");
	});

	it("Should Register a new Account", () => {
		homePage.clickOnSignInButton();
		loginPage.createAnAccount("marco_dejesus"+ Date.now() +"@gmail.com");
		
		timeouts.waitForTheElementToBeReady(createAccountPage.genderMale, 5000);
		
		createAccountPage.selectGenderMaleOption();
		createAccountPage.enterName("Marco");
		createAccountPage.enterLastName("De Jesus");
		createAccountPage.enterPassword("12345");
		createAccountPage.selectDOBDayOption('5');
		createAccountPage.selectDOBMonthOption('February');
		createAccountPage.selectDOBYearOption('2010');
		createAccountPage.acceptNewsletter();
		createAccountPage.acceptSpecialOffers();
		createAccountPage.enterCompanyName("e");
		createAccountPage.enterAddressOne("Calle #34, 56456, Company");
		createAccountPage.enterCityName("City");
		createAccountPage.selectStateOption("Florida");
		createAccountPage.enterPostCode("34567");
		createAccountPage.enterMobilePhone("899  5676543");
		createAccountPage.enterAlias("the allias")
		createAccountPage.performTheRegistriation();

		timeouts.waitForTheElementToBeReady(myAccountPage.myAccountLabel, 15000);

		expect(myAccountPage.getMyAccountLabel()).toEqual("MY ACCOUNT");
	});
});
