const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const tasksPage = require('../page_objects/tasksPage');

beforeAll(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        loginPage.enterUserCredentials(data.email, data.password);
        expect(tasksPage.isTodayLabelDisplayed()).toBe(true);
    });

    it("Create a task", function() {
        tasksPage.createTask(data.taskName);
        expect(tasksPage.getLastTaskText()).toEqual(data.taskName);
    });

    it("Update a task", function() {
        tasksPage.updateTask(data.taskUpdate);
        expect(tasksPage.getLastTaskText()).toEqual(data.taskUpdate);
    });

    it("Delete a task", function() {
        const initialListLength = tasksPage.getTasksCount();
        tasksPage.deleteTask();
        expect(tasksPage.getTasksCount()).not.toEqual(initialListLength);
    });
});
