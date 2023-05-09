// Interface and type are very much similar to each other
interface User {
    email: string,
    userId: number,
    googleId?: string,
    //startTrial : ()=> string ! denotes a function returning a string !
    startTrial(): string
    takesomearguements(id: number, name: string): boolean
}

// you can rewrite the interface like this. 
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "TA" | "learner";
}

const mohit: User = {
    email: "magfd", userId: 1,
    startTrial: () => {
        return "your trial has been started"
    },
    takesomearguements: (myid: 4, myname: "kejriwal") => {
        return true;
    },
    githubToken: "mohit@github.com"
};


console.log(mohit);
/*
! Difference between types and Interfaces
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces:~:text=typed%20type%20system.-,Differences%20Between%20Type%20Aliases%20and%20Interfaces,-Type%20aliases%20and
*/