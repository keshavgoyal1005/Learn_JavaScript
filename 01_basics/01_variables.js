const account_id = 5919174
let account_email = "kehavdikhani1005@gmail.com"
var accountpassword = "King123"
accountcity = "Sikar"   // not a good practise 
let accountstate;

// account_id = 123     not allowed 
account_email = "king@gmail.com"
accountpassword = "kkk123"
accountcity  = "jaipur"


console.log(account_id)
console.log(account_email)
console.table([account_id , account_email , accountpassword , accountcity, accountstate])

/*
preferred not to use Var 
beacause of issue in funcional scope and block scope 
*/