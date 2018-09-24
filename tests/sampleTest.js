var email = 'YOUR_MAIL';
var pass = 'YOUR_PASSWORD';

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        browser.get('https://todoist.com/Users/showLogin#start');
        browser.sleep(6000);
        element(by.xpath('//*[@id="email"]')).sendKeys(email);
        element(by.xpath('//*[@id="password"]')).sendKeys(pass);
        element(by.xpath('//*[@id="login_form"]/a')).click();
        browser.sleep(6000);
        expect(element(by.xpath('//*[@id="agenda_view"]/div/div/h2/a')).isPresent()).toBe(true);
    });

    it("Create a task", function() {
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/a/span')).click();
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div')).sendKeys('Some task');
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[2]/form/table[2]/tbody/tr/td[1]/a[1]/span')).click();
        browser.sleep(6000);
        expect(element(by.css('.text.sel_item_content')).getText()).toEqual('Some task');
    });

    it("Update a task", function() {
        element(by.css('.text.sel_item_content')).click();
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div')).clear();
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[1]/tbody/tr/td/table/tbody/tr/td[1]/div')).sendKeys('Updated task');
        element(by.xpath('//*[@id="agenda_view"]/div/ul/li[3]/form/table[2]/tbody/tr/td[1]/a[1]/span')).click();
        browser.sleep(6000);
        expect(element(by.css('.text.sel_item_content')).getText()).toEqual('Updated task');
    });

    it("Delete a task", function() {
        browser.actions().mouseMove(element(by.css('.text.sel_item_content'))).perform();
        browser.sleep(1000);
        element(by.xpath('//li[contains(@class, "task_item")]/table/tbody/tr/td[4]/div')).click();
        browser.sleep(1000);
        element(by.xpath('/html/body/div[12]/table/tbody/tr[13]/td/div/div')).click();
        element(by.xpath('//*[@id="GB_window"]/div/div[2]/div/div/div/div[3]/a[1]/span')).click();
        browser.sleep(6000);
        expect(element(by.css('.text.sel_item_content')).isPresent()).toBe(false);
    });
});
