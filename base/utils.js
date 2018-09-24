const casual = require("casual");
const uuidv1 = require('uuid/v1');

const Utils = function () {


    this.getRandomEmail = () => {
       return uuidv1() + "_" + casual.email;
    };

}
module.exports = new Utils();