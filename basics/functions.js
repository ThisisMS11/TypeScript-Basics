// any is given to email, password and isPaid here not preferrable for sure.
// function loginUser(email,password, isPaid){}
// loginUser("m","m@gmail.com",false);
// specifying types like this


function loginUser(email, password, isPaid) {
    console.log('user with email ', email, ' is logged in with password : ', password);
}
loginUser("m", "m@gmail.com", true);
// Setting default values for arguements to be passed in the function
function givename(name) {
    if (name === void 0) { name = "Mohit"; }
    return name;
}
console.log(givename());


