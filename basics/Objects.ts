// !defining the types of fields in an object arguement passed in a function
function createUser({ name: string, age: number }): number {
    return 100;
}
createUser({ age: 45, name: "mohit" });


// !a function returning an object;
function giveobj(name: string, age: number): { name: string, age: number } {
    return { name, age };
}


//! BaD Behaviour
function createCourse({ name: string, isPaid: boolean }) { }
let course1 = { name: "computer science engineering", isPaid: true, email: "M@M.com" }

// * we shouldn't be allowed to do such a kind of a behaviour but we are able to do this. 
createCourse(course1);

export { };