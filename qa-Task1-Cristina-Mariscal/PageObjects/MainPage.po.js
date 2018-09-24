const Actions = require('../Utils/actions');

function MainPage(){
    this.SignInBtn = element(by.css('.login'));
    this.ClickLogIn = function (){
        Actions.clickToElement(this.SignInBtn);
    }
}

module.exports = new MainPage();