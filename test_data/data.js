const Data = function () {

   this.userPre = 'ivan'+Date.now()+"@example.com";
   this.password = '123';
   this.defaultAlias = 'My address';
   this.userInfo = {
     'name' : 'Ivan',
     'lastName' : "Carrillo Bustos",
     'password' : 'Lenovo#4',
     'company' : "Free Agent CRM",
     'address' : "Some where",
     'address2' : "Some where 2",
     'city' : 'Guadalajara',
     'zip' : '45520',
     'aInfo' : "I like tacos, tequila and pozole. because mexican ajiajiajiajia",
     'hPhone' : '33300849',
     'cPhone' : '3311195701',
     'nicName' : 'New Address'
   };
 }
 module.exports = new Data();
