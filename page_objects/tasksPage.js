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

  /**
   * @description Function used to create a Task
   * @method createTask
   * @param {String} task
   */
  this.createTask = (task) => {
    this.addTaskLink.click();
    this.taskInput.sendKeys(task);
    this.submitButton.click();
  };

  /**
   * @description Function used to update a Task
   * @method updateTask
   * @param {String} task
   */
  this.updateTask = (task) => {
    this.tasksList.last().click();
    this.taskInput.clear();
    this.taskInput.sendKeys(task);
    this.submitButton.click();
  };

  /**
   * @description Function used to delete a Task
   * @method deleteTask
   * @param {String} task
   */
  this.deleteTask = () => {
    this.taskMenuList.last().click();
    browser.sleep(1000);
    this.deleteTaskOption.click();
    this.deleteButton.click();
  };
}
module.exports = new TasksPage();
