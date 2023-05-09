type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(myself: User): User {
    return myself;
}

type bool = boolean;

function marry(): bool {
    return true;
}


type User2 = {
    //  we do not want our _id to be affected that's why.
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetials?: number  //? Optional field
    readonly friends: string[]
}


const mohit: User2 = {
    _id: "1",
    name: "mohitsaini",
    email: "mohit@gmail.com",
    isActive: true,
    friends: ["pankaj", "aman", "piyush"]
}

mohit.email = "newemail@gmail.com"
// can't do this.
// mohit._id="12"

// ! Yes we can push shows no error on compilation.
mohit.friends.push("alpha");

console.log(mohit.friends);

export { }
