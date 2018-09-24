const actions = require('../base/actions');

function MyAccountPage (){
    //Webelements
    this.pageTitle = element(by.css('#center_column .page-heading'));

    this.getPageTitle = () => {
        return actions.getElementText(this.pageTitle);
    };
}

module.exports = new MyAccountPage();