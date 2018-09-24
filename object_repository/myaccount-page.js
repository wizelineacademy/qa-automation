function MyAccountPage(){

    this.myAccountLabel = element(by.css(".page-heading"));

	this.getMyAccountLabel = () => {
        return this.myAccountLabel.getText();
	}
}

module.exports = new MyAccountPage();