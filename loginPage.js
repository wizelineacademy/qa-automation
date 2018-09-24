function loginPage() {
    //this.email = element(by.xpath('//*[@id="email"]'));
    this.email = element(by.id('email'));
    //this.passwordTextField = element(by.xpath('//*[@id="password"]')).sendKeys(pass);
    this.passwordTextField = element(by.id('password'));
    //this.loginButton = element(by.xpath('//*[@id="login_form"]/a')).click();
    this.loginButton = element(by.id('login_form'));

    this.entreUserCredentials = (email, pass) => {
        this.emailTextField.sendKeys(email);
        this.passwordTextField.sendKeys(pass);
        this.loginButton.click();
    }
}
module.exports = new loginPage();