function Validators(){
	this.validateEmailAddress = (email_address) => {
        var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        console.log(typeof email_address)

        if(typeof email_address !== "undefined"){
            if(email_address.value.match(email_regex)){
                return true;
            }
        }
        return false;
	}
}

module.exports = new Validators();
