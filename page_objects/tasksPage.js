/**
 * @description Page Object for Tasks Page.
 */
function TasksPage() {
  // Web elements for Tasks Page
  this.todayLabel = element(by.css('.section_header a'));
  this.addTaskLink = element(by.linkText('Add Task'));
  this.taskInput = element(by.css('.sel_richtext_editor'));
  this.addTaskButton = element(by.css('.ist_button_red span'));
  this.firstTaskContent = element(by.css('.text.sel_item_content'));
  this.saveButton = element(by.linkText('Save'));
  this.firstTaskMenu = element(by.css('.task_item td.menu'));
  this.deleteTaskOption = element(by.xpath('//div[contains(@class, "ist_menu") and not(contains(@style,"display: none;"))]//div[contains(text(),"Delete task")]'));
  this.deleteButton = element(by.linkText('Delete'));

  /**
   * @description Function used to create a Task
   * @method createTask
   * @param {String} task
   */
  this.createTask = (task) => {
    this.addTaskLink.click();
    this.taskInput.sendKeys(task);
    this.addTaskButton.click();
  };

  /**
   * @description Function used to update a Task
   * @method updateTask
   * @param {String} task
   */
  this.updateTask = (task) => {
    this.firstTaskContent.click();
    this.taskInput.clear();
    this.taskInput.sendKeys(task);
    this.saveButton.click();
  };

  /**
   * @description Function used to delete a Task
   * @method deleteTask
   * @param {String} task
   */
  this.deleteTask = () => {
    browser.actions().mouseMove(this.firstTaskContent).perform();
    browser.sleep(1000);
    this.firstTaskMenu.click();
    browser.sleep(1000);
    this.deleteTaskOption.click();
    this.deleteButton.click();
  };
}
module.exports = new TasksPage();
