
let age:number = 10;
age=45.2
// now you don't have specifications in terms of integer and float when it comes to typescript both are considered as numbers only.

// everytime we make some changes we have to recompile our typescript code to be converted into javascript. 
console.log(age)

let iKnow:boolean = true;
console.log(iKnow.valueOf)

// when you are assigning a variable to it's value at the time of creation itself then you don't have to use : to specify the type

let marks=95;
// marks="Mohit"; <-------can't do this because typescript has already assigned a number data type to the marks variable.

console.log(marks);


//! Any 
let hero;
function giveHero(){
    return "Mohit";
}
hero=giveHero();  
//here typescript is not sure of the kind of data that is to put into hero so it marks it as any.

let hero2:number;
// hero2=giveHero();  <---not acceptable as giveHero returns a string but type of hero2 is a number.


export{}