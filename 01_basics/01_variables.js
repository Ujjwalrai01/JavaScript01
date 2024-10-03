const accountId = 1234567890
let accountEmail = "Ujjwal Rai"
var accountPassword = "778289"
accountCity = "bettiah"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ujjwal123.com"
accountPassword = "12121212"
accountCity = "Chanpatia"

console.log(accountId);


/*
prefer to not use var
beacuse of issue in block scope and fuctional scope  
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])