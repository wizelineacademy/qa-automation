var casual = require('casual')
/**
 * @description Test Data  for Data.
 */
const Data = function () {
  this.registerEmail = casual.email;
  casual.define('title', function () {
    return {
      mr: 1,
      mrs: 2
    }

  })

  this.personalInformation = {
    title: casual.title,
    firstName: casual.first_name,
    lastName: casual.last_name,
    password: casual.password,
    day: casual.day_of_month,
    month: casual.month_number,
    year: casual.year,
    newsletter: casual.coin_flip,
    special: casual.coin_flip,
  }

  this.adress = {
    company: casual.company_name,
    address1: casual.address1,
    address2: casual.address2,
    city: casual.city,
    state: casual.state,
    postalCode: casual.zip(digits = 5),
    country: casual.country,
    other: casual.description,
    phone: casual.phone,
    mobile: casual.phone,
    alias: casual.username
  }
}

 module.exports = new Data();
