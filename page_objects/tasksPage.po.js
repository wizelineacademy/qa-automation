const Actions = require('../base/actions');
const actions = new Actions();

class TasksPage {
  constructor() {
    this.addTask = element(by.css('.agenda_add_task a'));
    this.taskList = element.all(by.css('.text.sel_item_content'));
    this.activeTaskDeleteButton = element(by.css('.ist_menu[style|="z"] .sel_delete_task'));
    this.activeTaskDeletePopupButton = element(by.css('.alert_holder .ist_button_red'));
    this.activeTaskHoverMenu = element(by.css('.task_item td.menu'));
    this.taskNameInput = element(by.css('.sel_richtext_editor'));
    this.submitButton = element(by.css('.submit_btn'));
  }

  createNewTask(name) {
    actions.clickElement(this.addTask);
    actions.enterText(this.taskNameInput, name);
    actions.clickElement(this.submitButton);
  }

  updateFirstTask(name) {
    actions.clickElement(this.taskList.last());
    actions.clearText(this.taskNameInput);
    actions.enterText(this.taskNameInput, name);
    actions.clickElement(this.submitButton);
  }

  deleteLastTask() {
    actions.hoverElement(this.taskList.last());
    actions.clickElement(this.activeTaskHoverMenu);
    actions.clickElement(this.activeTaskDeleteButton);
    actions.clickElement(this.activeTaskDeletePopupButton);
  }
}

module.exports = TasksPage;