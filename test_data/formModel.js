var casual = require('casual')

const Form = function() {
    this.Male = "", 
    this.Female = "", 
    this.CustomerFirstName = casual.first_name, 
    this.CustomerLastName = casual.last_name, 
    //this.Email = "", 
    this.Password = 'helloworld', 
    this.DateOfBirth =  { day : casual.day_of_month, month: casual.month_number, year : casual.year },
    //Your Address
    this.FirstName = casual.first_name, 
    this.LastName = casual.last_name, 
    this.Company = "Wizeline", 
    this.Address = casual.address1, 
    this.AddressLine = "", 
    this.City = "Guadalajara", 
    this.State = "Oregon", 
    this.ZipCode = casual.zip(digits = 5),
    this.Country = "United States", 
    this.MobilePhone = casual.phone,
    this.AddressAlias = "aliastest"  
}

module.exports = new Form();

