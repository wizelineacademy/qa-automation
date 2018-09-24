const Util = function () {
    this.getEmailRandomly = function () {
        return "v" + new Date().valueOf() + "@wqa.com";
    }
}
module.exports = new Util();