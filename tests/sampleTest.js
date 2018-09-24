const LoginPage = require('../page_objects/loginPage.po');
const TasksPage = require('../page_objects/tasksPage.po');


describe("SignIn into the Site", function() {
  it("Enter application", function() {
    const loginPage = new LoginPage();

    browser.get('https://todoist.com/Users/showLogin#start');

    loginPage.enterUserCredentials(
      browser.params.user.admin.email,
      browser.params.user.admin.password
    );

    expect(loginPage.agendaView.isPresent()).toBe(true);
  });

  it("Create a task", function() {
    const tasksPage = new TasksPage();
    const TASK_NAME = 'Some task';

    tasksPage.createNewTask(TASK_NAME);
    expect(tasksPage.taskList.last().getText()).toEqual(TASK_NAME);
  });

  it("Update a task", function() {
    const tasksPage = new TasksPage();
    const TASK_NAME = 'Updated task';

    tasksPage.updateFirstTask(TASK_NAME);
    expect(tasksPage.taskList.last().getText()).toEqual(TASK_NAME);
  });

    it("Delete a task", function() {
      const tasksPage = new TasksPage();

      const taskCount = tasksPage.taskList.count();
      tasksPage.deleteLastTask();
      expect(tasksPage.taskList.count()).not.toEqual(taskCount);
    });
});
