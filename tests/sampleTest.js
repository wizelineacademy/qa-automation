const data = require('../test_data/data');
const page = require('../page_objects/page');
const logger = require('../base/logger');
const landingPage = require('../page_objects/landingPage');
const authPage = require('../page_objects/authenticationPage');

beforeAll(function () {
  page.openUrl()
})

describe("Creating a new Account", function() {
    it("Should display an error message when creating an account without email", function() {        
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        expect(authPage.isEmailErrorDisplayed()).toBe(true);
    });

  /* it("Should display an error message when creating an account without email", function() {        
        landingPage.clickSignIn();
        authPage.clickCreateAccount();
        expect(authPage.isEmailErrorDisplayed()).toBe(true);
    });*/

    // it("Update a task", function() {
    //     tasksPage.updateTask(data.taskUpdate);
    //     expect(tasksPage.getLastTaskText()).toEqual(data.taskUpdate);
    // });

    // it("Delete a task", function() {
    //     const initialListLength = tasksPage.getTasksCount();
    //     tasksPage.deleteTask();
    //     expect(tasksPage.getTasksCount()).not.toEqual(initialListLength);
    // });
});
