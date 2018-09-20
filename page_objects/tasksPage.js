/**
 * @description Page Object for Tasks Page.
 */
function TasksPage() {
  // Web elements for Tasks Page
  this.todayLabel = element(by.xpath('//*[@id="agenda_view"]/div/div/h2/a'));
  this.addTaskLink = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/a/span'));
  this.taskInput = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div'));
  this.addTaskButton = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[2]/tbody/tr/td[1]/a[1]/span'));
  this.firstTaskContent = element(by.css('.text.sel_item_content'));
  this.firstTaskInput = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div'));
  this.saveButton = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[2]/tbody/tr/td[1]/a[1]/span'));
  this.firstTaskMenu = element(by.xpath('//li[contains(@class, "task_item")]/table/tbody/tr/td[4]/div'));
  this.deleteTaskOption = element(by.xpath('/html/body/div[12]/table/tbody/tr[13]/td/div/div'));
  this.deleteButton = element(by.xpath('//*[@id="GB_window"]/div/div[2]/div/div/div/div[3]/a[1]/span'));

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
    this.firstTaskInput.clear();
    this.firstTaskInput.sendKeys(task);
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
