/* now allowed */

// const superHeroes=[]
// superHeroes.push("mario") 

// const superHeroes:[]=[] // represents an empty array

const superHeroes: string[] = []
superHeroes.push("Mohit");
superHeroes.push("Aman");


type User = {
    name: string
    isActive: boolean
}

const userlist: User[] = [];
userlist.push({ name: "Mohit Saini", isActive: true })


/* we can also define it using the following
const userlist2: Array<User> = []; */

// For a 2D array

const coordinates: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(coordinates)


