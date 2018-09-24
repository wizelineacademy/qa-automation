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
        expect(tasksPage.agendaView.isPresent()).toBe(true);
    });

    it("Create a task", function() {
        tasksPage.createTask('Some task');
        browser.sleep(6000);
        expect(tasksPage.tasksList.last().getText()).toEqual('Some task');
    });

    it("Update a task", function() {
        tasksPage.updateTask('Updated task');
        browser.sleep(6000);
        expect(tasksPage.tasksList.last().getText()).toEqual('Updated task');
    });

    it("Delete a task", function() {
        const initialListLength = tasksPage.tasksList.count();
        tasksPage.deleteTask();
        browser.sleep(6000);
        expect(tasksPage.tasksList.count()).not.toEqual(initialListLength);
    });
});
