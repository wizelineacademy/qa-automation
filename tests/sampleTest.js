var email = 'YOUR_MAIL';
var pass = 'YOUR_PASSWORD';
const loginPage = require('../page_objects/loginPage');
const tasksPage = require('../page_objects/tasksPage');

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        browser.get('https://todoist.com/Users/showLogin#start');
        browser.sleep(6000);
        loginPage.enterUserCredentials(email, pass);
        browser.sleep(6000);
        expect(tasksPage.todayLabel.isPresent()).toBe(true);
    });

    it("Create a task", function() {
        tasksPage.createTask('Some task');
        browser.sleep(6000);
        expect(tasksPage.firstTaskContent.getText()).toEqual('Some task');
    });

    it("Update a task", function() {
        tasksPage.updateTask('Updated task');
        browser.sleep(6000);
        expect(tasksPage.firstTaskContent.getText()).toEqual('Updated task');
    });

    it("Delete a task", function() {
        tasksPage.deleteTask();
        browser.sleep(6000);
        expect(tasksPage.firstTaskContent.isPresent()).toBe(false);
    });
});
