const data = require('../test_data/data');
const accountFormData = require('../test_data/createAccountFormData');
const page = require('../page_objects/page')

const accountPage = require('../page_objects/accountPage');

beforeAll(function () {
  page.openUrl()
})

describe("Task 1 QA Create an Account", function() {

    it("Blank email validation", function() {

        accountPage.emptyAccount(data.emptyMail);
        expect(accountPage.isErrorAccountAlertDispleyed()).toBe(true);

    });

    it("Create Account with a random mail ", function () {
        accountPage.createRandomAccount(accountFormData);
        expect(accountPage.isMyAccountDisplayed()).toBe(true);


    });


/*
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
    */
}); // Fin describe
