const accountId = 14783
let accountEmail = "kamalRautela@hotmail.com"
var accountPassword = "142"
accountCity = "Delhi"

//accountId = 230

accountEmail = "kamal@gmail.com"
accountPassword = "1728"
accountCity = "Far"
let accountState;

console.log(accountId);

/*
Prefer not to use var because of issue in block scope  and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])