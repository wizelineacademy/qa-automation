const casual = require('casual');

function MainPageData(){
    this.URL = 'http://automationpractice.com/index.php';    
}

function AccountData(){
    this.Title = casual.integer(from = 0, to = 1);
    this.FirstName = casual.first_name;
    this.LastName = casual.last_name;
    this.Email = casual.email;
    this.Password = casual.password;
    this.DateOfBirth ={
        Day: casual.day_of_month,
        Month: casual.month_number,
        Year: casual.year
    }
    this.Company = casual.company_name;
    this.Address = casual.address1;
    this.City = casual.city;
    this.State = casual.integer(from = 1, to = 50);
    this.Postcode = casual.zip(digits = 5);
    this.Country = 21;
    this.MobilePhone = casual.phone;
    this.AddressAlias = casual.word;
}

module.exports = {MainPageData: new MainPageData(), AccountData: new AccountData()}