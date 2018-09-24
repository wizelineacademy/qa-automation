function tasksPage() {
    //Elements of create task
    //this.todayLabel = element(by.xpath('//*[@id="agenda_view"]/div/div/h2/a'));
    this.agendaView = element(by.id('agenda_view')); //adenda view es el id de varios elementos
    //this.addTaskLink = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/a/span'));
    this.addTaskLink = element(by.css('.agenda_add_task a'));
    //this.taskInput = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div'));
    this.taskInput = element(by.css('.sel_richtext_editor'));
    //this.addTaskButton = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[2]/tbody/tr/td[1]/a[1]/span'));
    this.addTaskButton = element(by.css('ist_button.ist_button_red.submit_btn'));
    this.loading = element(by.id(loading));


    //Elements of update task
    this.firstTaskContent = element(by.css('.text.sel_item_content'));
    //this.firstTaskInput = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div'));
    this.firstTaskInput = element(by.css('.text_box_holder'));
    //this.saveButton = element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[2]/tbody/tr/td[1]/a[1]/span'));
    this.saveButton = element(by.css('ist_button.ist_button_red.submit_btn'));


    //Elements of delete task
    //this.firstTaskMenu = element(by.xpath('//li[contains(@class, "task_item")]/table/tbody/tr/td[4]/div'));
    this.firstTaskMenu = element(by.css(''));
    this.deleteTaskOption = element(by.xpath('/html/body/div[12]/table/tbody/tr[13]/td/div/div'));
    this.deleteButton = element(by.xpath('//*[@id="GB_window"]/div/div[2]/div/div/div/div[3]/a[1]/span'));
    
    this.createTask = (task) => {
        /*this.addTaskLink.click();
        this.taskIpunt.sendkeys(task);
        this.addTaskButton.click();*/
        actions.waitForInvisible(this.loading);
        actions.clickToElement(this.addTaskLink);
        actions.enterText(this.taskInput, task);
        actions.clickToElement(this.submitButton);
    };

    this.updateTask = (task) => {
        this.firstTaskContent.click();
        this.firstTaskInput.clear();
        this.firstTaskInput.sendkeys(task);
        this.saveButton.click();
    };

    this.deleteTask = (task) => {
        browser.actions().mouseMove(this.firstTaskContent).perform();
        browser.sleep(1000);
        this.firstTaskMenu.click();
        browser.sleep(1000);
        this.deleteTaskOption.click();
        this.deleteButton.click();
    };

}

module.exports = new tasksPage();