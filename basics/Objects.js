"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defining the types of fields in an object arguement passed in a function
function createUser(_a) {
    var string = _a.name, number = _a.age;
    return 100;
}
createUser({ age: 45, name: "mohit" });
