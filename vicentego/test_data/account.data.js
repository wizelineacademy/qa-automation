const Account = function () {
    this.gender = 'Mr.';
    this.firstname = 'Vincent';
    this.lastname = 'Van Gogh';
    this.email = 'Vincent.Van.Gogh@wqa.com';
    this.password = 'pass4test';
    this.day = 30;
    this.month = 3;
    this.year = 1990;
    this.newsletter = 1;
    this.specialoffers = 1;

    this.addressFirstName = 'Cesar';
    this.addressLastName = 'Chavez';
    this.addressCompany = 'Gob';
    this.addressLine1 = '345 Stockton';
    this.addressLine2 = 'Finantial District';
    this.city = 'San Francisco';
    this.state = 'California';
    this.zip = '94108';
    this.country = 'United States';
    this.additionalInformation = 'Lorem ipsum dolor sit amet,';
    this.homePhone = '+1 415-398-1234';
    this.mobilePhone = '+1 415-398-1234';
    this.addressAlias = 'pier39';
}
module.exports = new Account();