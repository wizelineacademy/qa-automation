const actions = require('../base/actions');
const data = require('../test_data/data');

function MyAccountPage() {
    this.signInLabel = element(by.css('.login'));
    this.contactUs = element(by.id('contact-link'));
    this.authenticationLabel = element(by.css('.navigation_page'));
    this.infoAccountLabel = element(by.css('.info-account'));

    this.infoAccountLabelIsDisplayedCorretly = () => {

        expect(actions.getElementText(this.infoAccountLabel)).toEqual(data.myAccountHeader);
    }

}

module.exports = new MyAccountPage();