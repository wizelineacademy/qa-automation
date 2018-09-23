const actions = require('../base/actions');

/**
 * @description Page Object for Tasks Page.
 */
class TasksPage {
  // Web elements for Tasks Page
  constructor() {
    this.agendaView = element(by.id('agenda_view'));
    this.addTaskLink = element(by.css('.agenda_add_task a'));
    this.taskInput = element(by.css('.sel_richtext_editor'));
    this.submitButton = element(by.css('.submit_btn'));
    this.tasksList = element.all(by.css('.text.sel_item_content'));
    this.taskMenuList = element.all(by.css('.task_item td.menu'));
    this.deleteTaskOption = element(by.xpath('//div[contains(@class, "ist_menu") and not(contains(@style,"display: none;"))]//td[contains(@data-track,"task|more_delete")]'));
    this.deleteButton = element(by.css('.ist_button_red'));
    this.loading = element(by.id('loading'));
  }
  /**
   * @description Function used to create a Task
   * @method createTask
   * @param {String} task
   */
  createTask(task) {
    actions.waitForInvisible(this.loading);
    actions.clickElement(this.addTaskLink);
    actions.enterText(this.taskInput, task);
    actions.clickElement(this.submitButton);
  };

  /**
   * @description Function used to update a Task
   * @method updateTask
   * @param {String} task
   */
  updateTask(task) {
    actions.clickElement(this.tasksList.last());
    actions.clearElementText(this.taskInput);
    actions.enterText(this.taskInput, task);
    actions.clickElement(this.submitButton);
  };

  /**
   * @description Function used to delete a Task
   * @method deleteTask
   */
  deleteTask() {
    actions.hoverElement(this.tasksList.last());
    actions.clickElement(this.taskMenuList.last());
    actions.clickElement(this.deleteTaskOption);
    actions.clickElement(this.deleteButton);
    browser.sleep(3000)
  };

  /**
   * @description Function used to get the text from the last text
   * @method getLastTaskText
   */
  getLastTaskText() {
    return actions.getElementText(this.tasksList.last());
  };

  /**
   * @description Function used to know if the Agenda View is displayed
   * @method isAgendaViewDisplayed
   */
  isAgendaViewDisplayed() {
    return actions.isElementDisplayed(this.agendaView);
  };

  /**
   * @description Function used to get the number of tasks in the task list
   * @method getTasksCount
   */
  getTasksCount() {
    return this.tasksList.count();
  };
}
module.exports = new TasksPage();
