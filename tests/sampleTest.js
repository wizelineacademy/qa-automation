var email = 'noemihv@gmail.com';
var pass = 'JeParle';
//import loginPage from '/Users/noemi/Documents/GitHub/qa-automation/tests/loginPage.js';
//import tasksPage from '/Users/noemi/Documents/GitHub/qa-automation/tests/tasksPage.js';
const loginPage = require('/Users/noemi/Documents/GitHub/qa-automation/tests/loginPage.js');
const tasksPage = require('/Users/noemi/Documents/GitHub/qa-automation/tests/tasksPage.js');

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        browser.get('https://todoist.com/Users/showLogin#start');
        browser.sleep(6000);
        loginPage.entreUserCredentials(email, pass);
        browser.sleep(6000);
        expect(taskPage.todayLabel.isPresent()).toBe(true);
    });

    it("Create a task", function() {
        tasksPage.createTask('Some Task');
        browser.sleep(6000);
        expect(tasksPage.addTaskLink.isPresent()).toBe(true);
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


