var casual = require('casual')
var form = require('./formModel')

/**
 * This class provides test objects, it is following up the "Object Mother Pattern" 
 *  https://martinfowler.com/bliki/ObjectMother.html 
 *  Used to generate test objects that fulfill test harness
 * @class ObjectBuilder
 */
class ObjectBuilder {
  /**
   *  Every time will return a different email   
   * @returns {string} email
   */
  getValidEmail() {
    return casual.email;
  }

  /**
   *  Returns a fixed email list with Invalid emails 
   * @returns {string} email
   */
  getInvalidEmails() {
    var invalidEmails = ['plainaddress', '#@%^%#$@#$@#.com', '@example.com',
      'Joe Smith <email@example.com>', 'email@example@example.com',
      'email..email@example.com','email@example.com (Joe Smith)', 'email@example',
      'email@-example.com', 'email@111.222.333.44444']
    return invalidEmails;
  }

  getDuplicatedEmail()
  {
    return 'email@example.web';
  }

  /**   
   * The max amount of valid characters in an email is 254
   * http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690 RFC Errata
   * @returns {string} email of exactly 254 characters   
   */
  getEmailMaxCharacters() {
    var maxCharsInEmail = 254;
    var email = casual.email;
    //generates n amount of  'a' letters to be appended to email
    var stringToAdd = new Array(maxCharsInEmail - email.length + 1).join('a');
    email.length
    return `${stringToAdd}${email}`
  }

  /**   
  * The max amount of valid characters in an email is 254
  * http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690 RFC Errata
  * @returns {string} email with  MORE than 254 characters
  * @memberof ObjectBuilder
  */
  getInvalidEmailCharacters() {
    var maxCharsInEmail = 260;
    var email = casual.email;
    var stringToAdd = new Array(maxCharsInEmail - email.length);
    email.length
    return `${stringToAdd}${email}`
  }


  getValidForm()
  {
    return form;
  }

}

module.exports = new ObjectBuilder();
