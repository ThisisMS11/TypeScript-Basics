// any is given to email, password and isPaid here not preferrable for sure.
// function loginUser(email,password, isPaid){}
// loginUser("m","m@gmail.com",false);

// specifying types like this
function loginUser(email: string, password: string, isPaid: boolean) {
    console.log('user with email ', email, ' is logged in with password : ', password);
}
loginUser("m", "m@gmail.com", true);

// Setting default values for arguements to be passed in the function
function givename(name: string = "Mohit") {
    return name;
}

console.log(givename())

//!Defining the return type of a function using typescript

function myfunction(name: string): string {
    return name;
}

const heroes = ["mohit", "aayush", "karan"];
// typescript automatically detects that hero is having string type out here.

heroes.map((hero): string => {
    return `My favourite here is ${hero}`
})

//* Some functions never return a value:
function fail(msg: string): never {
    throw new Error(msg);
}


export { }

