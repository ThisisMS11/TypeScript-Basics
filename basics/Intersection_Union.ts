type CardDate = {
    cardDate: string
}

type cardNumber = {
    cardNumber: string
}

// combining multiple types like this.
type cardDetails = CardDate & cardNumber & {
    cvv: number
}

/* Union type */
let score: number | string | boolean;
score = 12;
score = "mohit";
score = true;

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let mohit: User | Admin = { name: "Mohit Saini", id: 334 };

mohit = { username: "mohit", id: 334 };

function getDbId(id: number | string) {

    // so if it is something like this then you have to first check and then perform corresponding functions. 

    if (typeof (id) === "string") {
        id.toLowerCase();
    }

    // id=id+2; not valid 
}


// unions with arrays
const data1: number[] | string[] = [1, 2]

//^ In this way both are acceptable. 
const data2: (number |string )[]= ["1",1]

