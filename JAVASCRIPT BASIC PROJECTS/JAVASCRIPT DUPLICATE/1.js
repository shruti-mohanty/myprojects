const accountId = 144553
let accountEmail = "shruti@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed

accountEmail = "Shruti@google.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

//Prefer not to use var
// because of issue in block scope and functional scope

console.log([accountId,accountEmail,accountPassword,accountCity]);