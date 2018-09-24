const actions = require('../base/actions');

/**
 * @description Page Object for Tasks Page.
 */
function TasksPage() {
  // Web elements for Tasks Page
  this.agendaView = element(by.id('agenda_view'));
  this.addTaskLink = element(by.css('.agenda_add_task a'));
  this.taskInput = element(by.css('.sel_richtext_editor'));
  this.submitButton = element(by.css('.submit_btn'));
  this.tasksList = element.all(by.css('.text.sel_item_content'));
  this.taskMenuList = element.all(by.css('.task_item td.menu'));
  this.deleteTaskOption = element(by.xpath('//div[contains(@class, "ist_menu") and not(contains(@style,"display: none;"))]//td[contains(@data-track,"task|more_delete")]'));
  this.deleteButton = element(by.css('.ist_button_red'));
  this.loading = element(by.id('loading'));

  /**
   * @description Function used to create a Task
   * @method createTask
   * @param {String} task
   */
  this.createTask = (task) => {
    actions.waitForInvisible(this.loading);
    actions.clickToElement(this.addTaskLink);
    actions.enterText(this.taskInput, task);
    actions.clickToElement(this.submitButton);
  };

  /**
   * @description Function used to update a Task
   * @method updateTask
   * @param {String} task
   */
  this.updateTask = (task) => {
    actions.clickToElement(this.tasksList.last());
    actions.clearElementText(this.taskInput);
    actions.enterText(this.taskInput, task);
    actions.clickToElement(this.submitButton);
  };

  /**
   * @description Function used to delete a Task
   * @method deleteTask
   */
  this.deleteTask = () => {
    actions.hoverElement(this.tasksList.last());
    actions.clickToElement(this.taskMenuList.last());
    actions.clickToElement(this.deleteTaskOption);
    actions.clickToElement(this.deleteButton);
  };

  /**
   * @description Function used to get the text from the last text
   * @method getLastTaskText
   */
  this.getLastTaskText = () => {
    return actions.getElementText(this.tasksList.last());
  };

  /**
   * @description Function used to know if the Agenda View is displayed
   * @method isAgendaViewDisplayed
   */
  this.isAgendaViewDisplayed = () => {
    return actions.isElementDisplayed(this.agendaView);
  };

  /**
   * @description Function used to get the number of tasks in the task list
   * @method getTasksCount
   */
  this.getTasksCount = () => {
    return this.tasksList.count();
  };
}
module.exports = new TasksPage();
