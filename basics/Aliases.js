"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(myself) {
    return myself;
}
function marry() {
    return true;
}
var mohit = {
    _id: "1",
    name: "mohitsaini",
    email: "mohit@gmail.com",
    isActive: true,
    friends: ["pankaj", "aman", "piyush"]
};

mohit.email = "newemail@gmail.com";
// can't do this.
// mohit._id="12"
mohit.friends.push("alpha");
console.log(mohit.friends);
